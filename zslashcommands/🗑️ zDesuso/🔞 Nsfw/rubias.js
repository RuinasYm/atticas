const Discord = require ('discord.js')

module.exports = {
    name: "rubias",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!rubias",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996795970363482/1029497992757121106/RewardingStandardChimpanzee-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497993159774258/SnowPrudentTaruca-mobile.mov",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497993528869014/VID_20220227_001906_917.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497994036392117/yfl8JEBqSmxj.webm",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497994443231242/Thv6CZGvhc4i-1.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497994929778748/4299217718129644884.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497995286286356/OryMZovURkC9.webm",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497995646996580/ZEGXrm7a16t0.webm",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497996070617210/qgLHbVNivGOU.webm",
        "https://cdn.discordapp.com/attachments/996996795970363482/1029497996536188928/QUtOGtRkT4QL.webm",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761134012825720/hvFV1mM.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761134541324418/VID_20220618_023704_991.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761135061401610/VID-20220507-WA0003.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761135417921566/trim.0B4CD71C-1126-4097-A0AB-6BE5DC9954EF.mov",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761135933816852/d172599d465dd4b1ffcf36c33f1d2187.webm",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761136441331773/video0-9-1.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761137007558796/VID_20220616_003758_585.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761137456365639/video0-1.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761137997414441/Girl_shows_tits__HD_-1.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761138517512212/viddit_5ed30463.mov",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761157727424594/DRr0oCTH_720p.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761158155251742/bQFaZThR_720p.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761158637592737/Snapchat-1082268412.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761159119941703/VID_20220419_182157_108.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761159635836998/random2.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761160042688512/Preview_2.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761160424362004/brazzers.amateur.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761160818634752/VID_20211024_030946.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761161242251284/2jMWeV1t_480p.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761165843402752/v8zetS7.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761166610968576/gGgeYFHm_720p.mp4",
        "https://cdn.discordapp.com/attachments/996996795970363482/1036761167252688906/muslos._-16082022-0003.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Rubias \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
