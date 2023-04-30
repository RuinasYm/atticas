const Discord = require ('discord.js')

module.exports = {
    name: "twerking",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!twerking",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996533361248051390/1010293312017670344/neivamara_1628869645719295.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293312592293958/video0-6.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293313045266452/ClearcutDependableGyrfalcon.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293313385013359/VID_20220419_185853_092.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293313804439675/VID_20220419_190010_759.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293314219688056/VID_20220419_185951_301.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293314647511050/VID_20220419_190004_752.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293315113062461/VID_20220419_185942_813.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293315599605810/VID_20220319_185646_655.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293316077752450/z37GJDv0_720p.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293498504806501/SuburbanGraveAracari-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293498928451624/YiADFtM1_480p.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293499356258425/twitter_20220529_152011.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293499767296010/video4.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293500320960572/Mia_Malkova_twerking_-_Porn_Videos_amp_Photos___EroMe_720.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293500803293365/VID-20220610-WA0026.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293501386313788/VID_20220419_185924_729.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293608441720852/HalfDisastrousBison-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293608869535795/BestVibrantBillygoat.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293609381232640/3x6MBsM.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293609704206376/FrenchDiscreteSquirrel-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293610056523886/JuvenileTameDuckling-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293610463379609/DeadlyPlaintiveStallion.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293610819891200/GrumpyGreatIchneumonfly-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293611155431424/MildExcellentDog-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293611570675732/IncomparableStraightLamb.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293611910410261/WhoppingTrustingDwarfrabbit-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293721750843542/79e0b31bd06fa5478ee7a53e5481addd.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293723415978074/e1932f0be4dd3bfcc030bf856758b03c.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293724275802154/a819357205f2c3a23d5e7b296b7567b2.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293724816887838/VID_20220319_185655_536.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293725383106570/xvideos.com_ae7835919082dd48ebd3a5905ee345a2.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293725966110831/2uvk4MT.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293726406525058/GrouchyUnacceptableNorthernelephantseal-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293727044046868/UnwittingForthrightQuadrisectus.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293727622877214/FrugalIncredibleArawana-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293728210067536/DearestQuickHerring.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293840516759592/VID_20220319_185646_655_1.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293840948768879/VID_20220419_185957_323.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293841368207360/video0-6_1.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293841837965363/caritoalaparato1629730392497.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293842223824946/VID_20220419_190004_752_1.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293842764910612/how_1.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293843213688903/NotedThoughtfulYnambu.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293843603763280/video4-1.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1010293844136448071/HurtfulShockingAfricanrockpython-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019306245829709885/VID_122770821_044317_945.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651246451339376/UsedShoddyBergerpicard.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651246950453380/273YzBDkVehDTDBM.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651247290187796/P71n-k1U8Dhd_hQr.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651247613161502/f1cb3d206cc3384b58fe82251b09008c.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651248682700900/video0.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651249311850605/RealisticAgileBrahmancow.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651249668374548/VID_20220117_205835_487.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651250347855943/xvideos.com_8a263d51d90b74c1623965f56ce16bef.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651250884714537/Brazzers_Twerk4645.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651251362869288/mfjsVb6bnaYY79yS.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651301354770452/barbie_linda16_20220212_6.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651301723873290/VID-20201210-WA0021.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651302185238638/dDbBtTn.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651302877302854/VID_20211009_221827_042.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651303770706012/1640556188248.webm",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651304332738662/1611394476900.webm",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651305813319680/Twerk_1-1.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651306421485568/Yph9TSBpbD7z-1.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651306991923321/pck_333.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651347747983430/IMG_3220.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651348205142067/video1_2_3.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651348851085353/By__jujulovexox_----video0.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651349408907365/video_2022-03-22_09-34-45.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651349874491562/video_2022-03-24_11-33-10.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1019651350419746998/video_2022-03-22_22-09-20.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1036756237695590420/ya.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1036756238261829713/ya-2.mp4",
        "https://cdn.discordapp.com/attachments/996533361248051390/1036756238769344632/ya-3.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1036756239247482920/ya-6.mov",
        "https://cdn.discordapp.com/attachments/996533361248051390/1036756240509980722/ya-5.mov",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Twerking \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
