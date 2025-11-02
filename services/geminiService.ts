import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const SYSTEM_INSTRUCTION = `You are a data structure and algorithm instructor. You will only reply to the problem related to data structure and algorithm. You have to solve user query in simplest way.If user ask any question not related to data structures and algorithm, reply to him rudely.Example: If user ask- How are you? You will reply: you dumb ask me some sensible question.Like this message you can reply anything more rudely. Otherwise reply to him politely. Format your responses using Markdown, especially for code blocks.`;

export const generateContent = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    
    // Check for blocked responses
    if (!response.text) {
        return "I am unable to provide a response to that query. Please ask a different question about data structures and algorithms.";
    }
    
    return response.text;
  } catch (error) {
    console.error("Failed to generate content:", error);
    if (error instanceof Error) {
        return `An error occurred: ${error.message}`;
    }
    return "An unknown error occurred while contacting the AI.";
  }
};

export const generateCodingQuestion = async (): Promise<string> => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Generate a medium-difficulty coding challenge related to data structures and algorithms, suitable for an interview. Provide only the problem statement, without any solution, hints, or boilerplate code. The problem statement should be concise and clear, and formatted as plain text.',
      });
      return response.text;
    } catch (error) {
      console.error("Failed to generate coding question:", error);
      return "Could not load a new challenge. Please try again later.";
    }
  };

interface LinkedInPostDetails {
    github: string;
    leetcode: string;
    linkedin: string;
    problemsCount: string;
    problemsList: string;
    dayNumber: string;
}

export const generateLinkedInPost = async (details: LinkedInPostDetails): Promise<string> => {
    const prompt = `
    Generate a concise and motivational LinkedIn post for a user practicing Data Structures & Algorithms.

    **Strict Rules:**
    1. The post MUST start *exactly* with: "#Day${details.dayNumber} of solving DSA problems."
    2. Immediately after the first line, include the user's social profiles in a "My Profiles:" section.
    3. Keep the entire post short and to the point.
    4. Briefly mention the number of problems solved today.
    5. List the problems solved.
    6. End with a short motivational sentence.
    7. Include these hashtags: #DataStructures #Algorithms #Coding #Consistency #SoftwareEngineering

    **User's Details:**
    - Day Number: ${details.dayNumber}
    - GitHub: ${details.github}
    - LeetCode: ${details.leetcode}
    - LinkedIn: ${details.linkedin}
    - Number of problems solved today: ${details.problemsCount}
    - Problems and submission links:\n${details.problemsList}

    Generate only the text for the LinkedIn post. Do not add any extra commentary.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        
        if (!response.text) {
            return "Could not generate the post. The model returned an empty response.";
        }
        
        return response.text.trim();
    } catch (error) {
        console.error("Failed to generate LinkedIn post:", error);
        throw new Error("Failed to contact the AI to generate the post.");
    }
};