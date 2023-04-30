//falta mejorar embed
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "waifu",
  alias: [],
  desc: "Mira imagenes de waifus",
  uso: "!waifu",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["SEND_MESSAGES"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    
       const embed = new MessageEmbed()
       .setAuthor({name: `Waifu`, iconURL: client.user.displayAvatarURL({dynamic: true})})
       .setColor("e60ad4")
       .setImage(await club.waifu())
       message.reply({ embeds: [embed] });
    }
}