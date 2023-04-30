const discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "lock",
  alias: ["bloquear"],
  desc: "Sirve para bloquear un canal",
  uso: "!lock",
  permisos: ["MANAGE_CHANNELS"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {

  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_CHANNELS\` | <:fail:1083542064924479549>**")
    .setColor("e60ad4")
  ]})
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS"))return message.reply({embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_CHANNELS\` | <:fail:1083542064924479549>**")
    .setColor("e60ad4")]})
    const everyone = message.guild.roles.cache.find(r => r.name == "@everyone")

    message.channel.permissionOverwrites.edit(everyone, { SEND_MESSAGES: false})

    const embed = new discord.MessageEmbed()
    .setAuthor({name: "Canal bloqueado", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(` > **Usuario:** ${message.author}\n> **Canal:** ${message.channel}`)
    .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor

    message.channel.send({ embeds: [embed] })
  }

}