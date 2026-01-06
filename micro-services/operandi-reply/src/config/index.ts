import dotenv from 'dotenv';
dotenv.config();

export const config = {
    server: {
        port: process.env.PORT || 3001,
        env: process.env.NODE_ENV || 'development',
    },
    meli: {
        appId: process.env.MELI_APP_ID,
        clientSecret: process.env.MELI_CLIENT_SECRET,
        accessToken: process.env.MELI_ACCESS_TOKEN,
        userId: process.env.MELI_USER_ID,
    },
    openai: {
        apiKey: process.env.OPENAI_API_KEY,
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
    },
};
