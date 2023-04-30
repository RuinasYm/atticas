const Discord = require ('discord.js')

module.exports = {
    name: "bondag3",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!bondag3",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996535264065376386/1010304956454154340/xvideos.com_33706590170e25cd7cd449a951df51d8.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010304956810678293/FB_IMG_16496484504134608.jpg",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010304957225893990/mzhrFQQKtaHirGHz.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010304957641142462/received_851059352282980.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010304958085742713/PaleMatureDouglasfirbarkbeetle-mobile1.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010304958463221780/image2-2.jpg",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010304958819741740/9adbeffbdaec9524e7fbfd2e82d91650-1.webm",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010304959281119443/image7.jpg",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010305111060389898/VID_20220402_183939_808.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010305111718895666/VID_20220402_183430_034_001_001_001.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010305112247382066/VID_20220402_183219_423_001.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010305112993976350/VID_20220402_190440_771.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010305113606340638/VID_20220402_183744_978_001_001_001_001.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1010305114206109696/twitter_20220314_165702.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1029503203332608131/waifumiia_onlyfans_day_club_on_tg_000101.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1029503203928199298/bQ6M7ej.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1029503204276314163/ItchyStimulatingSkylark-mobile.mov",
        "https://cdn.discordapp.com/attachments/996535264065376386/1029503204716716142/UnawareHardtofindGermanshepherd-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1029503205136158841/HonoredInconsequentialBighornedsheep-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996535264065376386/1029503205501050970/RawUnsungBighornedsheep-mobile.mov",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Bondag3 \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}

