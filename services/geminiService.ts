import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client
// Note: In a real app, handle missing API key gracefully in UI
const ai = new GoogleGenAI({ apiKey });

export const generateThinkingResponse = async (
  prompt: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const modelId = 'gemini-3-pro-preview';

    // Format history for the SDK
    const formattedHistory = history.map(h => ({
      role: h.role,
      parts: h.parts
    }));

    const chat = ai.chats.create({
      model: modelId,
      history: formattedHistory,
      config: {
        thinkingConfig: {
          thinkingBudget: 32768 // Max budget for deep reasoning
        },
      }
    });

    const result = await chat.sendMessage({
      message: prompt
    });

    return result.text || "No response generated.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error: Unable to generate response. Please check your API key and try again.";
  }
};