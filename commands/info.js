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
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);
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
  
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
if (message.channel.type === 'dm') return;
  client.shard.fetchClientValues('guilds.size')
  .then(results => {
     const embed = new Discord.RichEmbed()
    .setColor("#06238B")
    .setAuthor(`${client.user.username} | Bot Info`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setTitle("Invite me!") // TITLE
    .setURL('https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591') // THIS WILL SET THE TITLE URL TO "www.google.com" 
    .setThumbnail('https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048')
    .setDescription("Bot Info!")
    .addField("Name", `__**${client.user.username}**__`, true)
    .addField("Developer", "`Brickmaster#2000`", true)
    .addField("Library: ", "discord.js", true)
    .addField("Shard", `${client.shard.count} Shards`)
    .addField("General Stats", `Guild: ${guilds}\nUser: ${users}\nVoice Channels: ${voiceChannels}\nText Channels: ${textChannels}`, true)
    .addField("Usage Information", `Ram: ${Math.round(used * 100) / 100}MB\nMemory: ${memory_on_bot} MB\nCPU: ${Math.round(ccpu * 100) / 100}%`, true)
    .addField("Uptime: ", `Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}`, true)
    .addBlankField()
    .addField("__**Vote this bot**__","[Vote](https://discordbots.org/bot/464511870993432578/vote)", true)
    .addField("__**Join Official Discord**__","[Join](https://discord.gg/JYwQVjT)", true)
    .setFooter(`© MasterBotTeam`)
    .setTimestamp() // SHOWS THE TIME OF THE EMBED CREATED
    message.channel.send({embed})
  })
    message.react("✅")
}
