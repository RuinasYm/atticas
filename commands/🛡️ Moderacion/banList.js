const {MessageEmbed} = require ("discord.js")
const discord = require('discord.js')

module.exports = {
  name: "banlist",
  alias: ["listbans"],
  desc: "Sirve para ver la lista de baneos",
  uso: "!banlist",
  permisos: ["BAN_MEMBERS"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",

  async execute(client, message, args){

    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`BAN_MEMBERS\` | <:fail:1083542064924479549>**")
      .setColor("e60ad4")
    ]})
    if(!message.guild.me.permissions.has("BAN_MEMBERS"))return message.reply({embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`BAN_MEMBERS\` | <:fail:1083542064924479549>**")
      .setColor("e60ad4")]})

    const theustotoso = new MessageEmbed()
    .setAuthor({name: "Ban List", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription((await message.guild.bans.fetch()).map((theuszin) => theuszin.user.tag).join(" \n ") || "> \`Ningun miembro fue baneado\`" )
    .setColor("e60ad4")
    
    message.channel.send({embeds: [theustotoso]})
   }
 }