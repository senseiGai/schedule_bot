const backKeyboard = require("../keyboards/back-keyboard");

// module.exports = (bot) => {
//   bot.callbackQuery("today_schedule", async (ctx) => {
//     await ctx.message.text("Расписание на Понедельник", {
//       reply_markup: backKeyboard,
//     });
//     await ctx.answerCallbackQuery();
//   });
// };

module.exports = (bot) => {
  bot.callbackQuery("today_schedule", async (ctx) => {
    await ctx.editMessageText("Расписание на понедельник", {
      reply_markup: backKeyboard,
    });
    await ctx.answerCallbackQuery();
  });
};
