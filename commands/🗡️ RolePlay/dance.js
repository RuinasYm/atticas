const ActionsClient = require('discord-actions');
const actions = new ActionsClient();
const Discord = require('discord.js')
;
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'dance',
alias: [],
desc: 'Sirve para bailar con o sin un usuario',
uso: '!dance <user>',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['SEND_MESSAGES'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {
  if (!args.length) return message.channel.send({
    embeds: [new MessageEmbed()
      .setAuthor({name: `${message.author.username} está bailando. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setColor("RANDOM")//color random
      .setImage((await actions.sfw.dance()).url)
    ]
})
  
  const usuario = message.mentions.users.first() 
  if (!usuario) {
    return message.channel.send({
        embeds: [new MessageEmbed()
          .setAuthor({name: `${message.author.username} está bailando. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
          .setColor("RANDOM")//color random
          .setImage((await actions.sfw.dance()).url)
        ]
    })
  }
  if (usuario.id === message.author.id) return message.channel.send({
    embeds: [new MessageEmbed()
      .setAuthor({name: `${message.author.username} está bailando con un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setColor("RANDOM")//color random
      .setImage((await actions.sfw.dance()).url)
    ]
})

const embed2 = new MessageEmbed()//definimos embed
.setAuthor({name: `${message.author.username} está bailando con ${usuario.username}. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
.setColor("RANDOM")//color random
.setImage((await actions.sfw.dance()).url)
    
message.channel.send({embeds: [embed2]});//y que lo mande

}}