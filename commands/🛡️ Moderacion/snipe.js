const Discord = require("discord.js")
const snipe = require("../../modelos/snipe")

module.exports = {
    name: "snipe",
    alias: [],
    desc: "Sirve para ver los mensajes eliminados",
    uso: "!snipe",
    permisos: ["MANAGE_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message){

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
      .setColor("e60ad4")
    ]})
    if(!message.guild.me.permissions.has("MANAGE_MESSAGES"))return message.reply({embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
      .setColor("e60ad4")]})


    let data = await snipe.findOne({ channelId: message.channel.id })

    if(!data){
        return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No hay mensages recientes Eliminados!**")
                .setColor("e60ad4")
            ]
        })

    }

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: `Mensaje de ${data.author}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
    .addField("`Mensaje Borrado:`", `${data.message}`)
    .setColor("RANDOM")
    .addField("`Canal:`", `<#${data.channelId}>`,)
    .addField("`Tiempo:`", `<t:${data.time}:R>`,)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))

    message.reply({ embeds: [embed] })
    
  }
}