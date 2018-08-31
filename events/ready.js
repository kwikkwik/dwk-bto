exports.run = async (bot) => {
  bot.user.setActivity('WATCHING');
  setInterval(() => {
    let status = [`Master Bot`]
    let random = Math.floor(Math.random() * status.length)
    bot.user.setActivity(status[random]);
  }, 20000);
  console.log(`${bot.user.username} Sudah online beb`);
};
