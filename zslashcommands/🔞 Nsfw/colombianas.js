const Discord = require ('discord.js')

module.exports = {
    name: "colombianas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!colombianas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996997683367661648/997197117196091442/unknown.png",
        "https://cdn.discordapp.com/attachments/996997683367661648/997197266924359810/unknown.png",
        "https://cdn.discordapp.com/attachments/996997683367661648/997197312789061673/unknown.png",
        "https://cdn.discordapp.com/attachments/996997683367661648/997197336671432855/unknown.png",
        "https://cdn.discordapp.com/attachments/996997683367661648/997197385635733534/unknown.png",
        "https://cdn.discordapp.com/attachments/971439364246732861/983140052576133180/2WQdqKrD_o.gif",
        "https://cdn.discordapp.com/attachments/971439364246732861/983140171727904818/gspx_jugando-con-nuestra-amiga-de-intercambio-colombiana-2.gif",
        "https://realbooru.com/images/56/fc/56fcdbcf90f1d8391f4ff06d2a74d8ae.webm",
        "https://realbooru.com/images/95/0b/950bfc19ad77b94a04bd2d3228e1a7fa.webm",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Colombianas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
