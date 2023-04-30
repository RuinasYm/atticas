const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const ms = require("ms")

module.exports = {
    name: "slowmode",
    alias: ["modolento"],
    desc: "Sirve para enfriar un canal",
    uso: "!slowmode (tiempo)",
    permisos: ["MANAGE_CHANNELS"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    /**

     */
    async execute (client, message, args) {
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_CHANNELS\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
          ]})
          if(!message.guild.me.permissions.has("MANAGE_CHANNELS"))return message.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_CHANNELS\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")]})
        if(!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.reply({
                embeds: [new Discord.MessageEmbed()
                    .setDescription("**<:fail:1083542064924479549> |  Especifica el tiempo de duracion en Milisegundos! | <:fail:1083542064924479549>**")
                    .setColor("e60ad4")
                ]
            })
        }

        const raw = args[0];
        const milliseconds = ms(raw);

        if(isNaN(milliseconds)) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  Introduce un tiempo Valido! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })
        if(milliseconds < 1000) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  El tiempo minimo de slowmode es de \`1 segundo\`! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        const embed = new Discord.MessageEmbed()
        .setDescription(` > **Usuario:** ${message.author}\n> **Canal:** ${message.channel}`)
        .setAuthor({name: "Slowmode Activado", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("e60ad4")
message.channel.send({ embeds: [embed] })
    }
}