const Discord = require ('discord.js')

module.exports = {
    name: "femboy",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!femboy",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996801015212945489/1001926539685925015/1600034139798.webm",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926540298309693/VID_20220215_174324_786.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926540910669914/Lunacys_Twitter_07-2020.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926541577552082/VID_20210927_211005_650.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926542013763594/xjgVS_InPsoWKwxr.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926542592573490/Lhzv2SBv82TCH2jv.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926543007825983/SPOILER_1646569310487.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926543469191349/VID_20220412_230646_674.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926544077373522/gp-cock-gay-porn-gay-zone--7119543.webm",
        "https://cdn.discordapp.com/attachments/996801015212945489/1001926544517763142/gp-cock-gay-porn-gay-zone--7119492.webm",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639564303863808/PreviousClassicRat-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639565096583168/StaleMerryHorsefly-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639565738319932/HappyEssentialPartridge-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639566300360814/LkZmk4K.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639566795284520/LoathsomeSparseIrishdraughthorse-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639567432822926/OutrageousImpartialRoebuck-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639567793537114/GrayWornHeifer-mobile-1.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639568552689704/GhostwhiteNippyNautilus-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639569106346034/AwkwardPhonyRoller-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639569643208734/PortlyMildBaiji-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639618976620685/redditsave.com_DarkkhakiClearcutMillipede_1498x842.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639619958095903/video0_5-1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639621736472666/video0-3.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639622554374254/j7raC0vh4trEke7f.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639623036715078/HighlevelSatisfiedAvocet-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639623430975488/twitter_20220426_231934.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639624102072400/videoguru-20220426-012701699_jtv85sBR-1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639624907374632/24b4139267b38c1368e3af42bd03c0d1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639625540706404/twitter_20220314_135840.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1019639626153087017/Video_in_topic_Transgender_Gallery_by_Volusia.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1021803515875688458/PrudentUniqueBilby-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477195429069000/IlliterateTroubledSpringtail-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477195781378058/Chris_fantasy_2.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477196343423087/b_w_t_0310_25.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477196741886072/1656282987778.webm",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477197194862673/trim.D966D5F6-A303-47FB-82B6-4A01D99CE1C0.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477197622685736/zbdK9gN30bvITS9y.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477198021152829/video0-7-1_1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477198453149726/cachedVideo.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477198868393984/VID_20211115_050514_651.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477246062698526/ForkedJitteryMarabou-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477246532472912/yl_zOOHXhK7yvmmp.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477246968664074/twitter_20211228_023559.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477247409078359/video0_5-1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477248008867840/VID_20220926_173414_471.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477248621219840/1660088165782569.webm",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477249044840558/1660087240762493.webm",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477249472671835/StandardGargantuanMolly-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477249908867172/H-a3WTzJ9GIt9tA8.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477250378649610/SlategrayAgreeableMallard-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801015212945489/1033477402459910244/VID-20210324-WA0144-1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1036757742985154620/xvideos.com_36a2538617f1ccbd3543c581c4613bf3-1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1036757743505256448/trim.2C343A2D-C510-4FBD-AF0F-7949F9170ABB.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1036757744151183431/Spider_gwen.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1036757744700624946/trim.36DBCA1A-6937-4AAD-AF73-690065A8635C.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705865184067594/hM0KbUt-eOq7VlsW.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705865527992430/nXUyC1cZeWUgigG4.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705865959997450/8_IHwwn_xJ7NlJgh.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705866522050580/-4xGfLGkGudM_KBU.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705866945667122/atf2iBS7NgB16-OO.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705867302174850/htwcSODoBcHcKfg0.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705867767758879/FalseDizzyBassethound.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705868254281738/Gnr1wi49P46e15zH.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705868673720361/xvideos.com_b787817239ad86333e4712a3876ce4f3-1.mp4",
        "https://cdn.discordapp.com/attachments/996801015212945489/1052705869013450812/xvideos.com_89ba0bae7bd84d4b2674d4f126408e3f-2.mp4",
        ]

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Lgbt - Femboys \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
