import { config } from "dotenv";
import { Telegraf } from "telegraf";

config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`Hello ${ctx.from.first_name} ${ctx.from.last_name || ""}`);
});

bot.launch();

console.log("Bot started!");
