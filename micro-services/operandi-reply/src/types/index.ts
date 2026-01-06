export interface MeliWebhook {
    _id: string;
    topic: string;
    resource: string;
    user_id: number;
    application_id: number;
    sent: string;
    attempts: number;
    received: string;
}

export interface QuestionJobData {
    resourceId: string; // /questions/123456
    userId: number;
}
