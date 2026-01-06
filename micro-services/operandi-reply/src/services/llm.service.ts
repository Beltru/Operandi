import OpenAI from 'openai';
import { config } from '../config';

class LLMService {
    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            apiKey: config.openai.apiKey,
        });
    }

    async generateResponse(question: string, context: string): Promise<string> {
        try {
            const completion = await this.openai.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: `You are a helpful and persuasive sales assistant for a Mercado Libre store. 
            Use the provided context about the product to answer the user's question concisely.
            Context: ${context}
            
            Rules:
            - Answer in Spanish (Rioplatense variant natural).
            - Be concise (max 2 sentences).
            - Always try to close the sale.
            - If the answer is not in the context, say "Consulto y te aviso".`
                    },
                    { role: 'user', content: question }
                ],
                model: 'gpt-4o-mini', // Cost-effective model
                max_tokens: 150,
            });

            return completion.choices[0].message.content || 'No pude generar una respuesta.';
        } catch (error) {
            console.error('Error generating LLM response:', error);
            throw error;
        }
    }
}

export const llmService = new LLMService();
