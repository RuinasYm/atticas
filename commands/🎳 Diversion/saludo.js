const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
var saludos = [
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203427708612679/saludos9.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203428241281044/saludos8.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203428648136914/saludos7.gif    ",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203429159833620/saludos6.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203429600243772/saludos5.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203433672904796/saludos4.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203434092351588/saludos3.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203434461433946/saludos2.gif",
    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203435023487006/saludos1.gif"
];

module.exports = {
    name: "saludo",
    alias: [],
    desc: "Sirve para saludar a un usuario",
    uso: "!saludo (usuario)",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    execute (client, message, args){

        let saludo = saludos[Math.floor(Math.random() * saludos.length)];
        const usuario = message.mentions.users.first()
    
        if (!usuario) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  Tienes que mencionar a quien quieres Saludar! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

        if (usuario.id === message.author.id) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No te puedes saludar a ti Mismo! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Saludo", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`**${message.author} ha saludado a ${usuario}**`)
    .setImage(`${saludo}`)
    
    .setColor("e60ad4")
    
            message.channel.send({ embeds: [embed] })
       }
    } 
    
  