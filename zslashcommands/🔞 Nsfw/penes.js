const Discord = require ('discord.js')

module.exports = {
    name: "penes",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!penes",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996533218801107084/1010291999129210982/9F52941B-C21F-4E7C-8ED4-948DDAA90C3C.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010291999586398348/20220316_191633.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292000177791106/lHFzzK.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292000630771733/20220509_013215.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292001259921409/IMG_20220507_043233610.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292005198377091/20220508_221417.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292005806547004/20220415_234627.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292121258958910/VID_20220509_173451_757.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292121967788162/VID_188730612_204157_815.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292122747932892/JdiB4c6bDd2r5EOQ.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292123171569754/Kahn5MW5mnDKzSUS.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292123708424313/Snapchat-500088664.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292124194975794/Snapchat-1437008643.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292124698288169/Ww9uypcAGE3-rrHA.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292125243543572/video0.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292125839147008/video0-1.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1010292151088840734/descarga.jpg",
        "https://cdn.discordapp.com/attachments/996533218801107084/1029502844589588490/R1_01_2.webm",
        "https://cdn.discordapp.com/attachments/996533218801107084/1029502845390684270/CreepyNuttyBluetonguelizard-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533218801107084/1029502845894000640/video0-1-1.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1029502846418288711/IIafTfFkpObucufX.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1029502846909022228/TjXjuXH6SRZGtggO-1.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1029502847487848488/R_UbRNdRgf3akwWN.mp4",
        "https://cdn.discordapp.com/attachments/996533218801107084/1029502847978569761/blackedgothh_1465318282672623617660P.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Cuerpo - Penes \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}

