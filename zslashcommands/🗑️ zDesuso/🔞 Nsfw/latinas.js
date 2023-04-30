const Discord = require ('discord.js')

module.exports = {
    name: "latinas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!latinas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996903822708756/997197892584485106/unknown.png",
        "https://cdn.discordapp.com/attachments/996996903822708756/997197920304631808/unknown.png",
        "https://cdn.discordapp.com/attachments/996996903822708756/997197954047811814/unknown.png",
        "https://cdn.discordapp.com/attachments/996996903822708756/997197992119509012/unknown.png",
        "https://cdn.discordapp.com/attachments/996996903822708756/997198086164197406/unknown.png",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Latinas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
