const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'wikipedia',
    alias: ["wiki"],
    desc: "Sirve para buscar algo en wikipedia",
    uso: "!wikipedia <busqueda>",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     async execute (client, message, args) {
        const query = args.join(' ');
        if (!query) return message.reply({embeds: [new MessageEmbed()
            .setDescription(`<:fail:1083542064924479549> | **Ingresa una busqueda.**`)
            .setColor('e60ad4')
        ]});
        const body = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`).then(
            res => res.json().catch(() => {})
        );
        if (!body) return message.channel.send({embeds: [new MessageEmbed()
            .setDescription(`<:fail:1083542064924479549> | **Contenido no encontrado**`)
            .setColor('e60ad4')
        ]});
        if (body.title && body.title === 'Not found.')
            return message.channel.send({embeds: [new MessageEmbed()
                .setDescription(`<:fail:1083542064924479549> | **Contenido no encontrado**`)
                .setColor('e60ad4')
            ]});

        const embed = new MessageEmbed()
            .setAuthor({name: `${body.title}`, iconURL: `${body.thumbnail.source}`})
            .setDescription(`> ${body.extract}** [Leer Mas](${body.content_urls.desktop.page})**`)
            .setColor("e60ad4")

        if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
        message.channel.send({ embeds: [embed] });
    },
};