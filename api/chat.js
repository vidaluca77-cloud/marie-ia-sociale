// Vercel serverless function for secure OpenAI API integration
// This endpoint handles AI chat requests for Marie Social Assistant

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body;

        // Validate input
        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get OpenAI API key from environment variables
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            console.error('OpenAI API key not found in environment variables');
            return res.status(500).json({ error: 'AI service not configured' });
        }

        // Marie's system prompt optimized for social assistance in Caen
        const systemPrompt = `Tu es Marie, assistante sociale empathique basée à Caen, en Normandie. Tu aides les personnes en difficulté sociale avec des solutions concrètes et pratiques.

IMPORTANTES CONSIGNES :
- Réponds en 200 mots maximum
- Sois empathique et encourageante
- Donne 2-3 solutions pratiques avec coordonnées locales
- Utilise un ton professionnel mais chaleureux
- Finis toujours par un encouragement

SERVICES CAEN PRIORITAIRES :
- CCAS Caen : 02 31 30 47 90 (aide d'urgence, RSA, accompagnement)
- Restos du Cœur Caen : 02 31 84 12 34 (aide alimentaire)
- Secours Populaire Caen : 02 31 86 88 31 (aide générale)
- CAF Calvados : 32 30 (allocations familiales, logement)
- Pôle Emploi Caen : 39 49 (emploi, formation)

FORMAT RÉPONSE :
1. Accueil empathique
2. 2-3 solutions concrètes avec coordonnées
3. Encouragement final`;

        // Call OpenAI API
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });

        if (!openaiResponse.ok) {
            const errorData = await openaiResponse.json().catch(() => ({}));
            console.error('OpenAI API error:', openaiResponse.status, errorData);
            throw new Error(`OpenAI API error: ${openaiResponse.status}`);
        }

        const data = await openaiResponse.json();
        const aiResponse = data.choices[0]?.message?.content?.trim();

        if (!aiResponse) {
            throw new Error('No response from AI');
        }

        // Return successful response
        res.status(200).json({
            success: true,
            response: aiResponse,
            source: 'ai'
        });

    } catch (error) {
        console.error('Chat API error:', error);
        
        // Return fallback response for any error
        const fallbackResponse = `Je comprends votre situation et je souhaite vous aider. Je vous recommande de contacter le CCAS de Caen au 02 31 30 47 90 qui pourra évaluer vos droits et vous accompagner. Vous pouvez aussi appeler le 3939 pour obtenir des informations sur vos droits sociaux. Les Restos du Cœur (02 31 84 12 34) et le Secours Populaire (02 31 86 88 31) peuvent vous aider rapidement. N'hésitez pas à solliciter de l'aide, chaque situation mérite un accompagnement personnalisé.`;
        
        res.status(200).json({
            success: true,
            response: fallbackResponse,
            source: 'fallback'
        });
    }
}