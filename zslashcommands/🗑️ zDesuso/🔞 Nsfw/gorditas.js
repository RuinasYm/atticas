const Discord = require ('discord.js')

module.exports = {
    name: "gorditas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!gorditas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996535138001375312/1010304117069062345/HrZWnggi_480p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304117543022734/164649125570.jpg",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304117920518144/164649122389.jpg",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304118327353374/FB_IMG_1654088620809.jpg",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304118952313002/VN20220606_004514.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304119526916126/VID-20220605-WA0000.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304120026058853/X__tub_1456929659266863104720P.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304120567107684/videozip_1761.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304121150111744/xvideos.com_0497c55ab0c7290fe87caf2d175fcdfa_001_14.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304226095812647/q4-0FGJJ-TMkBl1p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304226532016350/VID_20210527_135858_492.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304227102437376/xvideos.com_e7710366acdb35c87d54485f06e1e315_18.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304227500888114/VID_20220117_195518_198.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304228029366362/VID_20220117_195529_980_1.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304228968898660/Se_viene_a_chorros_-_XVIDEOS.COM.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304229388333076/video_2022-04-03_16-55-06_1.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304350624698378/Uyumarine_20.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304351161553027/Uyumarine_21.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304351539048548/trim.3EA79563-424B-460B-8A4C-C511CDDF9DC4.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304351954280590/trim.4BD83746-C7B6-4F52-82EE-590163C25873.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304352348553216/R1qlFFP.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304352696676373/WOAGZvm.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304353149657158/xvideos.com_9f90f1eee2e7c93fdef7667711b567c4_20_21.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304353715884133/xvideos.com_e4480c174f5884cb6738c5a6bf1fdac2_19.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304354177253396/Uyumarine_13.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304403967844422/TransparentIllustriousWaterdogs.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304404332761108/twitter_20220119_001049.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1010304404827672617/FrankPungentSquamata.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636714165252126/MajorKookyUintagroundsquirrel-mobile.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636714504982538/my_cousin_finds_me_a._and_wakes_me_with_his_cock_insideMP4_High_Quality0.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636715494838343/Graciebon_BWWMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636716291751996/xvideos.com_42adcaf8e5d2faf90b548c9dc516a097-1.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636717105459290/Se_viene_a_chorros_-_XVIDEOS.COM.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636717747191890/we82x2Nq_720p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636718103695421/t3DMe1TR_480p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636718888038491/Ww1mLumq_480p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636719525576785/UnhappyHelplessHydatidtapeworm-mobile.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636719919837244/video_2022-05-23_21-27-57.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636748906668143/video_2022-06-29_16-33-45.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636749426753546/VID_20220805_104937_862.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636749963640832/fMOXjZ2.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1019636750408228884/thiccness_extreme_1.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1020443945202880642/EmbarrassedAffectionateGalapagosmockingbird-1.webm",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476758814597240/Xb9A4VAD_480p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476759229825215/VID_20210601_130846_213.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476759707979878/Graciebon_BWWMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476760261632010/xvideos.com_e7710366acdb35c87d54485f06e1e315_18-1.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476760907546695/X__tub_1456929659266863104720P.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476761574449193/DASH_720.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476762002280488/DASH_480.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476762459443350/m1A0PbN.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1033476762912436304/EnchantedHelpfulBats-mobile.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757238058074193/video_2022-05-23_21-27-56.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757240717250600/xvideos.com_22ff2e9d6b3d9328b25cd17d7be923c9-1.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757241694531704/IMG_4941.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757242051039273/MadeupShorttermHerald-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757242726318201/RelievedLightPapillon.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757243221258381/redditsave.com_ProfitableDarkslategreyBigmouthbass.mov",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757243812642866/5w4G0eBo_720p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757244408246322/hoYQRZMx_720p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757245154820226/NnGDsozpfy85b0je.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1036757245653954580/hyO1dlhl_720p.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705301247303731/5RRiUCvq2YjhyEUE.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705301570273310/7es3qh3XkZzOJZUf.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705301926776852/1130361.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705302325239939/WwwVBVw6mo3NFS_R.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705302669180960/1059418.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705303013101618/1125613.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705303369621555/ssstwitter.com_1665754134325.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705303742922773/1082707.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705304632102912/VID_20220930_133244_063.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705312299294780/louisakhovanski_-_CZHmv-NJbBd.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705312689373236/Gj2gGhakzvCpgMLD.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705313167515859/x_V5T9ec2IvRvrHr.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705313813434388/ETdzfX42YlUAfNPW.mp4",
        "https://cdn.discordapp.com/attachments/996535138001375312/1052705314245459988/louisakhovanski_-_CZ4gIIzjFFo.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Gorditas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
