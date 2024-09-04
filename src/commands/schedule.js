const scheduleKeyboard = require("../keyboards/schedule-keyboard");

module.exports = (bot) => {
  bot.command("schedule", async (ctx) => {
    await ctx.reply("Расписание", {
      reply_markup: scheduleKeyboard,
    });
  });
};
