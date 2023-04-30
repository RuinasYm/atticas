const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "tat",
  alias: ["report", "reportar"],
  desc: "Sirve para reportar",
  uso: "!reporte (reporte)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "WEB OFICIAL", iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setImage("https://cdn.discordapp.com/attachments/1052343306538975282/1069405825606615140/banner.jpg")
    .setColor("e60ad4")
    .setDescription("**Web Principal:**\n > https://docs.clubatticus.ml/\n **Web Vip:**\n > https://clubatticusvip.blogspot.com/")
message.channel.send({embeds: [embed]})
}
}
