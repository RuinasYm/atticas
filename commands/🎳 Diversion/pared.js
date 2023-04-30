const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pared",
    alias: [],
    desc: "Sirve para lanzar una pared",
    uso: "!pared",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args) {
        const embed = new Discord.MessageEmbed()
        
        .setAuthor({name: "Pared", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`**${message.author} Acabo de poner pared**`)
        .setImage("https://cdn.discordapp.com/attachments/1014748725110902904/1019485194329260072/lv_0_20220914004750.gif")
        
        .setColor("e60ad4")
        

        message.channel.send({ embeds: [embed] })
    }
} 