const Discord = require ('discord.js')

module.exports = {
    name: "jalondepelo",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!jalondepelo",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996995672056279040/1009943976385724588/f42998187d482640fb89618c4fd31605.mp4-preview-4.jpg",
        "https://cdn.discordapp.com/attachments/996995672056279040/1009944011659804682/xvideos.com_b38cebafc3ccab11fdae4e67359821c7.mp4",
        "https://cdn.discordapp.com/attachments/996995672056279040/1009944012016332911/xvideos.com_6521c213d28966214185f11748962b54_001.mp4",
        "https://cdn.discordapp.com/attachments/996995672056279040/1009944012460925108/xvideos.com_955f24893307f348c983da0e5bb94540-1_001.mp4",
    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Jalon_de_pelo \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
