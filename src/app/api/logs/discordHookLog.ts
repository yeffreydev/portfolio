export const generateMessage = (msg: { content: string; userAgent: string }) => {
  let date = new Date(Date.now());
  let params = {
    username: "logportfolio",
    avatar_url: "",
    content: "@everyone",
    embeds: [
      {
        title: "new portfolio log",
        color: 15258703,
        thumbnail: {
          url: "",
        },
        fields: [
          {
            name: "content",
            value: msg.content,
            inline: false,
          },
          {
            name: "user agent",
            value: msg.userAgent,
            inline: false,
          },
          {
            name: "date",
            value: date.toLocaleDateString() + "  " + date.getHours() + ":" + date.getMinutes(),
            inline: false,
          },
        ],
      },
    ],
  };
  return params;
};
