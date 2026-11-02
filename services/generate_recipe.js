// connect to gemini
const { GoogleGenAI } = require('@google/genai');

// use my api key
const ai = new GoogleGenAI({});

// tell gemini what to make
const systemPrompt = `
You are a recipe assistant.

Create simple, affordable, and healthy recipes.

Rules:

1. Use only ingredients the user provides.

2. Never include ingredients the user is allergic to.

3. Follow all dietary restrictions.

4. Do not suggest unsafe or nonfood ingredients.

5. If there are not enough ingredients, make the simplest possible recipe.

6. Give clear, easy cooking instructions.
`;
// send ingredients to gemini
function generateRecipe(ingredients) {
    return ai.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: ingredients,
        config: {
            systemInstruction: systemPrompt,
            responseMimeType: 'application/json',
            responseSchema: {
                type: 'OBJECT',
                properties: {
                    name: { type: 'STRING' },
                    description: { type: 'STRING' },
                    ingredients: {
                        type: 'ARRAY',
                        items: { type: 'STRING' }
                    },
                    instructions: {
                        type: 'ARRAY',
                        items: { type: 'STRING' }
                    }
                },
                required: [
                    'name',
                    'description',
                    'ingredients',
                    'instructions'
                ]
            }
        }
    }).then(response => JSON.parse(response.text));
}

// let other files use this function
module.exports = generateRecipe;