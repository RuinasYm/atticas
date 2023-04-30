const Discord = require ('discord.js')

module.exports = {
    name: "squirt",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!squirt",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/1033108310154543184/1033108719766089798/video0-2-3-1.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108720286171278/video0-27.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108720940499044/SomeGranularToad.mov",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108721464774738/MediumslateblueMushyThrasher.mov",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108721963900948/NauticalCrazyGopher.mov",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108722567888917/video0-1-1-1-1-1.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108723494821959/video0-4.mov",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108723993952307/VID_20220507_053445_577.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108724585341059/4_5996848125694708664.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108725243854858/VID_20220507_053451_866.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108762917081088/naughty_love216_1541458387736592385320P.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033108763726577814/dfhsdfhdh.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033449364401700914/xvideos.com_6b89e71887ddcdde0af545e215f0b1af.mp4",
        "https://cdn.discordapp.com/attachments/1033108310154543184/1033449364909195335/SPOILER_Uwu454974402974901.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fluidos - Squirt \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
