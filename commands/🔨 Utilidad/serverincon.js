const Discord = require('discord.js');

module.exports = {
    name: "servericon",
    alias: ["sicon"],
    desc: "Sirve para ver el icono del sevidor",
    uso: "!servericon",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute (client, message, args) {

        let server = message;

        let png = server.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
        let jpg = server.guild.iconURL({ format: 'jpg', dynamic: true, size: 1024 });
        let webp = server.guild.iconURL({ format: 'webp', dynamic: true, size: 1024 });

        const svicon = new Discord.MessageEmbed()
        .setAuthor({name: "Server Icon", iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setDescription(`**Icono del servidor: \`${message.guild.name}\`**`)
            .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("e60ad4")
            
            

        message.channel.send({ embeds: [svicon], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`PNG`).setURL(png),
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`JPG`).setURL(jpg),
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`WEBP`).setURL(webp),
            ]
        )]})
    }
    
}