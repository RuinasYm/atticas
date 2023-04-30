const Discord = require('discord.js')

const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'globalchat',
alias: ['chatglobal'],
desc: 'Sirve para usar el chat global del bot.',
uso: '!globalchat',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['ADMINISTRATOR'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {
 

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "CHAT GLOBAL", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setColor('e60ad4')
    .setDescription('Para usar el chat global del bot, crea un canal con este nombre en especifico:\n> \`global-chat\`')

    message.channel.send({embeds: [embed]})
  }
}