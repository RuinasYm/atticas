const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

var mancos = [
    "https://cdn.discordapp.com/attachments/995244061806039100/1019370889390866492/images_8.jpeg",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042197188555571310/manco1.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042197667939368982/manco2.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042197898772881448/manco3.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042198564723494942/manco4.gif"
];

module.exports = {
    name: "manco",
    alias: ["noob"],
    desc: "Sirve para ver tu porcentaje de manco",
    uso: "!manco",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute (client, message, args) {
        let probabilidad = Math.floor(Math.random() * 100)
        let manco = mancos[Math.floor(Math.random() * mancos.length)];

        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Manco", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`${message.author} Tu nivel de manco es de **${probabilidad}%** <:coffe:1085588495172632638>.`)
        .setImage(`${manco}`)
        
        .setColor("e60ad4")
        

        message.channel.send({ embeds: [embed] })
    }
} 