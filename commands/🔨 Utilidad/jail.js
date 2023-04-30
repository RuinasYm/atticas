//falta testeo msg de respuesta
const Discord = require('discord.js');
const {MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
    name: "jail",
    alias: ["carcel", "enjaular"],
    desc: "Sirve para enjaular a un usuario",
    uso: "!jail o !jail (usuario)",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

async execute (client, message, args){

    const user = message.mentions.members.first() || message.author;
    const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

    const embed= new Discord.MessageEmbed()
    .setAuthor({name: "Jail", iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setDescription(`**${message.author} ha encarcelado a ${user}**`)
            .setImage(`https://some-random-api.ml/canvas/jail?avatar=${avatar}`)
            .setColor("e60ad4")
            
            

        message.channel.send({embeds: [embed]})
        
    }
  }
    
