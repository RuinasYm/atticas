const Discord = require ('discord.js')

module.exports = {
    name: "culos",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!culos",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996531938414301285/1010272075551879259/VID_20220521_231059_502.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272076126502992/VID_20220521_231057_730.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272077875511356/2_5346060288569381125.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272078429180014/4_5864204687892284418.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272078953459793/VID_20220521_231425_369.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272079494529044/VID_20220521_231140_728.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272079909756958/VID_20220521_231109_462.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272156418048041/VID_20220521_231055_203.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272156879429682/VID_20220521_231053_258.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272157294657716/VID_20220521_225917_800.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272157919617044/Video.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272158481666199/Snapchat-1543409890.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272158863327262/VID_20211216_020621_976.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272159219847301/video0-1-2_1.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272159551205416/vid-wa147.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272222277025882/VID-20220514-WA0076.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272222599991396/VID_20220611_163746_091.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272223011024958/VID-20220603-WA0032.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272223497568376/1_4965726194180817628.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272227536666795/miamal-of-001.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272228048384130/culo_6.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1010272228530733188/1080p_13-1.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1011706633409269851/xBHSYvTyzhEKY8ki-2.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1011706634424303707/xvideos.com_6ff49e91753c7a9373347e802343b88d.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1011706634994712657/video0_11.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306327257927711/LFppIo3-4.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306328088379493/wQWLOmBJgGuBmruH.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306328486858782/2SVyUjy-GtHqiC4W.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306329556406332/Yeu99fKXrXNFaDP.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306329556406332/Yeu99fKXrXNFaDP.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306329959055430/video1.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306330449784913/CreativeApprehensiveBuckeyebutterfly.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1019306331070537738/KeenLonelyBluebottle.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1021802698003189800/WorthlessPhysicalHarborporpoise.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1021802698896588820/iM89CGmQ_720p.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1023673110584631416/Gyof16OBr9m1_1T4.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1027643483437142046/ssstwitter_1649577022.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1027643483940470935/video0_6.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1027643484473135115/12a474446f8485d0.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1027643485207150664/1661554083292188.webm",
        "https://cdn.discordapp.com/attachments/996531938414301285/1027643485857267785/1661981082506320.webm",
        "https://cdn.discordapp.com/attachments/996531938414301285/1027643486511566898/BoilingBurlyMarmoset-mobile.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1029502627752456232/received_572768367228505.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1029502628184461392/i4BdfVoab1M6hf-E.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1029502628717146212/Culazo_de_sobrina_a_sentones_-_XNXX.COM.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1029502629199499264/1658809192167021.webm",
        "https://cdn.discordapp.com/attachments/996531938414301285/1029502629698613399/1_4900187999720964777.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1029502630210326538/7bbd9633a499cb1a40bc25531ffb93e5.webm",
        "https://cdn.discordapp.com/attachments/996531938414301285/1029502630583603220/VID_20211206_200439_104.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033108141228949504/Snapchat-266826124.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033108141589667950/video0-9.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033108141979746334/trim.109040B5-BB60-4F3A-ACE7-96F422C197C0.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033108142361415750/received_410863504052429.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033108142831185960/received_591144062098843.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033108143418392656/received_4496293990485723.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454967832461432/VID_20220722_234412_407.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454968243507261/VID_21690619_052347_297.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454968784564344/VID-33.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454969191403531/redgifs_IdealisticSharpAfricangoldencat_UnfinishedDeficientItalianbrownbear-mobile-1.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454969745063976/-_b_-_yuziqoq_pubccs_-_-__.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454970239983636/twitter_20220102_012452.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454970680389783/Brazzers_Ass_5-1.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033454971380846773/video0.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455024489103390/278966975_314959684051495_305785635779954340_n.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455024912748704/n2qnrg-ef4808.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455025361522708/DifPD65eAX1utIAL.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455025806131322/C1J2yUmPfT7vudez.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455026229760030/VID-20210506-WA0019.mp4 ",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455026267508857/viddit_b73669a4.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455026867277925/651_r_xV5o5N7rpuzarN.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455027949408287/VID_20220723_004356_856.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455028633096242/VID_20220723_001509_597.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455029396451458/VID_20220722_235234_168.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455030600212510/VID_20220104_104832_700.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1033455031074172969/mnhnHBY.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754675057315900/Vid_6_closest_we_will_get_for_uncensor.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754675472539800/Snapchat-96677875.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754676143640636/Snaptik.app_7142236202194832646.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754676512718901/trim.CE0C6073-F6DE-4B30-8F37-EB7F10EC0611-5.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754676881838200/Snapchat_104.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754677670354964/Culona_de_Instagram_BIG_ASS_tremenda_cola__240_X_426_.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754678215626843/ltnlbghtss.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754678681182360/pchssrvl.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754679096410273/277429299_5304755126211029_4211897911893166146_n.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754801515560990/gruesomesnivelingbluemorphobutterfly.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754802018881566/mnhnHBY.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754802635440169/1654804766373.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754803109400676/IMG_05421.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754803486896158/1048543.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754804246057020/viddit_dbf5259e.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754804812296282/Snapchat-79465552.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754805198159993/VID_20220722_234416_456.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754805646954526/VID_20220722_235234_168.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754869673005117/278966975_314959684051495_305785635779954340_n.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754870159548498/video0-1_3-1.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1036754870516068363/Video_1.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1037794878677069844/6747380641698426533.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1041824176492781698/IMG_3366.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1041824176882860144/IMG_3279.mov",
        "https://cdn.discordapp.com/attachments/996531938414301285/1044674159655014590/YRS8SJs.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1046521638511976538/Brazzers_Bdsm28.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1046521639099179180/video0-15.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1046521639849955358/GSgn6au.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1046521640357470379/redditsave.com_AshamedEsteemedPipistrelle.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1046521641036943421/A4499A85-D23C-4F49-8A85-9E4BD5887872.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703469838012517/VID_20221106_141905_731.mp4.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703470282616872/1130024.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703470743978004/video-1657492740.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703471238909983/video-1657492741.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703471792566272/1128140.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703472312647760/1128920.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703473231204412/czfOCCkIJH4aHMCq.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703473843568670/VID_20221106_152713_916.mp4.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703474325917768/VID_20221106_152501_181.mp4.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703470379085964/VID_20221109_212006_330.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703470853029938/8YwDo0Jk5eNtWKmF.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703471637381140/XqHFxOStXj337JTB.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703472132292668/zbvcC8DbRgSfmGjl.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703472639815720/m9AwAwkCyAaNfOEp.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703473042456647/Bzlm34GEDC1tJIQZ.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703473466093659/6cn52Zt.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703473986191380/VID_20221109_171421_532.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703474397216888/VID_20221109_211743_700.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703474913128498/VID_20221109_211759_951.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703515690151946/W9SXGlmA7m0UwMkf.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703516092809246/uYsSXwLI5ST-6ls.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703516558360657/JNSFtIKXQoO7Siw4.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703517288181841/VWciBywC6gZryLQs.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703518131224776/942087.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703518613581874/1013821.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703519016239114/1134899.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703519397904414/1138731.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703519792181358/fRq4PeRo-i3h7PS-.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703545142550548/1123056.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703545486491668/1112450.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703545884954664/Jp4eAGmH2RsnSRYx.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703546686054540/twitter_20221213_174502.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703547344568320/1122431.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703547944345651/1116958.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703548347007056/1126801.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703549013893150/1127244.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703549479469167/1127467.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703550041497710/1123681.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703557654167592/1114798.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703558044241930/1128243.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703558451085412/huG34SY3hxI4nDH-.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703558836953188/Vu4D9-ug1R_gRlxI.mp4",
        "https://cdn.discordapp.com/attachments/996531938414301285/1052703559243812874/1122592.mp4",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Cuerpo - Culos \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
