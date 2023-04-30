const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "reporte",
  alias: ["report", "reportar"],
  desc: "Sirve para reportar",
  uso: "!reporte (reporte)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    let bug = args.slice(0).join(" ")
    if(!bug) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar un Reporte! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
  })


      const embed = new Discord.MessageEmbed()
      .setAuthor({name: "Reporte", iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setDescription(` > **Nuevo reporte de:** ${message.author}\n > **Razón:** \`${bug}\``)
      .setColor("e60ad4")
      

      message.channel.send({
        embeds: [new Discord.MessageEmbed()
            .setDescription("**<:sucess:1083547524717101056> | Se envio correctamente tu Reporte! | <:sucess:1083547524717101056>**")
            .setColor("e60ad4")
        ]
    })
      client.channels.cache.get("1083544644668895274").send({embeds: [embed]})
  }
}