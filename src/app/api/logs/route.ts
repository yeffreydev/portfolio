import { NextRequest, NextResponse } from "next/server";
import os from "os";
import { generateMessage } from "./discordHookLog";

const webHookUrl = process.env.WEBHOOK_URL;
export async function POST(req: NextRequest) {
  try {
    const userAgent = req.headers.get("user-agent") || "";
    console.log(userAgent);
    const bodyData = await req.json();
    const msg = generateMessage({ content: JSON.stringify(bodyData), userAgent });
    webHookUrl &&
      (await fetch(webHookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg),
      }));
    return new Response(JSON.stringify({ message: "succes" }));
  } catch (e) {
    console.log(e);
  }
}
