const { InlineKeyboard } = require("grammy");

module.exports = (bot) => {
  const scheduleKeyboard = new InlineKeyboard()
    .text("Расписание на сегодня", "today_schedule")
    .row()
    .text("Расписание на неделю", "week_schedule");
  bot.command("schedule", async (ctx) => {
    ctx.reply("Расписание", {
      reply_markup: scheduleKeyboard,
    });
  });
};
