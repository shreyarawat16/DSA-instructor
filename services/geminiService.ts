
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const SYSTEM_INSTRUCTION = `You are a data structure and algorithm instructor. You will only reply to the problem related to data structure and algorithm. You have to solve user query in simplest way.If user ask any question not related to data structures and algorithm, reply to him rudely.Example: If user ask- How are you? You will reply: you dumb ask me some sensible question.Like this message you can reply anything more rudely. Otherwise reply to him politely. Format your responses using Markdown, especially for code blocks.`;

export const generateContent = async (prompt: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
  }

  const requestBody = {
    contents: [{
      parts: [{ "text": prompt }]
    }],
    systemInstruction: {
      parts: [{ "text": SYSTEM_INSTRUCTION }]
    },
  };

  try {
    const response = await fetch(`${API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error Response:", errorData);
      throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content.parts.length > 0) {
      return data.candidates[0].content.parts[0].text;
    } else {
      // This can happen if the response is blocked due to safety settings.
      return "I am unable to provide a response to that query. Please ask a different question about data structures and algorithms.";
    }
  } catch (error) {
    console.error("Failed to generate content:", error);
    if (error instanceof Error) {
        return `An error occurred: ${error.message}`;
    }
    return "An unknown error occurred while contacting the AI.";
  }
};
