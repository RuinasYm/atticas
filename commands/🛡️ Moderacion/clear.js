const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "clear",
    alias: ["limpiar", "eliminar"],
    desc: "Sirve para eliminar mensajes de un canal",
    uso: "!clear (cantidad)",
    permisos: ["MANAGE_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args, prefix) {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
          ]})
          if(!message.guild.me.permissions.has("MANAGE_MESSAGES"))return message.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")]})


        try {
            const cantidad = args[0];
            if (!cantidad) return message.reply({
                embeds: [new Discord.MessageEmbed()
                    .setDescription("**<:fail:1083542064924479549> |  Tienes que especificar la cantidad de mensajes a Eliminar! | <:fail:1083542064924479549>**")
                    .setColor("e60ad4")
                ]
            })
            if (isNaN(cantidad)) return message.reply({
                embeds: [new Discord.MessageEmbed()
                    .setDescription("**<:fail:1083542064924479549> |  Tienes que especificar la cantidad de mensajes a Eliminar! | <:fail:1083542064924479549>**")
                    .setColor("e60ad4")
                ]
            })
            if (cantidad > 100) return message.reply({
                embeds: [new Discord.MessageEmbed()
                    .setDescription("**<:fail:1083542064924479549> |  No puedes eliminar mas de 100 mensajes a la Ves! | <:fail:1083542064924479549>**")
                    .setColor("e60ad4")
                ]
            })
            message.delete().then(() => {
                message.channel.bulkDelete(cantidad);
                message.channel.send({ embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: "Clear", iconURL: client.user.displayAvatarURL({dynamic: true})})
                    .setDescription(`**Elimine:** \`\`${cantidad}\`\` mensajes`)
                    
                    .setColor("e60ad4")
                    ,
                ] }).then(msg => {
                    setTimeout(() => msg.delete(), 5000);
                });
            })
        }
        catch (err) {
            console.log(err);
        }
    },

};