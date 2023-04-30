const ActionsClient = require('discord-actions');
const actions = new ActionsClient();
const Discord = require('discord.js')
;
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'lick',
alias: ['lamer'],
desc: 'Sirve para lamer a un usuario',
uso: '!lick <user>',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['SEND_MESSAGES'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {
  if (!args.length) return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
  
  const usuario = message.mentions.users.first() 
  if (!usuario) {
    return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
  }
  if (usuario.id === message.author.id) return message.channel.send({
    embeds: [new MessageEmbed()
      .setAuthor({name: `${message.author.username} ah lamido a un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setColor("RANDOM")//color random
      .setImage((await actions.sfw.lick()).url)
    ]
})

const embed2 = new MessageEmbed()//definimos embed
.setAuthor({name: `${message.author.username} ah lamido a ${usuario.username}. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
.setColor("RANDOM")//color random
.setImage((await actions.sfw.lick()).url)
    
message.channel.send({embeds: [embed2]});//y que lo mande

}}