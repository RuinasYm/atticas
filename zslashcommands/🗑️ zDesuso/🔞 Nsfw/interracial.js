const Discord = require ('discord.js')
const db = require("quick.db")
module.exports = {
    name: "interracial",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!interracial",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/1036761524200550520/1037795403397079182/NivKVDGfRr-xd0-I.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795403871027210/GiftedAnimatedErin-mobile.mov",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795404319838278/SizzlingSphericalHare-mobile.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795404856688710/1-2.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795405297098782/video0-20.mov",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795405708132393/SophisticatedLavenderblushApatosaur-mobile.mov",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795406362451988/NJ2Unjw.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795406815449148/1644632189745.webm",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795407314559006/AnimatedWoozyAmericanalligator-mobile.mov",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795407767535817/st.coqJ6M2Ea5T4.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795427799535656/xvideos.com_5d441c3ca7c89a32bdf947929ea4bc11-1.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795428189614170/1456712729545396225.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795428650979389/VaZ8Nzn3ozUgX7pM.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795429083009145/trim.557A6D28-517B-4F12-BE64-1B75569984F1.mov",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795429556957234/ZgHBivusAvddu-KQ.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795430077059103/c4aDU2qTJnsPonh-.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795430647476254/trim.DDD43BBA-45DC-4889-B0E3-7410D5558724.mov",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795458753503273/1eb78ce4-750f-43c6-b2e3-adcf29c9b2e0.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795459235860550/e168d809-ebfe-47fe-8b34-ae46fd371a10.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795459676241982/video0-1-18.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795460317978674/9536612a.webm",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795460854841425/23507091a.webm",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795461249114122/21882342a.webm",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795461660168312/twitter_20220103_133310.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795462297681990/BraveWaterloggedIchidna-mobile.mp4",
        "https://cdn.discordapp.com/attachments/1036761524200550520/1037795462658400286/IMG_6803.TRIM.mov",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Interracial \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}
}
}
