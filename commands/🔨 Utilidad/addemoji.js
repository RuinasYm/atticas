const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'emoji',
alias: ['addemoji'],
desc: 'Sirve para añadir un emoji al sevidor',
uso: '!emoji <name> <link>',
permisos: ['MANAGE_GUILD'],
permisos_bot: ['ADMINISTRATOR'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {

  if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply({embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**")
    .setColor("e60ad4")
  ]})
  if(!message.guild.me.permissions.has("MANAGE_GUILD"))return message.reply({embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**")
    .setColor("e60ad4")]})

      const emojiName = args[0]; // Nombre del emoji
      if (!emojiName) return message.reply('"**<:fail:1083542064924479549> | Ingresa un nombre para el emoji! | <:fail:1083542064924479549>**"')
      
      const emojiURL = args[1]; // URL del emoji
      if (!emojiURL) return message.reply('"**<:fail:1083542064924479549> | Ingresa la url del emoji! | <:fail:1083542064924479549>**"')
  
      // Añade el emoji al servidor
      message.guild.emojis
        .create(emojiURL, emojiName)
        .then((emoji) => message.channel.send(`El emoji ${emoji} ha sido agregado <:coffe:1085588495172632638>.`))
    },
  };
  