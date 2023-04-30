const Discord = require ('discord.js')

module.exports = {
    name: "publico",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!publico",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996803535821885480/1001911869600174271/VID_20220602_005528_180.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913006944419991/UntimelySqueakyZanzibardaygecko-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913007338696854/ImmenseComplexAmericancreamdraft-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913007821033695/ForcefulAttachedHoverfly-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913008206913589/GraveMenacingFirefly-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913008840265759/WoozyCommonVole-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913009310015598/Peek-a-boo.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913009901424720/1056178.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1001913010375368814/twitter_20220311_020437.mp4",
        "https://cdn.discordapp.com/attachments/848054954986962994/999150828554289222/i-got-caught-playing-with-my-pussy-in-the-hotel-erktvcmdhs.mp4",
        "https://cdn.discordapp.com/attachments/908213490198663220/999437304127049748/yw63p8sisy.mp4",
        "https://media.discordapp.net/attachments/993290530479935548/996580603816333332/GruesomeOrangeAdamsstaghornedbeetle-mobile.mov",
        "https://media.discordapp.net/attachments/993290530479935548/996580780186804254/G_LVje-Pjl0qyKji.mp4",
        "https://media.discordapp.net/attachments/993290530479935548/996580780606238781/GrippingBiodegradableUlyssesbutterfly-mobile.mov",
        "https://media.discordapp.net/attachments/993290530479935548/996580776105738341/922480.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1009940139750981662/rznqWsZ.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1009940140073959514/unamed_43.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1009940140543717447/128090.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1009940141013471373/b092149d-83d5-4293-bc6c-28337b6541e8.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647346075770980/PlasticAlienatedLacewing.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647346658791564/vjOD8voD1ss9.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647347623460914/VID_20220310_191047_344.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647348026122340/93sZAaRFzRtsBX-8.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647348646875176/LuckySnarlingFieldmouse-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647349028569118/PUBH_20220216_05.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647349557043272/PUBH_20220216_12.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647350303641640/FrigidGorgeousThrasher-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647350962126948/xvideos.com_cfd727d93caf8c2abd4769799fa2003e.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647351733882910/DASH_240-3.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647401662886058/MediumInfamousAxolotl.webm",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647402476576799/20211112_015229615541.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647403005067274/DenseMilkyBlackfootedferret-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647403646779532/cachedVideo.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647404133326898/PublicHealthyReflectingIslandwhistler.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647404871532624/No-one-reads-this-anyway.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647405190283364/1610781956750.webm",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647405873975447/3798cfb0-09ea-4780-89c0-67d56e4aad8c.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647406595391558/6-y0LKCcl.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647476988395651/PuzzledTheseWidowspider-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647477613330522/EvenTemptingGalapagossealion-mobile1.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647478053736588/OpenMediumpurpleItaliangreyhound-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647478640947331/67289-881c50156686664e9e4a3610bacab396.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647479211364402/1636847849007.webm",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647479806967908/VID-20210803-WA0005.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647480176058459/GruesomeOrangeAdamsstaghornedbeetle-mobile_1.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647480599691354/DearestInternalDodobird-mobile.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647480960393308/cliffside-doggystyle-3kx2vsk9wh.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647546282483723/video0_4.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647547003895848/VID_20211220_105824_319.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647547905679390/VID-20210818-WA0503.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647548610326538/received_760082864707954.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647549734395955/MonumentalCrazyBarnowl.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647550363553803/pfpHrUY.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647551403737138/Facialoutside.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647552125141022/folk_hub_lustis_1457613771321577475480P.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647586019319909/VID_20220217_183400_731.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647586623295560/cachedVideo_1.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1019647587302789180/VID_20211223_120534_992.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1021803779164745848/SexHouse_Public18.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1021803779982643280/SexHouse_Public10.mov    ",
        "https://cdn.discordapp.com/attachments/996803535821885480/1021803780720828436/SexHouse_Public34.mov",
        "https://cdn.discordapp.com/attachments/996803535821885480/1021803781341593610/SexHouse_Public58.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1041823621959663636/VID-20200723-WA0164.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1041823622307786793/twitter_20220311_020437.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1041823622756573264/134535-72556dc0f7738a9c4010f647937d4c3d1.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1052713227252928532/xvideos.com_e3778904be951c2adce37aec3d73d05c-1.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1052713227626238016/xvideos.com_4c206e44afe1438f83a1cdb5edb020b4-2.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1052713228028882964/991481.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1052713228477665290/1035238.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1052713228922277949/brazers9.mp4",
        "https://cdn.discordapp.com/attachments/996803535821885480/1052713229329117195/VID_20220523_221254_995.mp4",

    ] 
        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)];
    setTimeout(() => {
        
    message.channel.send({ content: `\`\`\`🔞 Publico - Vida Real \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
    )]})}, 1000);

}

}