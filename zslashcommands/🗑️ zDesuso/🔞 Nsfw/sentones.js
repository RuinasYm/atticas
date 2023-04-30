const Discord = require ('discord.js')

module.exports = {
    name: "sentones",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!sentones",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996995158316945459/1001898331464810546/VID_20211030_205019_796.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1001898331800359072/1462198583512350722.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1001898332173643958/DrearyDeliciousIchidna-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1001898332676964442/FinishedUnluckySwift-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1001898333150924820/OfficialVariableRoach_1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1001898333549375498/VID_20220207_161236_658.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1001898333893312582/MoistBabyishZebraswallowtailbutterfly-1.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1001898334254026852/VID_20220202_173512_745.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1009944046564806738/1RCFcE2XGlmw.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652334164398080/gMm1YbCM_WuaiCsF.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652334822887505/cTJvjuG.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652335359766630/SexHouseAmator1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652335879868516/video0-2.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652336282509362/VID_20220703_165020_146.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652337003937822/yE3yWmO.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652337796653166/MeekAnotherBird-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652338467754014/MeaslyOptimisticMangabey.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652339046551682/1_5102705302684303770.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652571943665784/PartialHospitableHousefly.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652668744011816/KXeMPethN6c_j2YR.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652669230563420/PhatAss.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652669557715045/video0-28.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652670430138489/LikableWoozyColt-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652671164121108/Anal_creampie_rubia_culona_-_XVIDEOS.COM.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652671742939197/received_1072196136681590.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652672925749289/video2_1-1.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652672925749289/video2_1-1.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652674297282560/xvideos.com_232b9438e1d20aaafa0b7b9c81fd168c.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652675069030501/JOCYAFoagW9z.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652676646084619/CarefulNewDegus-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652689526784142/xvideos.com_0adcb2178a71d7aa22ee7e68739689d1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652690218848306/zyoyqdqP1sf_pVdv.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652691112247336/1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652691519090708/PuzzledShimmeringHumpbackwhale.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652692487970936/cachedVideo.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652692844494863/video0.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652693406527508/201963c68a7445069aa68f9ba3f600be.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1019652694123761774/xvideos.com_5c772ffe65e4b4cf797d104caa0828f4.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1022930852067414077/video1.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1024792515657859222/SwiftSeagreenOropendula-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1024792516513513523/elincognito_8_1564668471383916545720P.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1024792517167808673/video0_88.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1024792517666934784/SPOILER_xvideos.com_4e368758bbc4f1d62aaa0ab03ca73efd.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1026601610660565023/xvideos.com_5c084e29f275e38b567d9ceef26e4f4f-2.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027643987932237966/Brew.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027643988351668325/fwSO0sULboRXDqJa.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027643988741718036/video_1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027643989714804866/Creampie.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027645875515838464/sentones2.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027645876727992401/sentones1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027645877369712640/sentones6.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027645878019833917/sentones4.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1027645878783201310/sentones3.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1029494772085309480/VID_20220430_014111_544.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1029494772458586253/4ea59d0b2cf769ecd439e2d3239e0307.webm",
        "https://cdn.discordapp.com/attachments/996995158316945459/1029494772865441812/1a110a34-3aba-4b3a-baef-c92a4674e9dc.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1029494773331017888/video5.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033110598189326476/elincognito_8_1544911286688956416720P.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033110598625530008/video-redfans_org-16565237070040.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033110599011401868/xvideos.com_48fa27a5bcd0ea88db3d37258e2c07c2.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033110599565058048/xvideos.com_c85984dfad28a7a541b30c5ca87e870d-1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033110600122908682/elincognito_8_1538378982361530369720P.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456356507791390/98281_TGER.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456356985933904/RPReplay_Final1658377603-1.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456357430534194/zyoyqdqP1sf_pVdv.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456357849976882/VID_20220527_105645_910.mp4-1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456358353289307/videozip_2848.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456358877569124/softdaddy_1429653447410868227540P.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456363029925909/video0-28.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456363503878184/random146.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456364154011740/received_249117743003086.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456408521343087/trim.A384F198-06F0-4226-86AE-2BED1AC9943F.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456408949182584/8C23F599-2546-4BF3-90D9-450641FC6146-45844-0000079784AE72F5.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456409720922274/gMm1YbCM_WuaiCsF.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456410266185748/PhatAss.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456410824020008/BlackandwhiteAvariciousCopepod.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456411537068082/RPReplay_Final1658377655.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456412057145466/Latina.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456412543696976/OvalDrearyStork-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456413088960704/PaltryLimpingHydatidtapeworm-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1033456413785202738/lewdynude_720x720_1512994124709957632.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1034215030083829891/twitter_20210412_100411.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1034215030759116880/1665534673766.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759525170106378/VID_20220824_132230_131.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759525627265094/VID_20220805_213859_492.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759528177414215/JyvTYKB.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759528752029786/ButteryPuzzledHammerheadbird.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759529276325958/KookySomeTrumpeterswan-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759529775444198/video0_88.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759530152927385/5019818472595522161.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759530576560138/VID-20210507-WA0011.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759531046314104/received_359311272627770_1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759531679662110/1621928784294_1.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759532174581760/33422e9cf97b2e310cfd4ac91e81f739.mp4",
        "https://cdn.discordapp.com/attachments/996995158316945459/1036759532635963433/VID_86510907_093918_158.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Sentones \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
