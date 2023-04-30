const Discord = require ('discord.js')

module.exports = {
    name: "trios",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!trios",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/1019653765952966696/1019655281002688593/TangibleFabulousBlackmamba-mobile.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655281669578762/xvideos.com_4c206e44afe1438f83a1cdb5edb020b4.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655282244194424/xvideos.com_2d97ac90386810f9af11fb5819a8b9c6.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655283074683021/VID_20211212_113431_343.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655288665690202/VID_20211212_113511_892.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655289303203921/14508722a.webm",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655289957527562/HideousBareAndeancat-mobile.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655290347589652/eBPztfj3pyu5.webm",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655291052249198/hDMsQCVSHGMH.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655335541231666/rdn_MammothBlindEchidna-mobile.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655335948058664/1_4992310237856793083.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655336854040676/1_5085039921807229441.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655337411887125/SxHQQMvh87I-gDa5_1.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655337869058048/VID_20210822_232218_017.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655338447863808/Lacy_getting_fucked_and_fingering_kenzie.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655339118964746/Unisex1150_1541032483013132288440P.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655339769077780/18Famousworld_1541498073700245504270P.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655340217876480/3some.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655381443690637/HotpinkMiserlySanddollar-mobile-1-1.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655382110580767/rdn_TruthfulUnselfishEider-mobile.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655382538407956/lvscd7V.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655383314333746/rdn_AmazingStimulatingWoodpecker-mobile.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655383725396068/batch_process__2609.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655384253862029/batch_process__2611.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655384744603648/4_5796490044524989138.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655386124525578/video0-9.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655489539289138/ChartreuseShockedAlbatross-mobile.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655489962901534/video_2022-03-24_11-31-22.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655490633998386/6464490148127526937_1.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655495377768539/cajDWhH.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1019655495885258833/video0-3-1.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1021803017307168798/CheerfulInfamousCygnet-mobile.mov",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1023673346921091102/V8rlpD1OYLEPE8_1.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1023673347357294783/GumAm_XdAb54DbOY.mp4",
        "https://cdn.discordapp.com/attachments/1019653765952966696/1033110219556933723/lv_0_20221021025007.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Trios \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
