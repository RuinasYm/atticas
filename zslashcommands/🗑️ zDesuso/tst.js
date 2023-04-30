const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "tst",
  alias: ["report", "reportar"],
  desc: "Sirve para reportar",
  uso: "!reporte (reporte)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Disable", iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setImage("https://cdn.discordapp.com/attachments/1052343306538975282/1069070553727631440/pingdisable.png")
    .setColor("e60ad4")
message.channel.send({embeds: [embed]})
}
}
