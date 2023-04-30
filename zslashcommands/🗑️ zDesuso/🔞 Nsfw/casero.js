const Discord = require ('discord.js')

module.exports = {
    name: "casero",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!casero",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/1033108924817211432/1033109814613643294/VID_20211027_192003_221.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109815116972072/xvideos.com_0cd73bc9d9bbd82d1f9b3ef2a50cacd4.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109815548989540/horny_wife.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109815939043469/VID_20211026_195411_574.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109816371069039/VID_20220507_202723_646.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109816811466872/VID_20220507_202752_744.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109817201528962/VID_20220507_202759_588.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109817595797655/-1641565960688450478.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109818006851616/VID-20211120-WA0012.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109872079802468/received_537203393668090.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109872499249232/received_1648049461905816.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109873002557560/received_1648057821904980.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109873577181354/VID_20210917_165735_902.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109874168582144/5vGQD9f.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109874713825331/video0-2.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109875137454193/Mr.swollen_-_Tinder_Date_was_a_success__She_took_dick_like_a_pro.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109875565285498/VID_20220514_174245_334.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109876030836907/xvideos.com_6b885082032a2a8c3eca4bff852e03aa.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109959774306365/Backshot.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109960231501834/video_4.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109960743202856/k3LYrMtogvgyyTby-1.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109961640792095/NgS9ur6UpTIN_ozA.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109962030858280/PwJbrCBrVVAR-Fsk.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109962437701692/aqWHGhxQReul0L7q.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109962811002953/9CXXW1fJY29ofcBU.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109963201060864/0ebnQWgSP3LFyxaa.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033109963649843230/0DVK9j6uaySess56.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110019065004042/VID_20220507_202011_173.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110019467661363/Latina.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110019937407067/Wgs4l7kCPwMayKR-.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110020361039923/IQaVXTaf5wwKkBnQ.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110020793061446/xvideos.com_a6c70a60a82e2d2839d63896366212b2-2.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110021275385896/xvideos.com_42fe3cc3c9d218cc575160e77d8d566f-2_1.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110021745160402/xvideos.com_bb4f38484b95c5873e0bd5f2bdb04457.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110022177181736/1661398565140876-1.webm",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110022604980264/received_295005739182225.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110064548032552/jZGj6TfTZ1Zyx8mY.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110065068118036/VID_20220507_202015_136.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110065512722573/VID_20220213_215936_812.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110066007658496/twitter_20210918_020648.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110066406097017/7.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110066796179576/packscaserospormega.com-11.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110067161088060/wrkverifjeiof-10_Trim.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110067660193832/VID_20220203_214907_232.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110068096413844/VID_20211129_130212_266.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110068557795358/P-A-C-K-S.com_9.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110109422891228/VID_20220223_171107_268.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110110291099741/video_2022-02-11_07-37-54.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110110781853787/VID_20220223_195914_633.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110111218049115/VID_20220223_195957_418.mp4",
        "https://cdn.discordapp.com/attachments/1033108924817211432/1033110114959380510/VID_20220221_223339_230.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Casero \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
