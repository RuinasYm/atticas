const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'banner',
    alias: ["userbanner"],
    desc: "Sirve para ver el banner de un usuario",
    uso: "!banner",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"],
    valoracion: "⭐⭐⭐⭐⭐",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    async execute (client, message, args)  {
        const user = message.author || message.mentions.members.first() || client.users.cache.get(args.join(' '));
        fetch(`https://discord.com/api/users/${user.id}`, {
            headers: {
                Authorization: `Bot ${client.token}`,
            },
        })
            .then(res => res.json())
            .then(body => {
                if (body.banner) {
                    const extension = body.banner.startsWith('a_') ? '.gif' : '.png';
                    const url = `https://cdn.discordapp.com/banners/${user.id}/${body.banner}${extension}?size=1024`;

                    const embed = new MessageEmbed()
                        .setImage(url)           
                        .setColor("e60ad4")
                        .setAuthor({name: `Banner de ${user.username}`, iconURL: user.user.displayAvatarURL({ dynamic: true })})

                    message.channel.send({ embeds: [embed] });
                } else {
                    if (body.accent_color) {
                        const embed = new MessageEmbed()
                            .setDescription(`<:fail:1083542064924479549> | **El usuario no tiene un banner.**`)
                            .setColor('e60ad4');

                        message.channel.send({ embeds: [embed] });
                    } else
                        return message.channel.send({embeds: [new MessageEmbed()
                            .setDescription(`<:fail:1083542064924479549> | **El usuario no tiene un banner.**`)
                            .setColor('e60ad4')
                        ]});
                }
            });
    },
};