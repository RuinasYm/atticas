const Discord = require ('discord.js')

module.exports = {
    name: "plug",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!plug",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802018628862003/1001914872860266516/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001914889880731688/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001914916636209202/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001914978883866734/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001915036853342260/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001915074623066233/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001915107191820349/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001915143116042361/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001915204763922562/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001915268584460338/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1001915353657520129/unknown.png",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937846980841572/VID_20211101_224040_768.mov",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937847341559891/S1VvxDk.mp4",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937847786164264/OblongWheatBunny.mov",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937848121692260/Snapchat-505641191.mp4",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937848612433930/OrnateCumbersomeZenaida.mov",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937848994111548/MiserableDimpledBasilisk.mov",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937849430310912/viddit_a38ad0ea.mov",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937849858142208/YellowgreenStingyDamselfly.mov",
        "https://cdn.discordapp.com/attachments/996802018628862003/1009937850193694824/VID-20220529-WA0259.mp4",
        "https://cdn.discordapp.com/attachments/996802018628862003/1036758455719047262/VID_20211214_222546.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Plug \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
