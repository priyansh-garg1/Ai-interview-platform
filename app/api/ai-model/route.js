import { QUESTIONS_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { jobPosition, jobDescription, type, duration } = await req.json();

  const FINAL_PROMPT = QUESTIONS_PROMPT.replace("{{job Title}}", jobPosition)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{type}}", type)
    .replace("{{duration}}", duration);

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free",
      messages: [
        {
          role: "user",
          content: FINAL_PROMPT,
        },
      ],
    });
    console.log(completion.choices[0].message);

    return NextResponse.json(completion.choices[0].message);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
