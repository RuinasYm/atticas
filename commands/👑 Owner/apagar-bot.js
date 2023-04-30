const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "off",
    alias: ["apagar"],
    desc: "Sirve para apagar el bot",
    uso: "!off",
    permisos: ["ADMINISTRATOR"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    execute (client, message, args) {

        if(message.author.id !== "942958351371862016") return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

        const embed = new Discord.MessageEmbed()
        .setTitle(`**<:sucess:1083547524717101056> | Bot Apagado Exitosamente! | <:sucess:1083547524717101056>**`)
        .setColor("e60ad4")
         
          // Desconectar al bot
          message.reply({embeds: [embed]}).then(() => {
            client.destroy();
          });
    }
}