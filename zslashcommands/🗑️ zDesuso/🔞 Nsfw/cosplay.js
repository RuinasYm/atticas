const Discord = require ('discord.js')

module.exports = {
    name: "cosplay",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!cosplay",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/1052706679474634762/1052706961751289989/RMms0GZuL--l872h.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706962137157733/40482171a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706962640478248/40503141a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706963135410216/39740011a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706963500306504/39554281a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706963932323840/41345961a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706964334981160/41327341a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706964704071680/38694321a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706965060591667/29045582a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706965421305866/41086521a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706973977682011/ProbableCoordinatedIndianskimmer.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706974522945556/1080P_4000K_419551891.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706975051423754/W9SXGlmA7m0UwMkf.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706975676379136/RDT_20221127_151832.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706976167104583/RunnyWretchedFritillarybutterfly-mobile.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706976498458725/33641381a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706976867561532/38356961a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706977266012160/39563001a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052706977890971698/VID_20221202_202929_209.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707151027634257/40503821a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707151941992559/41467581a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707152390791188/41954571a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707152910893147/41055691a.webm",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707153347092591/xvideos.com_5cde0462fb73e44226eeb92ef43b3370.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707153854611456/trim.F96544D2-5A8C-450A-8465-53DC557E1ADD.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707154768961616/xvideos.com_28cfdf7b9953eb010d61f0164d9c4dce.mp4",
        "https://cdn.discordapp.com/attachments/1052706679474634762/1052707155175817356/40504051a.webm",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Cosplay \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
