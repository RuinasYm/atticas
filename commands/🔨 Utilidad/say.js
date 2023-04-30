const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "say",
    alias: ["hablar"],
    desc: "Sirve para enviar un mensaje",
    uso: "!say (mensaje)",
    permisos: ["MANAGE_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {

  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
    .setColor("e60ad4")
  ]})

const escribe = args.slice(0).join(' ')
if(!escribe) return message.reply("¿Qué quieres que diga? <:coffe:1085588495172632638>")
message.delete()
message.channel.send(escribe)
    
  }

}