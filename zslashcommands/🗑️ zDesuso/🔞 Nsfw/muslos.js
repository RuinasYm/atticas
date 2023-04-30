const Discord = require ('discord.js')

module.exports = {
    name: "muslos",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!muslos",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996532523930755143/1010277251054583830/GiantHumiliatingFly.mov",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277251432067072/Snaptik_6919604168621690118_momoowo.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277253940269198/VID_20211122_195534.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277254288392192/ssstiktok_1643051350.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277427471200296/trim.45774D74-2BFA-4BBD-8040-5ED67CA7EADC.mov",
        "https://cdn.discordapp.com/attachments/996532523930755143/1024790924443783199/tumblr_qzn01iDvtz1z2c5ea.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1033455703593070602/e-VYu25PBc_0IdBn.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1033455705346298017/videoplayback_7.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1033455704083800094/lv_0_20220326172146.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1033455705769906246/I5EQ1FYs85qGNgXo_1.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1036755531601281144/VID_20220201_050331_553.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1036755532003942450/VID-20211013-WA0011-1.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1036755532532437052/ssstiktok_1643050853.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1036755533115433071/video_20220131_173423.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1036755533853642803/VID_301700114_042501_360.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1036755534289829918/4DqWaVq.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1040693721605357618/ReflectingLiveSquirrel.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1040693721945083974/RealisticDisfiguredAnhinga-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1045405550713782403/trim.45774D74-2BFA-4BBD-8040-5ED67CA7EADC.mov",
        "https://cdn.discordapp.com/attachments/996532523930755143/1045405551024164885/ssstiktok_1643051350.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1045405551351304243/Snaptik_6919604168621690118_momoowo.mp4",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277178077892678/unknown-23.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277178761555968/unknown-6.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277179122262016/E_W_hldXoAU4wiH.jpeg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277179508129854/Tumblr_l_464535271040610-1.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277179965325322/l7yl7fm0rpe81.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277180300857576/FB_IMG_1608875677481.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277180640604242/unknown-1-1.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277180971958363/20211119_212107.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277181286518874/unknown-5-1.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277181726928966/unknown-43.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277251796979712/tumblr_4107ea9485df3d724651f798d6f6f969_ee086ca5_500.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277252304486491/IMG-20220531-WA0584.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277252602269716/received_338286854824783-3.jpeg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277252983967836/unknown-4-1.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277253244002414/unknown-10.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277253571153940/FB_IMG_1630898683145.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277311981043712/a52be286d608b6f7bae28e7c69db951f-1.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277312274632794/IMG_20211025_114215.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277312626950234/fweb9fm0rpe81.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277313105121472/j2atzo32k9l81.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277313495175285/IMG-20220707-WA0195.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277313906229338/FB_IMG_1657713491017.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277314438901771/FB_IMG_1657713301272.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277327005040671/FB_IMG_1657713306483.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277327428653269/FB_IMG_1657713299134.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277327957131345/Screenshot_20210323-231538-1.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277385528152235/pck_287.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277385863708815/Captura_de_pantalla_2021-10-10_195104.png",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277386308300882/IMG_20220724_100427_037.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277386799042570/152403822_2990519801073287_6457751434120417747_n.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277387243618405/1626962581025.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277387688218714/A09.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277388065722388/photo_2021-12-12_22-15-15.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277388975886477/IMG_6387.jpg",
        "https://cdn.discordapp.com/attachments/996532523930755143/1010277389353365575/20220205_171041.jpg",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Cuerpo - Muslos \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
