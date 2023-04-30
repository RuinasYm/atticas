const Discord = require ('discord.js')

module.exports = {
    name: "pajasrusas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!pajasrusas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996995922552688792/1009945991463583804/VID_20211201_001959_376.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1009945991828480121/hgDHOmgKiVJf_2Q6.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1009945992428261518/FabulousForestgreenIndianpangolin-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1009945992805757019/xvideos.com_095626286e88c1fe59d62b1302664c0c-1-1.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307901107572818/video-www_xvideos_com-16447502457602.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307901728325632/1636625010444.webm",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307902445559878/SinfulBountifulIrishredandwhitesetter-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307903120855040/KCB41B4.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307903640932465/4_5796467757939690538.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307904496578620/VID_20210502_024421_287.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307905914249329/HideousInferiorGermanshorthairedpointer-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307906581135390/ChiefGivingPaintedladybutterfly-mobile-11.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1019307907256438855/video0.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1021803379531448412/AntiquewhiteWhiteAmericanwarmblood-mobile-1.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1021803380055744572/31503062a.webm",
        "https://cdn.discordapp.com/attachments/996995922552688792/1026602265546592377/xvideos.com_62d2b07b78860a27982880889adfbc83.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1026602266058293280/xvideos.com_2de69f14cb01a4399ae8dc4c4f1a61ac.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641674823893062/iio8ljo6or691.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641675998298172/video0-6.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641676501631016/DarkredDesertedGuanaco-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641676942037053/hgDHOmgKiVJf_2Q6.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641677319503992/video0-1-1.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641677717962772/SinfulBountifulIrishredandwhitesetter-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641678271627294/video0-7-1.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641678795898950/BouncyEarnestShoveler-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641679278260244/TF.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027641680070983781/she-makes-him-blow-h...ks5o6n.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027646316613992529/trim.09E512BF-EEB3-47D6-8A87-3E08E0791519.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027646316114870282/3Goodtitjob.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027646317062799501/twitter_20220706_072136.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027646317524156527/LavishDarksalmonAlaskanhusky-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027646318329479299/Titjob.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1027646318832783400/ValuableBeautifulDipper.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1029494431172280390/ArtisticRosyHummingbird.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1029494431528800328/WhichImmaculateHarvestmouse-mobile-1.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474375015473182/Z32Zqax.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474375388774480/Dream.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474375799803934/video0-4-1-1.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474376181489684/NaiveCrushingCrayfish-mobile-1.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474376621899886/agagd.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474377058095154/DarkredDesertedGuanaco-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474377397837834/18a9502a548eff339d0bca9113788991.0.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1033474377762750564/1616353747806.webm",
        "https://cdn.discordapp.com/attachments/996995922552688792/1040692749114032148/KCB41B4.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1040692749579603978/twitter_20220124_073241.mp4",
        "https://cdn.discordapp.com/attachments/996995922552688792/1040692750036770816/DarkredDesertedGuanaco-mobile.mov",
    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Pajas_Rusas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
