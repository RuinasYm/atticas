//falta mejorar embed
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "feed",
  alias: [],
  desc: "Sirve para ver contenido nsfw",
  uso: "!feed - !feed (user)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {


if(!message.mentions.users.first()) {
  const embed = new MessageEmbed()//definimos embed
  .setAuthor({name: `Ñaam ${message.author.username}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setColor("RANDOM")//color random
  .setImage(await club.feed())
  message.channel.send({embeds: [embed]});//ahora que mande el mensaje
  
  
  } else {//hacemos un else por si menciona a alguien
  
    const usuario = message.mentions.users.first()
    if (!usuario) {
      return message.channel.send({embeds: [new MessageEmbed()
        .setAuthor({name: `Ñaam ${message.author.username}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage(await club.feed())
      ]})
    }
    if (usuario.id === message.author.id) return message.channel.send({
      embeds: [new MessageEmbed()
        .setAuthor({name: `${message.author.username} le dio de comer a un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage(await club.feed())
      ]
  })

  const embed2 = new MessageEmbed()//definimos embed
  .setAuthor({name: `${message.author.username} le dio de comer a ${usuario.username}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setColor("RANDOM")//color random
  .setImage(await club.feed())
      
  message.channel.send({embeds: [embed2]});//y que lo mande
  
  }}}