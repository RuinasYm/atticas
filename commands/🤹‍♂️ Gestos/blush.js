const ActionsClient = require('discord-actions');
const actions = new ActionsClient();
const Discord = require('discord.js')
;
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'blush',
alias: ['sonrojarse'],
desc: 'Sirve para sonrojarse a un usuario',
uso: '!blush',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['SEND_MESSAGES'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: `${message.author.username} se sonroja.`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    .setImage((await actions.sfw.blush()).url)
    .setColor('RANDOM')

    message.channel.send({embeds: [embed]})

}}