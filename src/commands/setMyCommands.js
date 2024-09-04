module.exports = async (bot) => {
  try {
    await bot.api.setMyCommands([
      { command: "start", description: "Start the bot" },
      { command: "schedule", description: "Show the schedule" },
      // Add other commands as needed
    ]);
    console.log("Bot commands set successfully.");
  } catch (error) {
    console.error("Failed to set bot commands:", error);
  }
};
