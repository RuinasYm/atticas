//falta mejorar embed
const { MessageEmbed } = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "nsfwgif",
  alias: ["nsfw"],
  desc: "Sirve para ver contenido nsfw",
  uso: "!nsfwgif",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {
    if (!message.channel.nsfw) return message.reply({
      embeds: [new MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Este comando solo funciona en canales Nsfw! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
    })
    
       const embed = new MessageEmbed()
       .setImage(await nsfw.pgif())
       .setAuthor({name: `Porn`, iconURL: client.user.displayAvatarURL({dynamic: true})})
       
       .setTimestamp()
       .setColor("e60ad4")
       message.reply({ embeds: [embed] });
    }
}