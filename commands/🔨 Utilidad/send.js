const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "send",
    alias: ["enviar"],
    desc: "Sirve para enviar un mensaje a un canal",
    uso: "!send (canal) (mensaje)",
    permisos: ["MANAGE_GUILD"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {

	if (!message.member.permissions.has('MANAGE_GUILD')) {
		return message.reply({
		  embeds: [
			new Discord.MessageEmbed()
			  .setDescription(
				'**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**'
			  )
			  .setColor('e60ad4'),
		  ],
		});
	  }
  
	  // Comprobar si el bot tiene permisos de administrador
	  if (!message.guild.me.permissions.has('MANAGE_GUILD')) {
		return message.reply({
		  embeds: [
			new Discord.MessageEmbed()
			  .setDescription(
				'**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**'
			  )
			  .setColor('e60ad4'),
		  ],
		});
	  }

const channel = message.mentions.channels.first()
let sendch = message.guild.channels.cache.find(channeL => channeL.name === `${channeL}`)
const mensaje = args.slice(1).join(` `)
if(!channel) return message.reply({
	embeds: [new Discord.MessageEmbed()
		.setDescription("**<:fail:1083542064924479549> |  Tienes que mencionar un Canal! | <:fail:1083542064924479549>**")
		.setColor("e60ad4")
	]
})
if(!mensaje) return message.reply({
	embeds: [new Discord.MessageEmbed()
		.setDescription("**<:fail:1083542064924479549> |  No especificaste un mensaje a Decir! | <:fail:1083542064924479549>**")
		.setColor("e60ad4")
	]
})

const embed = new Discord.MessageEmbed()
.setAuthor({name: `Mensaje de ${message.guild.name}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
.setDescription(` > ${mensaje}`)
.setColor("e60ad4")



message.delete()
channel.send({ embeds: [embed] })
message.channel.send(`<:sucess:1083547524717101056> | Se envio tu mensaje a el Canal ${channel}!`)
    
  }

}