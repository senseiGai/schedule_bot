const { InlineKeyboard } = require("grammy");

const scheduleKeyboard = new InlineKeyboard()
  .text("Расписание на сегодня", "today_schedule")
  .row()
  .text("Расписание на неделю", "week_schedule");

module.exports = scheduleKeyboard;
