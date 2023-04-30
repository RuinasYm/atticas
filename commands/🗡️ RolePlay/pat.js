//falta mejorar embed
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "pat",
  alias: [],
  desc: "Sirve para ver contenido nsfw",
  uso: "!pat (user)",
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
        .setAuthor({name: `${message.author.username} acarició a un ser imaginario. <3`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage(await club.pat())
      ]
  })

  const embed2 = new MessageEmbed()//definimos embed
  .setAuthor({name: `${message.author.username} acarició a ${usuario.username}. <3`, iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setColor("RANDOM")//color random
  .setImage(await club.pat())
      
  message.channel.send({embeds: [embed2]});//y que lo mande
  
  }}