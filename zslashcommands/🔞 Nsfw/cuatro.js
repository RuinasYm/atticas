const Discord = require ('discord.js')

module.exports = {
    name: "cuatro",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!cuatro",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996995784698515506/1001899058996187186/VID_20220430_014132_693.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1001899059562426408/xl2YAIw.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1009944732132192286/UniqueAwkwardAmericancicada_1.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1009944732555825204/HiddenEsteemedPurplemarten.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1009944733017186374/bCmLNWv.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1009944733604380752/22XiuMQ.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1009944734170619974/KatieLuvsDick_640x1138_1512594982737121281.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1009944734728466522/video_2.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1022930919142731786/trim.26F4B218-B0EC-4657-ADA4-CE2247D94F52.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1022930919612497960/dog_2.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1022930920019341392/1113418.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1027646065404559522/perrito1.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1027646065815597066/perrito2.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1027646066398605404/perrito3.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1027646066805440542/perrito4.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1034215271994503188/1662401844685814.webm",
        "https://cdn.discordapp.com/attachments/996995784698515506/1034215273269579806/IMG_6541.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1034215273852583976/973ef29f9b2e143d2e5f2331dd9f0fcf.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1034215274448171068/1665534092483.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760045549006909/cachedVideo.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760045972635688/VID_20220601_000458_208.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760046438207640/xvideos.com_9dc470d2cf19a3af3f3f412dc5a1073d.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760046840856637/xvideos.com_2562107ebaa3dcdd2da99aaf6e52b658.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760047184785438/1113418.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760047553892392/NaiveFamiliarMetamorphosis-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760047864266854/VID_20220612_000708_796.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760048308858942/trim.4C7DFCAC-3732-4DCD-BE78-559A7D314738.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760048669577266/1622909299528-1.webm",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760060405219348/ssstwitter_1656456055.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760060916932658/SoreUnfinishedCamel-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760061306994728/BluevioletSickXuanhuasaurus-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760061952929813/DesertedElementaryIceblueredtopzebra-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760062531731496/G2qJouR_-_Imgur.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760063135723580/0h2u7umg092swdl0mywsa_720p.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760064867958844/agileresponsibleamericanshorthair.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760062447865916/CoolGrouchyLeveret-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760062938587156/1-6.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760063437721730/1-7.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760063915860068/1-8.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760064469504110/VID_20220420_211908_223.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760064872161340/video-1659851449.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760065446793216/video0-77.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760065912348712/DefinitiveLightgreyCaudata-mobile.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760066373718076/0zYjYaf.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1036760066767998976/Flp0iu1.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1038558326801309706/VirtualCaringTerrapin-2.mp4-1.mp4.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704552043954278/roma.amor-1.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704552480149544/972508.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704552840876032/1121530.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704553239318688/1040535.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704553700708392/1123793.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704554111733782/1115310.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704554464071851/1084216.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704554963189861/1089948.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704555479077004/1080974.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704556007571526/video0_3_1.mov",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704568573693993/1137967.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704568909254766/qzNmv_MEWW8QiVD2.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704569232203786/1135250.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704569563566090/1137166.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704568649195640/1egAwIEFggSGnE3d.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704568993124372/1125608.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704569358045194/1125496.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704569760686161/1129945.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704570566004897/1115319.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704570138169394/1040552.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704571065110649/1115947.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704571581026446/1040550.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704572138852402/1126185.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704573107736616/1128378.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704573552337018/1123060.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704573959180409/1128217.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704574298923169/1091781.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704574647054456/1130121.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704575016144956/943374.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704575364276335/1123111.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704575766933595/1126811.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704572851884072/1133337.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704573262929920/1128970.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704573627830312/1127238.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704573971775669/qUbH1tsVO_OthMgS.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704574366031922/RGgDpbWwbwFlfmSB.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704574814818394/ox0VrAKJY0D7H0tv.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704575309758617/ingwWBNr8UrrRKIV.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704575733375067/1089507.mp4",
        "https://cdn.discordapp.com/attachments/996995784698515506/1052704576366710874/1132480.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Cuatro \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
