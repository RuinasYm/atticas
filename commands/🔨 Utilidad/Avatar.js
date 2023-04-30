const Discord = require('discord.js');
const {MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
    name: "avatar",
    alias: [],
    desc: "Sirve para ver el avatar de un usuario",
    uso: "!avatar",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"],
    valoracion: "⭐⭐⭐⭐⭐",


    async execute (client, message, args) {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let png = user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
        let jpg = user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        let webp = user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })


        const avatar = new Discord.MessageEmbed()
        .setAuthor({name: "Avatar", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`**Avatar de ${message.author}**`)
        .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setColor("e60ad4")
        
        
        message.channel.send({ embeds: [avatar], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle("LINK").setLabel("PNG").setURL(`${png}`),
                new Discord.MessageButton().setStyle("LINK").setLabel("JPG").setURL(`${jpg}`),
                new Discord.MessageButton().setStyle("LINK").setLabel("WEBP").setURL(`${webp}`),
            ]
        )]})
    }
    
}