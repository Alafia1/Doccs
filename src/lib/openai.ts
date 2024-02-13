import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAO_API_KEY,
});
