const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "embed",
  alias: ['msgembed'],
  desc: "Sirve para enviar un mensaje en embed",
  uso: "!msgembed (mensaje)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {
    let msg = args.join(" ");
    if (!msg) return message.channel.send("**<:fail:1083542064924479549> |  Debes escribir el Texto que quieres que aparezca! <:fail:1083542064924479549>**") 
    const embed = new Discord.MessageEmbed()
      .setAuthor({name: `${message.author.username} Escribio:`, iconURL: message.author.displayAvatarURL({dynamic: true})})
      .setDescription(`${msg}`)
      .setColor("e60ad4")
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      
      

    message.channel.send({ embeds: [embed] });
    message.delete()
  },
};