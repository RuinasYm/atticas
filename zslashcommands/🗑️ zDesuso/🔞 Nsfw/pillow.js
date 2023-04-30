const Discord = require ('discord.js')

module.exports = {
    name: "pillow",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!pillow",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802580371996692/1001917487702610070/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917538906685471/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917560637370388/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917583898980493/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917612453810307/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917649753751562/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917671450869830/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917695442288880/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917715528826890/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917729864962088/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917765348757544/unknown.png",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001918089446825994/twitter_1462986029623820291__1643395071641_Buenas_https_t_co_KxMz4x4YhD_448x848.mp4",
        "https://cdn.discordapp.com/attachments/996802580371996692/1001917842964361376/unknown.png",
        "https://cdn.discordapp.com/attachments/971426231352447046/994430279986970674/lv_0_20220701204831.mp4",
        "https://cdn.discordapp.com/attachments/996802580371996692/1027645470044065912/QQfhJJX.mp4",
        "https://cdn.discordapp.com/attachments/996802580371996692/1027645470551576636/twitter_20220906_100824.mp4",
        "https://cdn.discordapp.com/attachments/996802580371996692/1027645470996189204/OrganicCrushingArmyant-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802580371996692/1027645471713415168/dSQ3ItF.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Pillow \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
