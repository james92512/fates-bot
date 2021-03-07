import { Message } from "discord.js";

module.exports = {
    name: "flip",
    description: "flips a coin, heads or tails",
    usage: "flip",
    cooldown: 3,
    run(message: Message) {
        message.inlineReply(`${["tails","heads"][Math.floor(Math.random() * 2)]}`);
    }
} as Command