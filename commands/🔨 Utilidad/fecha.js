const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
  name: "fecha",
  alias: [],
  desc: "Sirve para ver la fecha",
  uso: "!fecha",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setAuthor({name: "Fecha", iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setDescription(`\n > **Date:** <t:${Math.round(Date.now()/1000)}:d>\n > **Hora:** <t:${Math.round(Date.now()/1000)}:t>`) 
    .setColor("e60ad4")
    
    
 message.reply({embeds: [embed]})       
    }
};