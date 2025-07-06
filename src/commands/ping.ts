import { Command } from "./";

const command: Command = {
  data: {
    name: "ping",
    description: "Ping the bot",
  },

  async execute(interaction) {
    // Get the channel to reply in:
    const channelId = "1259574595388837958";
    const botToken = process.env.TOKEN;
    const username = interaction.member.user.username;

    await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bot ${botToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `Pong, ${username}!`,
      }),
    });

    return {
      type: 4,
      data: {
        content: `Sent Pong to <#${channelId}>.`,
      },
    };
  },
};

export default command;
