const Discord = require ('discord.js')

module.exports = {
    name: "milf",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!milf",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996534097826566194/1010302880168808468/-6513087094960434451.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302880605020340/Angeles_Lamas_-_Packspormega.org_7.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302880978317342/LightpinkBlackandwhiteHorseshoecrab-mobile.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302881364201483/459832.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302882039472211/VID_20220107_194626_097.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302882454700042/e2WOi1R.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302882865762325/10.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302883335520417/d9e494fe1b3004a7337ed6d680b1ca0166def741.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302884019196074/VID_20210820_005225_679.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010302884430225529/VID_20211023_094629.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303015288311838/video0-2-1.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303015900684441/VID_20210929_005627_566.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303016404013186/video0_14-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303016974417970/w2yRafk.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303017389674586/VID_20211025_170240_358.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303017876205608/VID_20210922_154817_743.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303018396307476/twitter_20211116_092503.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303018887032922/video0-5.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303019402924072/video0-7.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303020032082111/trim.BCB44D5E-6B9E-42FF-BE7C-3D551A5557DC.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303112038326282/VID_20210803_151634_915.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303112675852288/RDT_20220120_2323345782127883229854047.jpg",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303112348712970/RDT_20220120_232340339319508985152549.jpg",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303115150512268/SE_CULEA_A_SU_TIA_Y_SON_GRABADOS_TERMINA_MALMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303222914756699/VID_20210707_211512_207.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303223413870695/twitter_20210907_220012.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303223787159612/video_2022-07-15_16-41-07.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303224277905468/Thv6CZGvhc4i-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1010303224848318564/VID_20210429_192540_235.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649880110661693/trim.6C031222-0F04-4DD8-A33A-1AD03B8BEDB2.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649879565406228/RNfYHNP.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649880655941692/8YoR84_EigPiAdDH.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649881331208302/video0-3.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649881951977573/video0_6.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649882618867803/1599872076141.webm",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649883130568744/88MISFgG0XRuSQyA.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649883487076433/tumblr_qv651zMvwS1z7flx6.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649883927498884/VID-20210227-WA0031.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649884455968849/HappyWildAmericancurl-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649937979494601/DASH_480_3.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649938700906556/1629050882297.webm",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649939304878110/video0-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649939917242439/VID_20211101_185828_755.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649940911312977/IMG_20211208_165607_281.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649941800484864/qPRb3F9.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649942660321340/VID_20211116_001904_072-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649943029432520/e2WOi1R.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649943708905503/913441.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019649974528655451/ThunderousTransparentHalicore.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019650107999785010/VID_20220125_141930_876.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019650109195169812/EVA_NOTTY_NUDE_SHOWER720P.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019650108654100490/459832.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019650109807530004/VID_20210809_164117_1401.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019650110231158884/xvideos.com_018737a36802a62b29b4474caf433211-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1019650110784819200/VID_20211102_195800_510.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1021804032026746980/WeepySoreBengaltiger-mobile-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1029496421910577253/A_QUICKYJUST_BEFORE_CHECK_UP__MILF_GETS_CREAMPIED__480P.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1029496422271291522/1457335168002.webm",
        "https://cdn.discordapp.com/attachments/996534097826566194/1033476442396315771/ssstwitter_1660754085.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1033476442761199657/VID-20220128-WA0058-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1033476443138703480/4_6041592566703459015-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1033476443709116416/Culazo_de_sobrina_a_sentones_-_XNXX.COM.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1033476444103376926/VID_20220603_014729_381.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1033476444472483962/VID-20220810-WA0383.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756896658493490/xvideos.com_194117fab602933de6169ab773076d51.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756897228926996/VID_20211025_170228_988.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756897744822283/video0-2.mov",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756898235551815/DrMGLzj.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756899279937546/VID_20211116_001904_072-1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756899833581668/w2yRafk_1.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756900320125019/VID_20211025_170240_358.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756900785688638/Angeles_Lamas_-_Packspormega.org_5.mp4",
        "https://cdn.discordapp.com/attachments/996534097826566194/1036756907035201656/WeepySoreBengaltiger-mobile.mp4",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Milf \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
