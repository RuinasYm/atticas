const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "md",
  alias: ["mensajedirecto"],
  desc: "Sirve para enviar un mensaje directo",
  uso: "!md (usuario) (mensaje)",
  permisos: ["ADMINISTRATOR"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {

if(message.author.id !== "1001880420138373191") return message.reply({
  embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**")
      .setColor("e60ad4")
  ]
})
const userID = args[0]
if(!userID) return message.reply({
  embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  Tienes que mencionar o agregar la id de un Usuario! | <:fail:1083542064924479549>**")
      .setColor("e60ad4")
  ]
})
const user = message.mentions.members.first() || message.guild.members.cache.get(userID)
const mensaje = args.slice(1).join(" ")
if(!mensaje) return message.reply({
  embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  No has ingresado ningun Texto! | <:fail:1083542064924479549>**")
      .setColor("e60ad4")
  ]
})
if(!user) return message.reply({
  embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  Ingresa un nombre de usuario Valido! | <:fail:1083542064924479549>**")
      .setColor("e60ad4")
  ]
})

const embed = new Discord.MessageEmbed()
.setAuthor({name: `Desde el Servidor: ${message.guild.name}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
.setDescription(`> ${mensaje} `)
.setColor("e60ad4")


message.delete()

user.send({ embeds: [embed] })
message.channel.send({
  embeds: [new Discord.MessageEmbed()
      .setDescription("**<:sucess:1083547524717101056> | Se envio correctamente tu Mensaje! | <:sucess:1083547524717101056>**")
      .setColor("e60ad4")
  ]
})
  }

}