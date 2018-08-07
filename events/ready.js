exports.run = async (bot) => {
  bot.user.setActivity('WATCHING');
  setInterval(() => {
    let status = [`Mention me (@${bot.user.username})`, `📡 ${bot.channels.size} Channel!`, `🌎 ${bot.guilds.size} Server!`, `With 👥 ${bot.users.size} Users!`]
    let random = Math.floor(Math.random() * status.length)
    bot.user.setActivity(status[random]);
  }, 20000);
  console.log(`${bot.user.username} Sudah online beb`);
};
