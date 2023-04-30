//falta mejorar embed
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "neko",
  alias: [],
  desc: "Mira imagenes de neko",
  uso: "!neko",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    
       const embed = new MessageEmbed()
       .setAuthor({name: `Neko`, iconURL: client.user.displayAvatarURL({dynamic: true})})
       .setColor("e60ad4")
       .setImage(await club.neko())
       message.reply({ embeds: [embed] });
    }
}