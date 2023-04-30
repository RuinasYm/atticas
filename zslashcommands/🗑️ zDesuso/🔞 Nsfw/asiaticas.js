const Discord = require ('discord.js')
const db = require("quick.db")
module.exports = {
    name: "asiaticas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!asiaticas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996997544162897930/1001933277436842034/xvideos.com_8386c79d7652160e97b6762bc5c8689d_1.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1001933277826916372/video0-2.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1001933278279913632/video0_1-6.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1001933278711918762/abang_kandung_tega_ngentot_adek_sendiri_sampai_crot_dalam_Free_xnxx_xvideos_download_-_Xnxx.Kingxxx.pro.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1001933279143927828/xvideos.com_225f561d952ffeac2382c72ed4bb8f6d-1.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1001933279517216848/Porntube_Asian.mp4",
        "https://media.discordapp.net/attachments/904565475206385685/921288577420259349/1495943489985.webm",
        "https://cdn.discordapp.com/attachments/996997544162897930/1019310632593522808/video0.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1019310662335352832/59704d4352b60dd4ccafe14da8327339c6c7c465.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1019310663287455744/hhd800comIPX-659_5.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1019310666265415720/1_5125626718509335006-1.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1019310667058118758/VID_20220523_131647_037.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1019310667733409802/Bosomy_Mom.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1021804232019562588/360_X_640_.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1029497136884240524/video_2022-04-13_20-38-42.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1029497137370767380/video_2022-03-22_09-07-36.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1029497140331954247/video_2022-05-25_22-13-35.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1029497140864622602/xvideos.com_bfd399cd0cab206653bd80a4bb3b7fd0.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1029497141334384650/video_2022-03-20_18-14-15.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033475278648901632/bujianxk91_1578427604511514638360P.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478856998387772/video0-1.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478857463967825/twitter_20221003_075138.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478857946304572/1664214226345000.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478858344759316/sejinluv-vivluv.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478858726449152/RuddyPastJackrabbit-mobile.mov",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478859502407750/DentalLavenderPolyp.mov",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478859946983474/video_2022-10-01_22-35-31.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478860437721168/video0_16.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1033478860924264468/PoorTenseAsiaticlesserfreshwaterclam-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760795616391308/video0_5.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760796207779870/8WaBV_-e0FFCQjXy.mov",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760796572692571/1664982047997137.webm",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760796929196063/41c985_9714957.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760797407350794/1_5086875307361698368-1.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760797847760936/Brazzers-1-1.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760798351077396/bc9583100fb172925085b63b2b6e3c40.0.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1036760799106044025/1611128584035-1.webm",
        "https://cdn.discordapp.com/attachments/996997544162897930/1040692960309813348/atatnsfw_masturbation8.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1040692960787955893/HentaiHome_CosplayStudentAsian.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1040692961224183858/nigga-1.mp4",
        "https://cdn.discordapp.com/attachments/996997544162897930/1040692961828151427/Brazzers_asia_4.webm",
        "https://cdn.discordapp.com/attachments/996997544162897930/1040692962197241958/SkeletalGlitteringHalcyon-mobile.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Asiaticas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}
}
}
