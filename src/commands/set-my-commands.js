module.exports = async (bot) => {
  try {
    await bot.api.setMyCommands([
      { command: "start", description: "Start the bot" },
      { command: "schedule", description: "Show the schedule" },
    ]);
  } catch (error) {
    console.error("Failed to set bot commands:", error);
  }
};
