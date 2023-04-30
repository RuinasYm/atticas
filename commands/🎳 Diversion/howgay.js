const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "howgay",
  alias: [],
  desc: "Sirve para ver tu porcentaje de gay",
  uso: "!howgay",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  execute (client, message, args) {

 
    let respuestas = [Math.floor(Math.random() * 100)]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)];

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "HowGay", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`Que tan gay eres? ${message.author}\n > Eres: **\`${random} %\` gay :gay_pride_flag: **`)
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