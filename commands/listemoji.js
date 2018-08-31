exports.run = async (anko, message, args, color) => {
  message.channel.send(message.guild.emojis.map(x => x.toString()).join('|'));
}