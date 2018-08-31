exports.run = async (bot) => {
      let guilds = bot.shard ? await bot.shard.broadcastEval('this.guilds.size') : bot.guilds.size;
    if (guilds instanceof Array) {
      guilds = guilds.reduce((sum, val) => sum + val, 0);
    }
        let users = bot.shard ? await bot.shard.broadcastEval('this.users.size') : bot.users.size;
    if (users instanceof Array) {
      users = users.reduce((sum, val) => sum + val, 0);
    }
       setInterval(() => {
    let status = [`${users} Users!`]
    let random = Math.floor(Math.random() * status.length)
    bot.user.setActivity(status[random]);
  }, 13000);
  console.log(`${bot.user.username} Sudah online beb`);
};
