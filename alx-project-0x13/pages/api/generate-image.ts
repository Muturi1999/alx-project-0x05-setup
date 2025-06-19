import { HEIGHT, WIDTH } from "@/constants";
import { RequestProps } from "@/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const gptApiKey = process.env.NEXT_PUBLIC_GPT_API_KEY;
  const gptUrl = "https://chatgpt-42.p.rapidapi.com/texttoimage";

  if (!gptApiKey) {
    return response
      .status(500)
      .json({ error: "API key is missing in environment variables" });
  }

  try {
    const { prompt }: RequestProps = request.body;

    const res = await fetch(gptUrl, {
      method: "POST",
      body: JSON.stringify({ text: prompt, width: WIDTH, height: HEIGHT }),
      headers: {
        "x-rapidapi-key": gptApiKey.trim(),
        "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch from GPT image endpoint");
    }

    const data = await res.json();

    // The API returns `generated_image` (base64 or URL).  
    // Fallback to placeholder if missing.
    return response.status(200).json({
      message:
        data?.generated_image ||
        "https://via.placeholder.com/600x400?text=Generated+Image",
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
};

export default handler;
