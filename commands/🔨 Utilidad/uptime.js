const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'uptime',
alias: ['tiempoactivo'],
desc: 'Sirve para ver el tiempo que lleva activo el bot',
uso: '!uptime',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['ADMINISTRATOR'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {
 
        let dias = Math.floor(client.uptime / 86400000)
        let horas = Math.floor(client.uptime / 3600000) % 24
        let minutos = Math.floor(client.uptime / 60000) % 60
        let segundos = Math.floor(client.uptime / 1000) % 60
    
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: 'UPTIME', iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`**Tiempo Prendido**:\n> Dias: \`${dias}\`\n> Horas: \`${horas}\`\n> \`${minutos}\`\n> \`${segundos}\``)
        .setColor("e60ad4")
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        
        
        message.reply({ embeds: [embed]})
    }
}
