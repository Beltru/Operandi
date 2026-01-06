import { Queue, Worker, Job } from 'bullmq';
import { config } from '../config';
import { QuestionJobData } from '../types';
import { llmService } from './llm.service';

// 1. Definition of the Queue
export const replyQueue = new Queue('reply-queue', {
    connection: config.redis,
});

// 2. Worker Logic (The Consumer)
// In a real microservice, this might run in a separate process container
export const replyWorker = new Worker<QuestionJobData>(
    'reply-queue',
    async (job: Job<QuestionJobData>) => {
        console.log(`Processing Job ${job.id}:`, job.data);

        // Simulate Fetching Context from Mercado Libre (TODO: Implement Real API Call)
        const mockContext = `
      Producto: Kit Distribucion Vw Gol Trend Voyage Fox Suran 1.6 8v
      Precio: $125.000
      Compatibilidad: VW Gol Trend, Voyage, Fox, Suran (Motor CFZ / MSi)
      Descripción: Original Volkswagen. Incluye correa, tensor y bomba de agua.
    `;

        // Simulate Fetching Question Text (TODO: Implement Real API Call)
        const mockQuestion = "Hola sirve para un gol 2013?";

        // Generate Answer with AI
        const answer = await llmService.generateResponse(mockQuestion, mockContext);

        console.log(`🤖 AI Answer: ${answer}`);

        // TODO: Post answer to Mercado Libre
        return { status: 'answered', answer };
    },
    {
        connection: config.redis,
        concurrency: 5, // Process 5 questions in parallel
        limiter: {
            max: 10, // Max 10 answers per second (Respecting API Limits)
            duration: 1000,
        },
    }
);

replyWorker.on('completed', (job) => {
    console.log(`Job ${job.id} completed successfully`);
});

replyWorker.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed:`, err);
});
