import axios from "axios";

export const generateMessage = (msg: { name: string; message: string }) => {
  let params = {
    content: "@everyone",
    username: "PortfolioMessage",
    avatar_url: "https://i.imgur.com/4M34hi2.png",
    tts: false,
    embeds: [
      {
        title: "My Embed Title",
        description: "My Embed Description",
        url: "https://example.com",
        color: 16711680,
        fields: [
          {
            name: "Name",
            value: msg.name,
          },
          {
            name: "Message",
            value: msg.message,
          },
        ],
        thumbnail: {
          url: "https://i.imgur.com/4M34hi2.png",
        },
        image: {
          url: "https://i.imgur.com/4M34hi2.png",
        },
        footer: {
          text: "My Embed Footer Text",
        },
      },
    ],
  };
  return params;
};
export const sendDiscordMessage = async (url: string, msg: { name: string; message: string }) => {
  try {
    const newMsg = generateMessage(msg);
    const res = await axios.post(url, JSON.stringify(newMsg), { headers: { "Content-Type": "application/json" } });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (e) {
    console.log("error [sendDiscordMessage]", e);
  }
};
