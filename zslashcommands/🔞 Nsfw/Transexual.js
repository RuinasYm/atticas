const Discord = require ('discord.js')

module.exports = {
    name: "transexual",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!transexual",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996800843431038997/1001924851679887491/VID_20220717_103941_611.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924852187406466/cm-chat-media-video-1724a579e-dc17-5219-a94e-4b3fca95826221400.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924852539736104/twitter_20220422_110238.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924852929794118/RotatingSpicyPerch-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924853328261261/VID_103060713_162550_178.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924854024503456/Would_you_like_to_sit_here_and_have_a_lil_conversation__.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924854414581802/000.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924854745944155/SorrowfulSuperficialAsiansmallclawedotter-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924980466004098/VID_103081211_035427_008_2.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924981770440744/VID_20220418_095716_011.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924982277939382/VID_20220714_213010_003.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1001924982886105188/VID_20220714_213248_178.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1004798734367985725/1_5006218428587967216.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1004798752973926501/1_5172812131166323315.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504105204424734/vULbr6YnoaDZ0yqj.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504105678372915/Tfacial.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504106072637480/Tfuckcum.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504106592739408/Tcumfuck.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504106936664114/car_2.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504107406430279/UdfCPLFkBF3W2qMk.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504107809087528/VID_20221003_004145_097.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504108153012266/1_9.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504108769575053/TCar.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504155137622016/Z57u64jiFEOBpgYm.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504155557052487/hlwLu_3lY8J0u_mq.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504156270084248/1649786587886.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504156857278504/1650462130767.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504157360595035/1648299622849.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504157918449705/1646784291972.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504158363033690/1644205339923.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504159021551656/1628542233676.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504159365480578/1613842630424.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504159365480578/1613842630424.webm",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504159889772696/VividAwareJanenschia.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504194937364530/LopsidedVigilantWolverine.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1029504195423903744/5BITTWFEz4AJt-4b.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757511379898421/MediumaquamarineMarvelousBarebirdbat-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757511837065297/ExtrovertedFemaleNene-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757512487194715/UnfitLeftPika-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757513070190653/ShadyInconsequentialIridescentshark-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757513514778654/ChillySkinnyXenotarsosaurus-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757514034892950/ThickRegularRedpoll-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757514412367892/ImaginativeQueasyWatermoccasin-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757514873733221/SlategrayLeadingPeccary-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757515326738472/FlashySphericalMaggot-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757515720990760/ds2d5l3dkcu91.mp4",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757526512939069/StrongAgonizingMoray-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757526978494595/FirsthandMassiveHorseshoebat-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757527502794882/LovingWorstRasbora-mobile.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757528022888528/1.mov",
        "https://cdn.discordapp.com/attachments/996800843431038997/1036757528459100190/SickFairAtlasmoth.mov",
    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Lgbt - Transexuales \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
