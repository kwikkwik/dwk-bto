const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
               

        let trufal = {
            "true": "Robot",
            "false": "Human"
        }

        let status = { 
            "online": "**Online**",
            "idle": "**Idle**",
            "dnd": "**Do Not Disturb*",
            "invisible": "**Offline**"
        }

        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user)
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor("User Info", message.author.displayAvatarURL)
        .addBlankField()
        .addField("Name:", `${user.tag}`, true)
        .addField("ID:", `${user.id}`, true)
        .addField("Account Type:", `${trufal[user.bot]}`, true)
        .addField("Status:", `${status[user.presence.status]}`, true)
        .addField("Game:", `${user.presence.game ? user.presence.game.name : 'I do not see him playing anything!'}`, true)
        .addField("Roles:", member.roles.map(roles => `${roles}`).join(' => '), true)
        .addField("Joined At:", message.member.joinedAt)
        .addField("Created At:", `${user.createdAt}`, true)
        .addBlankField()
        .setThumbnail(user.avatarURL)
        .setTimestamp()
        .setFooter(`© DwKBot |`);
     message.channel.send({embed});
};

module.exports.help = {
    name: 'userinfo',
};
