
const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "dado",
    alias: [],
    desc: "Sirve para tirar un dado al azar",
    uso: "!dado",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args) {
        const dado = Math.floor(Math.random() * 6)

let author = message.author.username;

const Embed = new Discord.MessageEmbed()
.setAuthor({name: "Dado", iconURL: client.user.displayAvatarURL({dynamic: true})})
.setColor("e60ad4")

.setDescription(`**Este es tu número ${message.author}**\n\n  > **🎲:** \`${dado}\``) 

message.channel.send({ embeds: [Embed] })
    }
}
