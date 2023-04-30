const Discord = require ('discord.js')

module.exports = {
    name: "oral",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!oral",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996238526382181/1001900282936049684/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900395393716244/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900426658066442/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900454357245953/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900577741078580/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900633147842590/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900789884801095/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900789884801095/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900927441174668/unknown.png",
        "https://cdn.discordapp.com/attachments/996996238526382181/1001900984936714371/received_1462875727482840.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1009945400880402632/xawAoW4.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1009945401287258162/video0-8.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1009945402151280660/IMG_2350.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1009945401761202338/1_4916101648121594860.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1033451067725328515/blow_j4-1.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1033451068216053981/1118568.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1033451068673245296/SDHp16mLjsBKKuUe.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1034215355226263562/VID-20220416-WA0003.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1042536987317522502/VID_20220712_130430_474.mp4",
        "https://cdn.discordapp.com/attachments/996996238526382181/1042536987833401424/twitter_20220811_160024-1.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Oral \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
