const Discord = require ('discord.js')

module.exports = {
    name: "creampie",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!creampie",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996532799026757742/1010284008359333898/IdolizedWhimsicalAlaskajingle-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284008841687040/BuoyantCuddlyPupa-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284009550512209/FickleWildAmericanriverotter.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284010007699536/WingedMajesticLobo.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284010758471880/Filling.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284011542810624/video2.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284012071288832/InstructiveTintedAmethystinepython-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284012562026536/HairySuddenYucker-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284013002436678/bzcilGd.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284013522522152/DearWhirlwindHairstreak-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284169940713573/BuoyantIndolentPenguin-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284170326581258/TheseEsteemedBuzzard.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284172419530782/DarkvioletLegalVixen-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284172864143400/KeyGrippingMeerkat-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284173342298172/StingyFormalNandu-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284173761708202/2oeqn0k46tz71.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284174176960672/DemandingWastefulRaccoon-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284174575411280/WholeUnwelcomeWren-mobile_2.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284174969679943/DeafeningDiligentArgali-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284175397503016/BelatedSpitefulFrilledlizard-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284290430468167/LinearVacantTayra.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284290950570004/HungryUnawareQuetzalcoatlus-1.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284291592306688/1615618540034.webm",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284292011720714/EnergeticNauticalRockrat-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284292557000715/GiganticVariableIndianelephant-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284293098053784/FumblingEvenAfricanhornbill-mobile-1.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284293613961297/OccasionalLeanAlaskajingle.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284294171787334/BrownNavyblueVole.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284294608007198/SecondBuoyantCony.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284294977110119/SweatyDirectBluegill-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284616944472205/video0-39.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284617573605467/IMG_20210730_225835_589.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284618253078679/MadeupLinenInexpectatumpleco.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284618945142805/RepentantUnfortunateAmericanredsquirrel.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284619830140968/PleasantSiennaNoddy.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284620295700611/riG9AAM.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284620962598912/video0-69.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284621826637854/2trNthM.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284622308978718/VID_20220609_152920_988.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284719511969842/VID-20210927-WA0005-1.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284719897854012/1639028326378-1.webm",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284720325664858/WholeUnwelcomeWren-mobile_1.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284721101602886/cream_a_weeb.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284721453940857/VID_20211203_121520_070.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284721814655036/VID_20211026_200615_240.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284722372477059/RadiantCompetentEchidna-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284722963878060/25291821a.webm",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010284723421052949/19385441a.webm",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285143753240586/8woo0ZDVB9PtvYUo.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285144256561162/AuthenticStarkGibbon-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285144764055592/Komal_-_Komal25491398.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285145141547089/crampies_14.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285145552584764/filling-her-up-apxzsjfeom.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285146022355074/1ODiAHZ-1.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285146982858812/1_4938588623709667685.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285147389689876/wodebao123_1478412497942106113720P.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285147863654521/video0-19_1-1.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285148266315907/1650082472695.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1010285180243677254/PertinentPrudentAzurevase-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452462373347409/OfficialVariableRoach_1.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452462880866474/FixedAdvancedDrongo.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452463405150268/SweatyDirectBluegill-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452466416656536/203f5189-c8a1-43a8-8e6f-310c7812f9c1-2.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452467112915026/received_5251906794845105.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452509341171822/1654930876740.webm",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452514571472947/BuoyantJuniorRat-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452515221569746/VID_20220502_001958_8830.mp4.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452515615850526/Kv8CRoP.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452516177875145/video0-1.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452517058686986/1ODiAHZ-1.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452517515853985/75058be33bbf2fcf3b0635a7204fa629.webm",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452518098870364/video0-26.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452518858031194/ssstwitter_1657771475.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1033452519462019082/1654747470029.webm",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755843628150854/1095393.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755844068540496/video0_1-1.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755844446031922/RadiantCompetentEchidna-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755844878053416/VID_20211026_200615_240.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755845221974196/WholeUnwelcomeWren-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755845976961145/VID-20220903-WA0009.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755846408962098/OfficialVariableRoach_1.mp4",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755846782259200/viddit_4b254238.mp4.mov",
        "https://cdn.discordapp.com/attachments/996532799026757742/1036755847218475078/1665374078199731.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fluidos - Creample \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
