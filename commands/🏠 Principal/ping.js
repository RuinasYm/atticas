const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "ping",
  alias: ["pong"],
  desc: "Sirve para ver la latencia del Bot",
  uso: "!ping",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"],
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

  const Embed = new Discord.MessageEmbed()
  .setAuthor({name: "Ping", iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setDescription(`🍭 API: \`${message.createdTimestamp - message.createdTimestamp}ms\`\n📨 Mensajes:  \`${Math.round(client.ws.ping)}ms\``)
  .setColor("e60ad4")
  .setThumbnail('https://cdn.discordapp.com/avatars/1067273618234544209/b83824611e0c9ea5e962dfc1544b1a0e.png?size=1024')
  
  
  
  
message.reply({ embeds: [Embed] })
  }
}