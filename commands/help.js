const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops, PREFIX) => {

let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('List of all commands') 
.addField('General Commands', '\`help\` \`bug\` \`userinfo\` \`serverinfo\` \`stats\` \`ping\` \`report\` \`invite\`')
.addField('Image', '\`slap\` \`avatar\` \`yesorno\` \`meme\` \`bunny\` \`kiss\` \`hug\` \`gif\` \`pat\`')
.addField('Utility and Fun', '\`hastebin\` \`calculator\` \`rps\` \`discrim\` \`fmk\` \`asciify\` \`embed\` \`emojify\` \`ask\` \`say\` \`weather\`')
.addField('Moderation', '\`ban\` \`kick\` \`mute\` \`unmute\` \`warn\` \`esay\` \`purge\`')
.addField('N.S.F.W', '\`urban\` \`hentaigif\` \`lewd\` \`nekos\` \`xxx\` \`urban\`')
.setFooter('© DwKBot');
message.channel.send(embed);

 }; 

module.exports.help = {
name: 'help'
}
