const Discord = require ('discord.js')

module.exports = {
    name: "brincos",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!brincos",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996127775805500/1001899827753386094/jn.mp4",
        "https://cdn.discordapp.com/attachments/996996127775805500/1001899828760031303/1.mp4",
        "https://cdn.discordapp.com/attachments/996996127775805500/1001899829242368101/FinishedUnluckySwift-mobile_1.mp4",
        "https://cdn.discordapp.com/attachments/996996127775805500/1001899829724717207/video0-4-1.mov",
        "https://cdn.discordapp.com/attachments/996996127775805500/1001899830299344987/ATTICUS.mov",
        "https://cdn.discordapp.com/attachments/996996127775805500/1001899831054307419/ATTICUS.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Brincos \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
