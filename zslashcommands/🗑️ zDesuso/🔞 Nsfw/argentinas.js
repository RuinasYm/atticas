const Discord = require ('discord.js')

module.exports = {
    name: "argentinas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!argentinas",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute (client, message, args){

            if (!message.channel.nsfw) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Este comando solo funciona en canales Nsfw! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
    })

        const contenidos = ["https://cdn.discordapp.com/attachments/996998415378550854/997196350791897230/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/997196469163544576/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/997196540529606766/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1000656320900370492/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1000656349945942026/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1000656443906727986/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1000656491927318550/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1000656571799445674/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1000656623460683796/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1000656729081659392/unknown.png",
        "https://cdn.discordapp.com/attachments/996998415378550854/1033475367886913546/Argentina_acaba_dedeandoseMP4_High_Quality.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Argentinas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
