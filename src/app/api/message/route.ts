import { NextRequest, NextResponse } from "next/server";
import { sendDiscordMessage } from "./discordHookMessage";

const webHookUrl = process.env.WEBHOOK_URL_MESSAGES;

export async function POST(req: NextRequest) {
  try {
    const bodyData = await req.json();
    const newMessage = { name: bodyData.name, message: bodyData.message };
    const { status } = (await sendDiscordMessage(webHookUrl!, newMessage)) || { status: 500 };
    new NextResponse(JSON.stringify({ message: "message succes" }), { status });
  } catch (e) {
    new NextResponse(JSON.stringify({ message: "server error" }), { status: 502 });
    console.log("error [POST]", e);
  }
}
