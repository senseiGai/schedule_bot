const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

//start command
require("./commands/start.js")(bot);

//schedule command
require("./commands/schedule.js")(bot);

//commands menu
require("./commands/setMyCommands.js")(bot);

module.exports = bot;
