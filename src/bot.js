const { Bot } = require("grammy");
const { hydrate } = require("@grammyjs/hydrate");

const bot = new Bot(process.env.BOT_API_KEY);

bot.use(hydrate());

//start command
require("./commands/start.js")(bot);

//schedule command
require("./commands/schedule.js")(bot);

//today schedule
require("./callbacks/today-schedule-callback.js")(bot);

//back callback
require("./callbacks/back-callback.js")(bot);

//commands menu
require("./commands/set-my-commands.js")(bot);

module.exports = bot;
