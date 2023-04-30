const Discord = require ('discord.js')
const db = require("quick.db")
module.exports = {
    name: "pies",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!pies",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args){

        const nopremium = db.get(`premium_${message.author.id}`);
        let e = new Discord.MessageEmbed()
        if (nopremium !== true) {
    
          message.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Este comando solo esta disponible para **Boosters**.\nBoostea este servidor para obtener acceso a los comandos [**premium**](https://docs.clubatticus.ml/)`).setAuthor(`Premium`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png").setColor("e60ad4")], ephemeral: true })
    
      } else {

            if (!message.channel.nsfw) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Este comando solo funciona en canales Nsfw! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
    })

        const contenidos = ["https://cdn.discordapp.com/attachments/996532130165313537/1010273709233279096/Only-mega-packs_43.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273709614956664/IMG_20220629_180223_476.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273709925347448/IMG_20220806_150747_846.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273710273478743/pakpd51joj6v-1.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273710625792061/unknown-9.png",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273711011680256/IMG_20220405_110722_758.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273711347220581/IMG_20220516_054848.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273711665979412/IMG_20220803_230728_953.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273712056062082/IMG_20220803_230721_892.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273712521617478/1641707356537.webm",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273812639662170/RDT_20211102_2036207273235218044289788.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273814145417306/VID_20220616_232434_208.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273813734379541/VID_20220616_231822_726.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273814527086602/VID_20220617_001837_560.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273814929743952/VID_20220605_132624_539.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273815508561920/VID_20220605_132617_403.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273815827316787/e86nP1n.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273859905277983/Captura_de_Pantalla_2022-05-06_a_las_23.01.59.png",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273860446339202/rqyk7fj0qy761.jpg",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273861016756315/DarkredCriticalClumber-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273868822351902/BlueBrokenBallpython-mobile1.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273869279547463/VID_20220210_190138_636.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1010273869279547463/VID_20220210_190138_636.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1019308300510183464/ssstik.io_1658732681690.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1019308301143511091/AquaOtherNorthernpike-mobile1.mov",
        "https://cdn.discordapp.com/attachments/996532130165313537/1019308301944619148/VID_20211114_122640.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1019308302347288677/video_2022-04-30_22-38-12-2.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1019308302947069962/GoldenVelvetyGreatwhiteshark.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1029493984722161665/xKZL9ZN.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1033106593774043208/Destiny___on_Instagram___Suplex_max__COPmSW4DSyK_0MP4-1.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1033106594218655806/1_5010789454906917361.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1033455822161846323/twitter_20220928_175617.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1036755092646404187/VID_20221010_183817_373.mp4",
        "https://cdn.discordapp.com/attachments/996532130165313537/1036755093070041149/RapidColdRainbowlorikeet-mobile.mov",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Cuerpo - Pies \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}
}
}
