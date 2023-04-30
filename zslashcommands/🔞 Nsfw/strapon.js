const Discord = require ('discord.js')
const db = require("quick.db")
module.exports = {
    name: "strapon",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!strapon",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802231846314084/1001915769824759909/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001915792943759360/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001915821817339966/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001915868520919140/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001915899370024981/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001915940021219348/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001915967208689804/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001916048221687868/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001916105184522260/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001916175145521194/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001916229449166888/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001916309132558386/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1001916353797705778/unknown.png",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264350314995802/AwfulFlippantWoodstorks-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264350818320494/FruitfulMarriedDassierat-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264351262920804/MisguidedWillingHoiho-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264351632011375/ImmaterialNegativeAnkolewatusi-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264352068223109/EveryFloralwhitePtarmigan-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264352563146802/CulturedNotedRatfish-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264353037111316/MedicalPeachpuffVireo-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264353427173486/PiercingNarrowBream-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264353867567174/BriskEnchantedBovine-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1010264354500915220/DimpledCheapFluke-mobile.mov",
        "https://cdn.discordapp.com/attachments/996802231846314084/1036758794849497128/35505052a.webm",
        "https://cdn.discordapp.com/attachments/996802231846314084/1036758795268923523/30437631a.webm",
        "https://cdn.discordapp.com/attachments/996802231846314084/1036758795600281690/girls_fuck.mp4",
        "https://cdn.discordapp.com/attachments/996802231846314084/1036758796086816818/28cc55415aeef0ed9ef04a00088d2451_1.mp4",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Strap_On \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
}