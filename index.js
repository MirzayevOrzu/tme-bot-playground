import { config } from "dotenv";
import { Telegraf } from "telegraf";

config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("contact", async (ctx) => {
  try {
    const user = await ctx.telegram.getChatMember(
      "@nodejs_uz",
      ctx.update.message.contact.user_id
    );
    if (user.status !== "member") {
      return ctx.reply(
        `User ${ctx.update.message.contact.first_name} left @nodejs_uz`
      );
    }
    ctx.reply(
      `User ${ctx.update.message.contact.first_name} is member of @nodejs_uz`
    );
  } catch (error) {
    ctx.reply(
      `User ${ctx.update.message.contact.first_name} is not member of @nodejs_uz`
    );
  }
});

bot.launch();

console.log("Bot started!");
