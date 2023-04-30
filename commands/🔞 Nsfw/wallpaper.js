//falta mejorar embed
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "wallpaper",
  alias: [],
  desc: "Sirve para ver contenido nsfw",
  uso: "!wallpaper",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    if (!message.channel.nsfw) return message.reply({
      embeds: [new MessageEmbed()
        .setAuthor({name: "Contenido con restricción", iconURL: client.user.displayAvatarURL({ dynamic: true })})
          .setDescription("Este comando requiere que el canal permita contenido con restricción por edad (NSFW).\n\nPuedes activar dicha opción en la configuración del canal.")
          .setColor("e60ad4")
          .setImage("https://cdn.discordapp.com/attachments/1052343306538975282/1074426806528135168/nsfw.png")
      ]
    })
    
       const embed = new MessageEmbed()
       .setAuthor({name: `Wallpaper`, iconURL: client.user.displayAvatarURL({dynamic: true})})
       .setColor("e60ad4")
       .setImage(await club.wallpaper())
       message.reply({ embeds: [embed] });
    }
}