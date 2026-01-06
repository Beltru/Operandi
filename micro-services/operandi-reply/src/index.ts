import express from 'express';
import { config } from './config';
import { replyQueue } from './services/queue.service';

const app = express();

app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'operandi-reply' });
});

// Webhook Endpoint
app.post('/webhooks/meli', async (req, res) => {
    try {
        const { topic, resource, user_id } = req.body;

        console.log(`Webhook Received: ${topic} - ${resource}`);

        // Immediately respond 200 OK to Mercado Libre
        // (Processing happens in background queue later)
        res.status(200).send();

        if (topic === 'questions') {
            console.log('Queuing question for processing...');

            // Add to Queue
            await replyQueue.add('process-question', {
                resourceId: resource,
                userId: user_id
            }, {
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 2000
                },
                removeOnComplete: true
            });
        }

    } catch (error) {
        console.error('Webhook Error:', error);
        // Even on error, we might want to return 200 to ML to stop retries if it's a logic error,
        // but 500 triggers ML retry logic which is good for transient errors.
        res.status(500).send();
    }
});

app.listen(config.server.port, async () => {
    console.log(`🚀 Service running on port ${config.server.port}`);
    console.log(`Worker active: ${config.redis.host}:${config.redis.port}`);

    try {
        // Check DB connection
        await prisma.$connect();
        console.log('✅ Connected to Database');
    } catch (err) {
        console.error('❌ Database connection failed', err);
    }
});

// Import worker to start processing (in same process for MVP)
import './services/queue.service';
import { prisma } from './services/db.service';
