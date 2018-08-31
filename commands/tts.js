const Discord = require("discord.js");
const moment = require("moment");

exports.run = (client, message, args) => {
      let say = args.join(' ');
    message.channel.send(say, {
 tts: true
})
}