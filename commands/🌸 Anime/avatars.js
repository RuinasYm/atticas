//falta mejorar embed
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatars",
  alias: [],
  desc: "Mira avatars de anime",
  uso: "!avatars",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {
    
       const embed = new MessageEmbed()
       .setAuthor({name: `Avatars`, iconURL:  client.user.displayAvatarURL({dynamic: true})})
       .setColor("e60ad4")
       .setImage(await club.avatar())
       message.reply({ embeds: [embed] });
    }
}