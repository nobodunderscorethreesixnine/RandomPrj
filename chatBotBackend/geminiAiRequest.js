const { GoogleGenAI } = require("@google/genai");
const client = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function callAI(userMessage) {
  const response = await client.models.generateContent({
    model: "gemini-3.6-flash",
    contents: userMessage,
  });

  return response.text;
}

module.exports = callAI;
