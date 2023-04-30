const Discord = require ('discord.js')
const db = require("quick.db")
module.exports = {
    name: "masoquista",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!masoquista",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996532989913739364/1010289118653190154/RDT_20220403_1644097308985842779475839.jpg",
        "https://cdn.discordapp.com/attachments/996532989913739364/1010289118988738571/RDT_20220403_1644285323120922429970192.jpg.jpg",
        "https://cdn.discordapp.com/attachments/996532989913739364/1010289118988738571/RDT_20220403_1644285323120922429970192.jpg.jpg",
        "https://cdn.discordapp.com/attachments/996532989913739364/1010289276195446864/czxW_gWtQMoeEpEy.mp4",
        "https://cdn.discordapp.com/attachments/996532989913739364/1010289436157808660/UnsightlyDroopySolitaire-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532989913739364/1010289436656926781/3D468L4837872.mp4",
        "https://cdn.discordapp.com/attachments/996532989913739364/1043983382318698637/IMG_20221113_153306.jpg",
        "https://cdn.discordapp.com/attachments/996532989913739364/1043983382637449286/bondage-and-slapping-xxx-gif_001.gif",
        "https://cdn.discordapp.com/attachments/996532989913739364/1043983382960406558/IMG_7473.jpg",
        "https://cdn.discordapp.com/attachments/996532989913739364/1043983383258222592/IMG_7477.jpg",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Masoquista \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);}
}

}
