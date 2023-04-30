const Discord = require("discord.js")
const translate = require ("translate-google")

module.exports = {
    name: "fr",
    alias: ["frances"],
    desc: "Sirve para traducir un texto a frances",
    uso: "!fr (texto)",
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

        translate(args.join(" "), {to: 'fr'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor({name: "Traductor Frances", iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")
            .setDescription(` >  ${res}`)    
            message.channel.send({ embeds: [embed] })
        })
    }

}