import { NextRequest, NextResponse } from "next/server";
import { generateMessage } from "./discordHookLog";

const webHookUrl = process.env.WEBHOOK_URL;
export async function POST(req: NextRequest) {
  try {
    const userAgent = req.headers.get("user-agent") || "";
    const bodyData = await req.json();
    const msg = generateMessage({ content: JSON.stringify(bodyData), userAgent });
    const resDiscord = await fetch(webHookUrl!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    });
    console.log(resDiscord);
    return new Response(JSON.stringify({ message: "succes" }));
  } catch (e) {
    NextResponse.next();
    console.log(e);
  }
}
