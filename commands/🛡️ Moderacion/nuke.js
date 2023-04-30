//mejorar embed
const discord = require('discord.js');

module.exports = {
    name: "nuke",
    alias: [],
    desc: "Sirve para eliminar un canal",
    uso: "!nuke",
    permisos: ["ADMINISTRATOR"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

async execute (client, message, args){

	if(!message.member.permissions.has("ADMINISTRATOR"))return message.reply({embeds: [new discord.MessageEmbed()
		.setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`ADMINISTRATOR\` | <:fail:1083542064924479549>**")
        .setColor("e60ad4")]})
  if(!message.guild.me.permissions.has("ADMINISTRATOR"))return message.reply({embeds: [new discord.MessageEmbed()
	.setDescription("**<:fail:1083542064924479549> |  No tengo los permisos suficientes: \`ADMINISTRATOR\` | <:fail:1083542064924479549>**")
	.setColor("e60ad4")]})

  var posicion = message.channel.position

	const row = new discord.MessageActionRow()
	.addComponents(
		[
			new discord.MessageButton()
		  .setCustomId('zi')
		  .setStyle('SUCCESS')
		  .setLabel('Confirmar')
		],
		[
			new discord.MessageButton()
		  .setCustomId('nao')
		  .setStyle('DANGER')
		  .setLabel('Cancelar')
		]
	)

	const e = new discord.MessageEmbed()
	.setAuthor({name: "Nuke", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`**¿Seguro de querer nukear este canal?**`)
    .setColor("e60ad4")
    
    

	const a = new discord.MessageEmbed()
	.setAuthor({name: "Nuke", iconURL: client.user.displayAvatarURL({dynamic: true})})
	.setDescription('**Tu nuke se cancelado Correctamente!**')
    .setColor("e60ad4")
    
    

	let m = await message.channel.send({ embeds: [e], components: [row] })
  const filtro = i => i.user.id === message.author.id;

	const collector = m.createMessageComponentCollector({ filter: filtro, time: 60000 })

	collector.on('collect', async i => {
		if(i.customId === 'zi'){
			message.channel.clone().then((canal) => {
        message.channel.delete()

        canal.setPosition(posicion)

        canal.send({
			embeds: [new discord.MessageEmbed()
				.setDescription(`**Canal nukeado correctamente por ${message.author}**`)
				.setImage('https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif')
				.setColor("e60ad4")
				
				
			]
		  })
      })
		}
		if(i.customId === 'nao'){
			await i.deferUpdate()
			i.editReply({ embeds: [a] , components: [] })
		}
	})

 }

} 