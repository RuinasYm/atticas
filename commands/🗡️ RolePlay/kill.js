const ActionsClient = require('discord-actions');
const actions = new ActionsClient();
const Discord = require('discord.js')
;
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'kill',
alias: [],
desc: 'Sirve para matar a un usuario',
uso: '!kill <user>',
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
      .setAuthor({name: `${message.author.username} ah matado a un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setColor("RANDOM")//color random
      .setImage((await actions.sfw.kill()).url)
    ]
})

const embed2 = new MessageEmbed()//definimos embed
.setAuthor({name: `${message.author.username} ah matado a ${usuario.username}. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
.setColor("RANDOM")//color random
.setImage((await actions.sfw.kill()).url)
    
message.channel.send({embeds: [embed2]});//y que lo mande

}}