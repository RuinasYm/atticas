const Discord = require(`discord.js`)
const { MessageActionRow, MessafeSelectMenu, MessageEmbed, MessageButton} = require(`discord.js`)

module.exports = {
    name: "banana",
    alias: [],
    desc: "Sirve para ver el tamaño de tu banana",
    uso: "!banana",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {

let cm = Math.floor(Math.random() * 30)
const embed = new Discord.MessageEmbed()
.setAuthor({name: "Juego Banana", iconURL: client.user.displayAvatarURL({dynamic: true})})
.setDescription(`**La banana de ${message.author} mide ${cm} cm.**`)
.setColor("RANDOM")
.setImage("https://nekocdn.com/res/menus/banana.png")

message.channel.send({embeds: [embed]})
}

}

