//falta mejorar embed
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "cuddle",
  alias: ['acurrucarse'],
  desc: "Sirve para acurrucarte con un usuario",
  uso: "!cuddle <user>",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["SEND_MESSAGES"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {
    if (!args.length) return message.reply({embeds: [new MessageEmbed()
      .setAuthor({name: `Prrr, acurrucate conmigo.`, iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setColor("RANDOM")
      .setImage(await club.cuddle())
    ]})
  
    const usuario = message.mentions.users.first() 
    if (!usuario) {
      return message.reply({embeds: [new MessageEmbed()
        .setAuthor({name: `Prrr, acurrucate conmigo.`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")
        .setImage(await club.cuddle())
      ]})
    }
    if (usuario.id === message.author.id) return message.channel.send({
      embeds: [new MessageEmbed()
        .setAuthor({name: `${message.author.username} se acurruco con un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage(await club.cuddle())
      ]
  })

  const embed2 = new MessageEmbed()//definimos embed
  .setAuthor({name: `${message.author.username} se acurruco con ${usuario.username}. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setColor("RANDOM")//color random
  .setImage(await club.cuddle())
      
  message.channel.send({embeds: [embed2]});//y que lo mande
  
  }}