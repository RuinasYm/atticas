const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

var headshots = [
    "https://cdn.discordapp.com/attachments/1078750371117289607/1090406414708658246/sniped-cristian4ever.gif",
    "https://cdn.discordapp.com/attachments/1078750371117289607/1090406415190999091/free-fire-shoot.gif",
    "https://cdn.discordapp.com/attachments/1078750371117289607/1090406415740444692/free-fire-headshot.gif",
    "https://cdn.discordapp.com/attachments/1078750371117289607/1090406416109555723/heatshot.gif",
];

module.exports = {
    name: "headshot",
    alias: [""],
    desc: "Hasle un headshot a un usuario.",
    uso: "!headshot",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["SEND_MESSAGES"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute (client, message, args) {

        let headshot = headshots[Math.floor(Math.random() * headshots.length)];


        if (!args.length) return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
  
        const usuario = message.mentions.users.first() 
        if (!usuario) {
          return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
        }
        if (usuario.id === message.author.id) return message.channel.send({
          embeds: [new MessageEmbed()
            .setAuthor({name: `${message.author.username} le dió headshot a un ser imaginario. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setImage(`${headshot}`)
            .setColor("e60ad4")
          ]
      })
      

        const embed = new Discord.MessageEmbed()
        .setAuthor({name: `${message.author.username} le dió headshot a ${usuario.username}. >-<`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setImage(`${headshot}`)
        .setColor("e60ad4")
        

        message.channel.send({ embeds: [embed] })
    }
} 