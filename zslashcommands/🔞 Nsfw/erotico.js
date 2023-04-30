const Discord = require ('discord.js')

module.exports = {
    name: "erotico",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!erotico",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996534892814934137/1010300953838227558/FB_IMG_16485890289880457.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300954215723120/Tumblr_l_102449862923964.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300954559647804/Tumblr_l_102458449698361.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300954928750722/Tumblr_l_146351657541499.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300955323019264/Tumblr_l_146353692400395.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300955717275720/Tumblr_l_146355221913548.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300956048621698/Tumblr_l_146357545088242.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300956434509935/Tumblr_l_146359884181861.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010300956883304478/Tumblr_l_146361830064440.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301045479571506/NORAMAKIMLEN_25.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301045848690728/NORAMAKIMLEN_19.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301046469435483/ABMAKIM_16.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301046888857640/ABMAKIM_38.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301047350235156/SCMAKIMENFE_19.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301047807422595/SCMAKIMENFE_22.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301048117805257/ABMAKIMON_25.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301048407199845/AKEMMAKIMLEN_6.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301048692420688/FB_IMG_1656300309932.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301049011191978/Tumblr_l_146349373188348.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301135741014056/2021-03-07_2315x2444_97f35479cb52d2b6d17d5440e4f393ac-zhErYhxo.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301136156246076/2316x3088_27c71090e063ab25f06a592e2daf56fb.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301136516943882/20201126_233859.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301136902836234/Genshin_18.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301137234165861/Genshin_21.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301137649405992/Genshin_23.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301138295345182/Genshin_25.jpg",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301183900012624/194012df230073946a8c0754923daf15b6c40dd0.mp4",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301184445255760/WAjHg46.mp4",
        "https://cdn.discordapp.com/attachments/996534892814934137/1010301185045057647/DefiniteWavyBlowfish-mobile.mov",

        ]

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Erotico \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
