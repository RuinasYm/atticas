const Discord = require ('discord.js')
const db = require("quick.db")
module.exports = {
    name: "sexmachine",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!sexmachine",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802665038221423/1001918498060116058/unknown.png",
        "https://cdn.discordapp.com/attachments/996802665038221423/1001918529043451904/unknown.png",
        "https://cdn.discordapp.com/attachments/996802665038221423/1001918553055838218/unknown.png",
        "https://cdn.discordapp.com/attachments/996802665038221423/1001918578225840158/unknown.png",
        "https://cdn.discordapp.com/attachments/996802665038221423/1001918608676495430/unknown.png",
        "https://cdn.discordapp.com/attachments/996802665038221423/1001918674581606501/unknown.png",
        "https://cdn.discordapp.com/attachments/996802665038221423/1001918869218263080/xvideos.com_49ddefb505db4c36fa10f811b02b8bab.mp4",
        "https://cdn.discordapp.com/attachments/996802665038221423/1033451347753832528/IMG_20210827_112147_807.mp4",
        "https://cdn.discordapp.com/attachments/996802665038221423/1041823829036630036/HMSspT8pD_2WslWk_2.mp4",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Sex_Machine \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
}