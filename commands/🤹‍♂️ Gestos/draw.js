const ActionsClient = require('discord-actions');
const actions = new ActionsClient();
const Discord = require('discord.js')
;
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'draw',
alias: ['dibujar'],
desc: 'Sirve para dibujar',
uso: '!draw',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['SEND_MESSAGES'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: `${message.author.username} está dibujando.`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    .setImage((await actions.sfw.draw()).url)
    .setColor('RANDOM')

    message.channel.send({embeds: [embed]})
 
  }
}