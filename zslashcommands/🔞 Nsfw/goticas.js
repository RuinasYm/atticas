const Discord = require ('discord.js')

module.exports = {
    name: "goticas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!goticas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996533908948664370/1010296319774044220/goth2.png",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296320218632192/goth.png",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296320617086976/Blanquita_gritona_en_lenceriaMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296320977809449/LuckyMedicalStegosaurus-mobile.mp4.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296321309151262/VID_20210525_105535_789.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296321690837113/IMG_20210410_175004_165.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296322148012132/tlx4nlgpbmj71.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296322538086510/10f377609b768c2a6e5d8880931a4acb.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296322923966544/VID_20220119_231403_895.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296323272085636/20220128_133825.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296402154369124/Sparky29430221_1457789945645395972224P.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296402628317324/video0.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296403131642027/twitter_20211121_101306.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296403601412147/xvideos.com_e087514207889e68c430f5e589dcc11f-1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296404025028682/video2-1.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296404645773392/twitter_20211121_102351.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296405056823396/twitter_20211121_101749.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296405518188564/VID-20220206-WA0036.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296406373834795/gotic_video_2.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296405895696525/987026.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296479866437783/HMSspT8pD_2WslWk_2.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296480675930224/IMG_20211023_123221_305-1.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296481388970034/viddit_3299c40b.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296481862922280/IMG_20211017_182230_835.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296482315915375/unknown-7.png",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296482747912252/unknown-4.png",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296483725193346/unknown-3.png",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296484157194313/received_291289565916170.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296484698267740/DarkmagentaBrightSifaka-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296485138681876/VID_20210325_121403_451.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296535550009424/jWd_F1keRNYd51ZP.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296536023978104/DF20A836-6D00-4AA2-876D-4DC83C656CDD.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296536330141716/41fadad29f4f2e4157f7a94ade069494.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296536674086962/IMG_20220604_142643_425.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296537051582566/IMG_20220803_163432_709.jpg",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296538397933708/ShamelessElectricEuropeanfiresalamander-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296538771238932/trim.2506C92A-6F02-4A60-94E4-F13A1DBFE854.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296610951012382/VID-20211202-WA0153.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296611320119367/913908.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296611630481478/DownrightPrettyGermanspaniel-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296611945062400/NDHNwVM.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296612439986347/redditsave.com_SpringgreenHarmoniousBordercollie.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296612813275297/FavoriteMushyFieldmouse-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296613194977351/ConfusedPinkGrayling-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638079012745357/Sparky29430221_1457789945645395972224P.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1010296630983016488/unknown-8.png",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638079377653820/video0-9.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638080086474873/VID_20220215_153428_994.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638080543674398/VID_20211122_195231.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638081390903388/xvideos.com_448648f543581477c822ec8045c47711.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638080996655144/DiscreteImmaculateGrayling.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638082204614717/VID_20220215_124358_257.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638082670174279/27e54ede-f46b-46ae-b0eb-50497597b2cc.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638082670174279/27e54ede-f46b-46ae-b0eb-50497597b2cc.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638083676799016/g_1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638127037534309/IMG_20210801_114244_606-1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638127926710272/Blanquita_gritona_en_lenceriaMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638128467771443/913908.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638128937549824/video2-3.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638129570893944/LovelyMediumspringgreenPenguin-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638129960943667/pornbel_7.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638130678186045/twitter_1491245378339209217__1645416401946_https_t_co_3ro4WCX7k5_270x480.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638130929832007/boobs.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638131286352012/video2.mp4_1-2.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638190228918302/VID_20220622_213931_255.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638190652538950/dont_show_anyone.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638191332003990/lv_0_20220508181332-1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638191940182066/-8387685321068556137.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638192229593159/AspenSproutSlut.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638192548368414/ek3Spawcmf_6Qxrk.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638192930045952/VID_20220129_195204_444.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638193412386826/femdomsplz.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638193898934352/VID_20211115_145628_060.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638194230280274/VID_20211115_145712_657.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638249104355419/dT-CMtaC9gOwCBic.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638249486045205/Home-Porn-6996795.webm",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638250110988358/video0_2.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638250681417830/VID-20220727-WA0027.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638251243446332/VID_20220522_225751_871.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638251755159552/1_5138640001264779869.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1019638252455596093/J2ly-aAyjmRuxKtW.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1024791627581104288/1028874.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1029496175323254784/twitter_20220929_232930.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450189689720954/1_5082673016870011348.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450190130118676/video0-2-2.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450190503424010/IMG_20210801_114244_606-1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450190889291786/lv_0_20220215135952.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450191380041809/lv_0_20220215140056.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450191862378678/lv_0_20220215140234.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450192361496576/lv_0_20220215163633.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450192772530186/909567342814564352.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450193108086824/BlankBlondMegaraptor-mobile-1.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450242865111051/VID_20211029_133918_713-1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1033450243263561809/video2-3-1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753598681468938/-8832597020176714394.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753599092494347/VID_20210828_104156_948.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753599612596264/VID_20220829_083043_517.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753600153669693/1-1.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753600522752082/1-2.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753600971550730/1-3.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753601390989396/VID_20221005_155313_669.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753601797820416/o.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753602162733076/SomeLavenderVireo-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753602787692714/ssstwitter.com_1663542255992.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753623897604227/gTudupzx11YSBDn5.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036753624329621624/VID_20220916_130442_085.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036756687232704563/NaughtyAncientSunfish.mov",
        "https://cdn.discordapp.com/attachments/996533908948664370/1036756687677296692/1_5035512059756806783.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1040693836109844530/VFhdJLT-1.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1044678454773293208/VID_20220525_204232_375.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1044678455301783672/Diamond_Archives56.mp4",
        "https://cdn.discordapp.com/attachments/996533908948664370/1044678455633125396/VID_20220525_202616_434_1.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Goticas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
