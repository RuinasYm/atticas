const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
  name: "hack",
  alias: ["hackear"],
  desc: "Sirve para hackear a un usuario",
  uso: "!hack (usuario)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
    // Es solo diversion

    async execute (client, message, args) {

        let ip = Math.floor(Math.random() * 91)
        let ip1 = Math.floor(Math.random() * 81)
        let ip2 = Math.floor(Math.random() * 54)
        let ip3 = Math.floor(Math.random() * 48)
        let numero = Math.floor(Math.random() * 10)
        let numero1 = Math.floor(Math.random() * 50)
        let numero2 = Math.floor(Math.random() * 70)

        
        let correo = [
            "@gmail.com", "@gmail.co", "@outlook.es", "@outlook.com", "@outlook.co", "@hotmail.es"
          ] 
    
        let finalcorreo = correo[Math.floor(Math.random() * correo.length)] 
        const userID = args[0]

        let hackeado = message.mentions.members.first() || message.guild.members.cache.get(userID) || message.author
        if(!args[0]) return message.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  Tienes que mencionar a quien quieres Hackear! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })
        if(hackeado.id == message.author) return message.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  No te puedes hackear a ti Mismo! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })

        let mensaje = await message.channel.send({
            embeds: [new MessageEmbed()
                .setAuthor({name: "Hack", iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setDescription(`\`Proceso de hackeo contra: \`${hackeado}`)
                .setColor("e60ad4")
                
                
             ]

        })

        setTimeout(() => {
            mensaje.edit({
              embeds: [new MessageEmbed()
                .setAuthor({name: "Hack", iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setDescription(`${hackeado} fue hackeado y obviamente esto es una broma.`)
                .addFields(
                    {name: "IP:", value: `\`${ip}.${ip1}.${ip2}.${ip3}\``},
                    {name: "Gmail:", value: `\`${hackeado.user.username}${finalcorreo}\``},
                    {name: "Contraseña", value: `\`${numero}${numero1}${numero2}\``}
                )
                .setColor("e60ad4")
                
                
              ]
            })
            }, 2000)
            
    }
}