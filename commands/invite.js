const Discord = require("discord.js");

const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
    if (message.channel.type === 'dm') return;
    let serverembed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} | Invite`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setThumbnail('https://media.giphy.com/media/26uf8tQf6WVQPxP9u/giphy.gif')
    .addField("**Invite BOT**", "[Invite](https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591)", true)
    .addField("*Official Discord*", "[JOIN](https://discord.gg/X4xbJqg)", true)
    .setColor("#06238B")
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(serverembed).then(msg => {
    })
}