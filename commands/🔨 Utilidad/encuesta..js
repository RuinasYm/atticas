//mejorar embed
const Discord = require('discord.js');

module.exports = {
  name: "encuesta",
  alias: ["poll"],
  desc: "Sirve para crear una encuesta",
  uso: "!encuesta (pregunta)",
  permisos: ["MANAGE_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",

execute (client, message, args){

  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
    .setColor("e60ad4")
  ]})
  if(!message.guild.me.permissions.has("MANAGE_MESSAGES"))return message.reply({embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
    .setColor("e60ad4")]})

    let texto = args.join(' ')
    if(!texto) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Tienes que preguntar Algo! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
  })
    if(texto.length > 100){
      return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No puede ingresar mas de 100 Caracteres! | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
        ]
    })
    }

  const en = new Discord.MessageEmbed()
  .setAuthor({name: "Encuesta", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`**${texto}**\n\n1️⃣ Si\n\n2️⃣ Talvez\n\n3️⃣ No`)
    .setColor("e60ad4")
    
    

    message.channel.send({embeds: [en]}).then(async (e) => {

        e.react('1️⃣')
        e.react('2️⃣')
        e.react('3️⃣')
        
    })

 }

} 