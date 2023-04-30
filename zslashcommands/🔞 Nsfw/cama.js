const Discord = require ('discord.js')

module.exports = {
    name: "cama",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!cama",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996803234423394345/1019306596519653514/Latina.mp4",
        "https://cdn.discordapp.com/attachments/996803234423394345/1019306914519204002/9CXXW1fJY29ofcBU.mp4",
        "https://cdn.discordapp.com/attachments/996803234423394345/1019306914972192818/aqWHGhxQReul0L7q.mp4",
        "https://cdn.discordapp.com/attachments/996803234423394345/1019306915358064720/PwJbrCBrVVAR-Fsk.mp4",
        "https://cdn.discordapp.com/attachments/996803234423394345/1019306915710378044/NgS9ur6UpTIN_ozA.mp4",
        "https://cdn.discordapp.com/attachments/996803234423394345/1023673482850078811/IQaVXTaf5wwKkBnQ.mp4",
        "https://cdn.discordapp.com/attachments/996803234423394345/1027645646292918292/1uno.mp4",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Lugares - Cama \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
