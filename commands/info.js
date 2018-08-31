const used = process.memoryUsage().heapUsed / 1024 / 1024;
const Discord = require("discord.js");
const moment = require("moment");
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
  
      const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    const ccpu = process.cpuUsage().system / 1024 / 1024;
    const memory_on_bot = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let d = Math.floor((totalSeconds % 31536000) / 86400);
    let h = Math.floor((totalSeconds / 3600) % 24);
    let m = Math.floor((totalSeconds / 60) % 60);
      let guilds = client.shard ? await client.shard.broadcastEval('this.guilds.size') : client.guilds.size;
    if (guilds instanceof Array) {
      guilds = guilds.reduce((sum, val) => sum + val, 0);
    }
        let users = client.shard ? await client.shard.broadcastEval('this.users.size') : client.users.size;
    if (users instanceof Array) {
      users = users.reduce((sum, val) => sum + val, 0);
    }
      let textChannels = client.shard ? await client.shard.broadcastEval('this.channels.filter(channel => channel.type === \'text\').size') : client.channels.filter(channel => channel.type === 'text').size;
    if (textChannels instanceof Array) {
      textChannels = textChannels.reduce((sum, val) => sum + val, 0);
    }
      let voiceChannels = client.shard ? await client.shard.broadcastEval('this.channels.filter(channel => channel.type === \'voice\').size') : client.channels.filter(channel => channel.type === 'voice').size;
    if (voiceChannels instanceof Array) {
      voiceChannels = voiceChannels.reduce((sum, val) => sum + val, 0);
    }
      let shardStats = client.shard ? await client.shard.broadcastEval('this.uptime') : 'None';
    if (shardStats instanceof Array) {
      shardStats = shardStats.length === client.shard.count ? 'All shards online' : `Launched ${shardStats.length} / ${client.shard.count} shards`;
    }

    let uptime = client.shard ? await client.shard.broadcastEval('this.uptime') : client.uptime;
    if (uptime instanceof Array) {
      uptime = uptime.reduce((max, cur) => Math.max(max, cur), -Infinity);
    }
    let seconds = uptime / 1000;
    let days = parseInt(seconds / 86400);
    seconds = seconds % 86400;
    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);

    uptime = `${seconds}s`;
    if (days) {
      uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    else if (hours) {
      uptime = `${hours}h ${minutes}m ${seconds}s`;
    }
    else if (minutes) {
      uptime = `${minutes}m ${seconds}s`;
    }
  
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
     let postMsg = await message.channel.send("**Please Wait...**");
     const embed = new Discord.RichEmbed()
    .setColor("#06238B")
    .setAuthor(`${client.user.username} | Bot Info`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`) 
    .setThumbnail('https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048')
    .addField("Name", `__**${client.user.username}**__`, true)
    .addField("Creator", "`Brickmaster#2000`", true)
    .addField("Shard Stats", `${client.shard.count} Shards\n${shardStats}`, true)
     .addField("Bot Information: ", `Lib: discord.js\nSystem: ${arch}\nPlatform: Linux`, true)
    .addField("General Stats", `Guild: ${guilds}\nUser: ${users}\nVoice Channels: ${voiceChannels}\nText Channels: ${textChannels}`, true)
    .addField("Usage Information", `Ram: ${Math.round(used * 100) / 100}MB\nMemory: ${memory_on_bot} MB\nCPU: ${Math.round(ccpu * 100) / 100}%`, true)
    .addField("Uptime: ", `Days: ${d} | Hours: ${h} | Minutes: ${m} | Seconds: ${realTotalSecs}`, true)
    .addField("Created Date", `${moment.utc(client.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("__**Usefull Links**__","[Invite](https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591) | [Vote](https://discordbots.org/bot/464511870993432578/vote) | [Support Server](https://discord.gg/JYwQVjT) | [Website](http://masterbot.esy.es)", false)
    .setFooter(`© MasterBotTeam`)
    .setTimestamp() // SHOWS THE TIME OF THE EMBED CREATED
           setTimeout(() => {
         postMsg.edit(embed)
          }, 1000);
}
