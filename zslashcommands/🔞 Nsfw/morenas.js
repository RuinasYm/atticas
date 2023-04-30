const Discord = require ('discord.js')

module.exports = {
    name: "morenas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!morenas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996717461393548/1001932483622866964/video0-51.mov",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647279567487046/AccomplishedQuerulousFerret-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647279949168740/twitter_20211105_211718.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647280918052864/uTLmdyYk8U75e2nN_1.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647281371025418/IllegalMoralSkipper.mov",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647281819824138/NgXYap.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647282570596432/trim.CBA1EC60-4D3B-49FD-99D5-7CFA99896610_1.mov",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647283061342268/video0-33-1.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1027647283535298640/ShimmeringVagueFowl-mobile_1.mov",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498564495294484/V4gdStTH0p71.webm",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498564855988224/ZkwVFceSWdax.webm",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498565271236668/978349.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498565690671124/1079063.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498566147850351/68zg8t5egdo81.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498566558875688/video01.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498566978322522/video5.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498567347404971/video3.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1029498567968161945/Sukihana_Black_Pussy_get_Fingered.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1036760524765024256/VioletredDrearySeahorse-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996996717461393548/1036760525205409823/16469858555821.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Morenas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
