const scheduleKeyboard = require("../keyboards/schedule-keyboard");

module.exports = (bot) => {
  bot.callbackQuery("back", async (ctx) => {
    await ctx.editMessageText("Расписание", {
      reply_markup: scheduleKeyboard,
    });
    await ctx.answerCallbackQuery();
  });
};
