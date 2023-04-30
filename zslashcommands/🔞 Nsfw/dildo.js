const Discord = require ('discord.js')

module.exports = {
    name: "dildo",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!dildo",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802489665982536/1027645298098577538/Snapchat-487890997.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645298585124934/rQSVQ1y-BLVliacX.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645299029717112/VID_27480604_163838_853.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645299444949002/VID_20211027_011822_2792.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645299860193331/video0_17.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645300250259516/b41f5efc66693cfd288c8f6adecfbd13.webm",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645300791328899/redditsave.com_DASH_1080_2.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645301311422516/cee5c2_8185336_1.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645301776986212/cyphub11.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645302439690300/98ae9ae81f7bd8c74ef4cf935c02535d.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645338321952838/1662073713753755.webm",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645338904956989/izy-11.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645339437637652/hjaskc.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645340045811822/7ol0By68gQ1Xpw7j.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1027645340574294117/blondpeche_6.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1029499219813351525/trim.DB47DC35-01F5-4847-AA00-3947CA3959FA.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1029499220392153158/DASH_1080-13.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1029499220748681257/aTMx-_4FuRvdRl3p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1033107958436995122/lv_0_20221016204026.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1033107958990639214/lv_0_20221016204621.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759151642161182/video0-1-1.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759152019640381/paJJgZYX_480p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759152673947648/xRRXYUOZ_720p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759153097584712/YlpG6ZQr_720p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759153605083196/h6zfh7Kv_480p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759154045497393/TeensBluevioletEveryCottonmouth.mp4.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759154527834182/VID_20220525_204151_470-1.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759154985009262/5373511834937380948.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759155404451840/xh.toys.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759155886788668/BareFirsthandMice-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759247725277244/1-13.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759248169861130/MedicalTwinFlyingfox-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759248589299723/LawfulAdorableAidi-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759249004539995/KcegRQNK_720p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759249411375114/CompetentSpottedHamadryad-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759249793064980/1-12.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759253081403423/35628122a.webm",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759253475676221/OccasionalAlienatedEarwig-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759253949616218/1095555.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759254356471889/LmRhurH6_720p-1.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759254901739613/VID_20220221_004710.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759256004825159/YouCut_20220209_185600977.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759256449437706/DentalAdorableAfricanwildcat-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759257003077713/gxqaVLjC_720p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759257439277186/voOMgW9J_720p.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1036759257833549824/VID_20220219_183951_824.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1043983781113114735/video0-3.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1043983781465432095/VID_20221116_122205_125.mp4",
        "https://cdn.discordapp.com/attachments/996802489665982536/1043983781868081162/VID_20221115_125456_523.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Dildo \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
