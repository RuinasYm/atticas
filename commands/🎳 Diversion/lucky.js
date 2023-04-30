//mejorar embed
const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "lucky",
  alias: ["suerte"],
  desc: "Sirve para ver tu suerte",
  uso: "!lucky",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  execute (client, message, args) {

    let dn = Math.floor(Math.random() * 100)
    let sl = Math.floor(Math.random() * 100)
    let sr = Math.floor(Math.random() * 100)
    let random = Math.floor(Math.random() * 100)
    
    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Lucky", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`**Esta es tu suerte ${message.author}**\n\n > **💘 Amor:** \`${random} %\`\n > **💰 Dinero:** \`${dn} %\`\n > **💉 Salud:** \`${sl} %\`\n > **🍀 Suerte:** \`${sr} %\``)
    
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

