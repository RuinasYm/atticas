//solo envia link
const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "pornhub",
  alias: ["busquedahub"],
  desc: "Sirve para buscar algo en pornhub",
  uso: "!hub (busqueda)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args){
    let texto = args.slice().join(" ")
  if(!args[0]) return message.reply({
    embeds: [new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar algo a Buscar!**")
        .setColor("e60ad4")
    ]
})

const encodedText = encodeURIComponent(texto);
const embed = new Discord.MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/1078750371117289607/1090451103113552012/16f6fdddcaeeef868acf349571428e1e-modified.png')
            .setAuthor({name: "Busqueda PornHub", iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")   
            .setDescription(`\n > **Busqueda:** \`${texto}\`\n > **Resultado:** [Click Aqui](https://es.pornhub.com/video/search?search=${encodedText})`)
            
            message.channel.send({ embeds: [embed] })
       }
    } 
    
  