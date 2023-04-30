const Discord = require("discord.js");
module.exports = {
  name: "8ball",
  alias: ["bolamagica"],
  desc: "Sirve para ver tu suerte",
  uso: "!8ball (pregunta)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"],
  valoracion: "⭐⭐⭐⭐⭐",

  execute(client, message, args){

    let texto = args.slice().join(" ")
    if(!texto) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Tienes que preguntar Algo! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
  })

    let respuestas = ["Si", "No", "Tal vez", "Probablemente"]

    if(texto.length > 100) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  No puedes preguntar algo con mas de 100 Caracteres! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
  })

        if(texto.includes("https://")) return message.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  No puedes preguntar algo con Links! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })
        if(texto.includes("http://")) return message.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  No puedes preguntar algo con Links! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })
        if(texto.includes("https://")) return message.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  No puedes preguntar algo con Links! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })
        if(texto.includes("discord.gg/")) return message.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  No puedes preguntar algo con Links! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })
        if(texto.includes("discord.io/")) return message.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  No puedes preguntar algo con Links! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })

    const ball = new Discord.MessageEmbed()
    .setAuthor({name: "Bola Mágica 🎱", iconURL: client.user.displayAvatarURL({dynamic: true})})
    
    .setColor("e60ad4")
    .setDescription(`\n > Pregunta: \`${texto}\`\n > Respuesta: \`${respuestas[( Math.floor(Math.random() * respuestas.length))]}\``)
    message.channel.send({ embeds: [ball]})
    
  }
}