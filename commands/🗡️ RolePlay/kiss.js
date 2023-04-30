//falta mejorar embed
const CLUB = require("club-atticus");//definimos la npm que enviara las imagenes
const club = new CLUB();
const { MessageEmbed } = require('discord.js');//definimos discord

module.exports = {
  name: "kiss",
  alias: [],
  desc: "Sirve para besar a alguien",
  uso: "!kiss (user)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {


    if (!args.length) return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
  
    const usuario = message.mentions.users.first()
    if (!usuario) {
      return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
    }
    if (usuario.id === message.author.id) return message.channel.send({
      embeds: [new MessageEmbed()
        .setAuthor({name: `${message.author.username} le dio un beso a un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage(await club.kiss())
      ]
  })

  const embed2 = new MessageEmbed()//definimos embed
  .setAuthor({name: `${message.author.username} le dio un beso a ${usuario.username}. <3`, iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setColor("RANDOM")//color random
  .setImage(await club.kiss())
      
  message.channel.send({embeds: [embed2]});//y que lo mande
  
  }}