//mejorar embed
const Discord = require("discord.js");

module.exports = {
  name: "horoscopo",
  alias: [],
  desc: "Sirve para ver tu horosocopo",
  uso: "!horoscopo",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

    if (!args[0]) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Dijita tu signo Zodiacal! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
  })


    let Options = ["libra", "tauro", "cancér", "capricornio", "sagitario", "géminis", "piscis", "leo", "aries", "virgo", "escorpio", "acuario", "cancer", "geminis"]


    if (!Options.includes(args[0].toLowerCase())) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Dijita un signo zodiacal Valido! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
  })


    let amor = Math.floor(Math.random() * 100)
    let dinero = Math.floor(Math.random() * 100)
    let salud = Math.floor(Math.random() * 100)
    let suerte = Math.floor(Math.random() * 100)
    let trabajo = Math.floor(Math.random() * 100)
    let sexo = Math.floor(Math.random() * 100)

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Este es tu Horoscopo ${message.author}**\n\n > **💘 Amor:** \`${amor} %\`\n > **💰 Dinero** \`${dinero} %\`\n > **💉 Salud:** \`${salud} %\`\n > ** 🍀Suerte:** \`${suerte} %\`\n > ** 🧰Trabajo:** \`${trabajo} %\`\n > **<:girl4:1016175601108930631> Sexo:** \`${sexo} %\``)
    .setAuthor({name: "Horoscopo", iconURL: client.user.displayAvatarURL({dynamic: true})})
    
      .setColor("e60ad4")
      
    message.channel.send({ embeds: [embed] }).catch(err =>{
      interaction.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  Ah ocurrido un error, Usa \`!report\` para Reportarlo! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })
      console.log(err)
  }) 
  }

}