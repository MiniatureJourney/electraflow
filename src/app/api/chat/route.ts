import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is missing." },
        { status: 500 }
      );
    }

    const payload = {
      contents: [{
        parts: [{ text: `You are an expert election assistant for ElectraFlow. A user is asking: "${message}". Please provide a clear, accurate, and structured response focusing on Indian elections and the Election Commission of India rules, keeping it under 3-4 short paragraphs and use markdown formatting.` }]
      }]
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
        return NextResponse.json({ error: data.error?.message || "AI Error" }, { status: 500 });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I could not process your query.";
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("AI Route Error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI response." },
      { status: 500 }
    );
  }
}
