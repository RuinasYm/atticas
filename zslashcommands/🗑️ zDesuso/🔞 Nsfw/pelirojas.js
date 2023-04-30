const Discord = require ('discord.js')

module.exports = {
    name: "pelirojas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!pelirojas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996590671765514/1001932304467382302/received_1374982802846685.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1001932305037799565/HotpinkHardAnglerfish.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1001932305474002984/VID-20200708-WA0051.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1001932305897631785/trim.72EAC2D1-49CD-46AA-9FEC-96D61AFB2CA4.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1029497548135747624/240P_400K_3580390122.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1033475496945668116/VID_156081224_060941_540.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760401536368730/SPOILER_piper_fawn_-_Redhead_Redhead_Tits_Porn_4.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760401968377886/MoistHardAmericankestrel-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760402404589638/WindingInfamousMurrelet-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760402949845032/PinkHeftyCuscus-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760403436376164/ForsakenDevotedKodiakbear-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760404044558387/ArtisticChocolateTasmaniantiger-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760404552060968/BigStaidKiskadee-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760405072166912/DampInstructiveViceroybutterfly.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760405516759040/PeachpuffWarmBrownbear.mov",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760405999108126/VID-20210328-WA0463.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760403809681529/hAht34OI_480p.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760404313002106/9t1V1WzN_480p.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760404757581905/VID_20220809_203123_301.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760405239939182/PoisedBoilingFlyinglemur-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760405709705286/SHE_DANCES_WHILE_TAKING_OFF_HER_CLOTHESMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760406187839508/18_YEARS_OLD_GIRL_DANCES_NAKED_SHOWING_HER_HUGE_TITSMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996996590671765514/1036760406762471464/VID_20210908_221547_897.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Pelirojas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
