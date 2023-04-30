const Discord = require ('discord.js')
const db = require("quick.db")
module.exports = {
    name: "bsdm",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!bsdm",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802797808914472/1001919437458378772/VID_20211112_125651_604.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1009939126860124351/VID_20210724_021147_241.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1009939127719964672/3D468.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1009939128344924311/femdomsplz.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1009939128873390210/video0.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1009939129712246924/VID-20201023-WA0163.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1026603216277868544/Handdom.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1026603217267732500/trim.F4BF0210-C34F-4E19-84D7-A13C89A7D0EB.mov",
        "https://cdn.discordapp.com/attachments/996802797808914472/1026603218400202782/twitter_20220912_002603.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1026603219356491837/1656556522162.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1026603220874842232/uPjacQieEEnKQ5hF.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1026603225706680452/KatieLuvsDick_640x1138_1512594982737121281.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1026603225706680452/KatieLuvsDick_640x1138_1512594982737121281.mp4",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919184323739668/unknown.png",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919233929777153/unknown.png",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919270353125376/unknown.png",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919270353125376/unknown.png",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919403811672154/unknown.png",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919403811672154/unknown.png",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919548578070669/unknown.png",
        "https://cdn.discordapp.com/attachments/996802797808914472/1001919610385354882/unknown.png",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Bsdm \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
}