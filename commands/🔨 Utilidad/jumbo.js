const { MessageEmbed, Util } = require("discord.js");
const { parse } = require('twemoji-parser');

module.exports = {
    name: 'jumbo',
    alias: ['emojigrande'],
    desc: 'Sirve para agrandar un emoji',
    uso: '!jumbo <emoji>',
    permisos: ['SEND_MESSAGES'],
    permisos_bot: ['ADMINISTRATOR'],
    valoracion: '⭐⭐⭐⭐⭐',
    async execute(client, message, args) {
        const emoji = args[0];
        if (!emoji) {
            return message.reply({
                embeds: [new MessageEmbed()
                    .setDescription(`<:fail:1083542064924479549> | **Tienes que ingresar un emoji.**`)
                    .setColor('e60ad4')
                ]
            });
        }
        const custom = Util.parseEmoji(emoji);
        if (custom.id) {
            const emojiUrl = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png'}?size=2048`;

            const embed = new MessageEmbed()
                .setImage(emojiUrl)

            return message.reply({ embeds: [embed] });
        } else {
            const parsed = parse(emoji, { assetType: 'png' });
            if (!parsed[0]) {
                return message.reply({
                    embeds: [new MessageEmbed()
                        .setDescription(`<:fail:1083542064924479549> | **Ingresa una emoji Valido.**`)
                        .setColor('e60ad4')
                    ]
                });
            }
            const parsedUrl = `${parsed[0].url}?size=2048`;

            const embed = new MessageEmbed()
                .setImage(parsedUrl)

            return message.reply({ embeds: [embed] });
        }
    }
}
