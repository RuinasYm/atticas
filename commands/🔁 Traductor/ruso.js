const Discord = require("discord.js")
const translate = require ("translate-google")

module.exports = {
    name: "rs",
    alias: ["ruso"],
    desc: "Sirve para traducir un texto a ruso",
    uso: "!rs (texto)",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute (client, message, args){

        if(!args.join(" ")) return message.channel.send({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  Dijita un texto a Traducir! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

        translate(args.join(" "), {to: 'ru'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor({name: "Traductor Ruso", iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")
            .setDescription(` >  ${res}`)    
            message.channel.send({ embeds: [embed] })
        })
    }

}