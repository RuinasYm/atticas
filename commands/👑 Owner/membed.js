const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "membed",
  alias: [],
  desc: "Sirve para enviar un mensaje en embed",
  uso: "!msgembed (mensaje)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    if(message.author.id !== "1001880420138373191") return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tienes suficientes comandos para ejecutar este Comando! | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
        ]
      })
      
    let msg = args.join(" ");
    if (!msg) return message.channel.send("Porfavor, envía el texto para que lo convierta en embed");

    const embed = new Discord.MessageEmbed()
      .setDescription(`${msg}`)
      .setColor("e60ad4")
      
      

    message.channel.send({ embeds: [embed] });
    message.delete()
  },
};