const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "insano",
    alias: [],
    desc: "Sirve para ver tu porcentaje de insano",
    uso: "!insano",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute (client, message, args) {
        let probabilidad = Math.floor(Math.random() * 100)

        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Insano", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`${message.author} Tu nivel de insano es de **${probabilidad}%**.`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/1052343306538975282/1085340564490305667/HJPXnfR1_400x400.png`)   
        .setColor("e60ad4")
        

        message.channel.send({ embeds: [embed] })
    }
} 