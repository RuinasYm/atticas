const Discord = require ('discord.js')

module.exports = {
    name: "footiob",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!footiob",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996326627741726/1033479166282178612/VID_20220917_213625_593.mp4",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479166781292544/VID_20220917_213702_883.mp4",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479167255265300/VID_20220917_214112_434.mp4",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479167657910363/1615970799258.webm",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479168089915492/VID_20220629_105932_621.mp4",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479168467406949/41cb1b4e5eda036b4fa8856befc676a6.webm",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479168878456912/02-20-2022_0841_AM_-_Love_Stroking_His_Throbbing_Cock_With_My_Feet_-_r_footjobs.mov",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479169360809995/VID-20220313-WA0052.mp4",
        "https://cdn.discordapp.com/attachments/996996326627741726/1033479169784418364/twitter_1462993704063578114__1643395037118_Wachen_est_joya_que_encontr_https_t_co_uXgAUaMCHB_640x360.mp4",


    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Footiob \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
