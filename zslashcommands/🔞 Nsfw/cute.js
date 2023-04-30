const Discord = require ('discord.js')

module.exports = {
    name: "cute",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!cute",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996531484045348947/1000473331226661004/unknown.png",
        "https://cdn.discordapp.com/attachments/996531484045348947/1000475242772303993/unknown.png",
        "https://cdn.discordapp.com/attachments/996531484045348947/1000475385798086716/unknown.png",
        "https://cdn.discordapp.com/attachments/996531484045348947/1010265892233433098/VID_20220706_032145_917.mp4",
        "https://cdn.discordapp.com/attachments/996531484045348947/1010265892602523708/-1384628085641104548.mp4",
        "https://cdn.discordapp.com/attachments/996531484045348947/1036753107947896873/VID_20220207_100642_224.mp4",
        "https://cdn.discordapp.com/attachments/996531484045348947/1036753108363128942/VID_20220803_133604_242.mp4",
        "https://cdn.discordapp.com/attachments/996531484045348947/1036753109399117824/70bcc8eb_554-0.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Cute \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
