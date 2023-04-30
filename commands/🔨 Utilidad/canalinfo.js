const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "canalinfo",
  alias: ["cinfo"],
  desc: "Sirve para ver la informacion de un canal",
  uso: "!canalinfo",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {

const canal = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel;

  let canaltype;
  if(canal.type === "GUILD_TEXT") canaltype = "💬 Texto"
  if(canal.type === "GUILD_VOICE") canaltype = "🔊 Voz"

let category;
  if(canal.parent){
    category = canal.parent.id
  } else {
    category = "Ninguna"
  }

  const embed = new Discord.MessageEmbed()
  .setAuthor({name: "Canal Info", iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setDescription( `\n > **Nombre:** \`${canal.name}\`\n > **ID:** \`${canal.id}\`\n > **Tipo de canal:** \`${canaltype}\`\n > **¿Nsfw habilitado?:** \`${canal.nsfw ? "Si" : "No"}\`\n > **¿Contiene descripcion?:** \`${canal.topic ? "Si" : "No"}\`\n > **Categoria:** <#${category}>`)
  .setColor("e60ad4")
  

  message.channel.send({embeds: [embed], allowedMentions: { repliedUser: false }})
    }
}
