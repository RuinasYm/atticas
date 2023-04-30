const Discord = require ('discord.js')

module.exports = {
    name: "goldenrain",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!goldenrain",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996535369208180839/1010305426279116902/xvideos.com_fbf1a8124d7a5539132c5371ffc671f9-1.mp4",
        "https://cdn.discordapp.com/attachments/996535369208180839/1010305728126402711/xvideos.com_21c6f2153707bf93384ec80b30f044f1.mp4",
        "https://cdn.discordapp.com/attachments/996535369208180839/1010305728650674256/xvideos.com_89d2c0ccf35c8f5fdfbb23c7076204bb.mp4",
        "https://cdn.discordapp.com/attachments/996535369208180839/1010305729317572648/xvideos.com_0cd060b3d04079cad31b32c571c7cf79.mp4",
        "https://cdn.discordapp.com/attachments/996535369208180839/1010306144742420542/402571.jpg",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Golden_Rain \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
