//mejorar embed
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

var sleepgif = [
    "https://nekocdn.com/images/Y4_zbL2j.gif",
    "https://nekocdn.com/images/bZO8JPuE.gif",
    "https://nekocdn.com/images/UiHZmxit.gif",
    "https://i.pinimg.com/originals/f1/5e/3e/f15e3e84c6fc6ef01419fa7fab86b571.gif"
];
module.exports = {
    name: "sleep",
    alias: ["mimir", "dormir"],
    desc: "Sirve para dormir",
    uso: "!sleep",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args) {

    let sleep = sleepgif[Math.floor(Math.random() * sleepgif.length)];

    if(!message.mentions.users.first()) {
        const embed = new MessageEmbed()//definimos embed
        .setAuthor({name: `${message.author.username} se mimió o tiene sueño.`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage(sleep)
        message.channel.send({embeds: [embed]});//ahora que mande el mensaje
        
        
        } else {//hacemos un else por si menciona a alguien
        
          const usuario = message.mentions.users.first()
          if (!usuario) {
            return message.channel.send({embeds: [new MessageEmbed()
                .setAuthor({name: `${message.author.username} se mimió o tiene sueño.`, iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setColor("RANDOM")//color random
                .setImage(sleep)
            ]})
          }
          if (usuario.id === message.author.id) return message.channel.send({
            embeds: [new MessageEmbed()
              .setAuthor({name: `${message.author.username} se fue a mimir con un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
              .setColor("RANDOM")//color random
              .setImage(sleep)
            ]
        })
      
        const embed2 = new MessageEmbed()//definimos embed
        .setAuthor({name: `${message.author.username} se fue a mimir con ${usuario.username}. (-, - )…zzzZZZ`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage(sleep)
            
        message.channel.send({embeds: [embed2]});//y que lo mande
        
        }}}