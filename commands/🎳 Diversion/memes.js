const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');
const hispamemes = require("hispamemes");

module.exports = {
  name: "meme",
  alias: [],
  desc: "Sirve para generar un meme",
  uso: "!meme",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {//Ejecutamos parámetros 

    const meme = hispamemes.meme(); //Hacemos que se genere/cambie el meme de manera random

        const embed = new Discord.MessageEmbed()//Definimos el embed
        .setAuthor({name: "Meme", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("e60ad4")//Color
        .setImage(meme)//La imagen, que en este caso será el meme
        //Un footer
        //Hora y fecha en la que se envió el embed
    
        message.channel.send({ embeds: [embed] })
    
  }

} 