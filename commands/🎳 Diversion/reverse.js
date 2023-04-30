const Discord = require(`discord.js`);
module.exports = {
    name: "reverse",
    alias: ["revertir"],
    desc: "Sirve para reversar un texto",
    uso: "!reverse (texto)",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args) {
       const reverse = args.join(" ").split("").reverse().join("")
       if(!reverse)return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  Tienes que indicar un texto a Revertir! | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
        ]
    })

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Reverse", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setColor("e60ad4")
    .setDescription(` > **Autor:** ${message.author}\n > **Texto:** ${reverse}`)
            message.channel.send({ embeds: [embed] })
    }
}