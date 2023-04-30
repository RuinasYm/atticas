const Discord = require ('discord.js')

module.exports = {
    name: "tatuajes",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!tatuajes",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996532250185310309/1010275183786999828/video-www_xvideos_com-16448788372673.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275186160979988/received_445614036874136.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275186584588419/2_5328038927917911751.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275187054346280/video-www_xvideos_com-16448784603450.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275187977113701/6612478982707245462-1.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275259448037486/2b4bd8a5-3b8d-42f1-8511-716bb0281f13.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275259921989773/21-09-02-10-33-541_01.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275259921989773/21-09-02-10-33-541_01.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275262585389098/video2-1.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275263009009764/Ecxn0rF.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275263562645584/video0-1-1.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275319732777091/video0.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275320076718120/6b5d02f6e30b289f73ef980877f071ca.webm",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275320663908452/VID_20210712_181055_216_1.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275386195705917/587455e5e167c11b15ea3a4bc05395a4.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275386573197403/IncomparableBitesizedFowl-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275387017801818/twitter_20220118_145725.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275387546284072/twitter_20211229_012918.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275388330606724/twitter_20211220_114643.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1010275388729069598/AjarSociableSugarglider-mobile.mov",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639082906812546/Dulcelunna__1540170410746007553720P.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639083548553338/1.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639083972169800/VID_20220217_190728_882.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639084307730482/kamillycamposMP4_High_Quality.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639085003964496/2_.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639085771526286/Untitled_Video4.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639086232907838/7WoS42M.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639087562510366/2_5328038927917911751.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1019639088187449495/video-www_xvideos_com-16448784603450.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1036755300889403392/PoorExcitingIcefish_1.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1036755301254299789/VID_20220917_221424_131.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1036755301682122753/1640315939928.webm",
        "https://cdn.discordapp.com/attachments/996532250185310309/1036755302281912381/gothmp4_Trim.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707920174919700/2_5265119095845556847.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707921257054218/4_5993219088782983822.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707920787296337/4_5995670772079657620.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707921793929286/VID_20211013_203257_678.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707922553098240/PoorExcitingIcefish_1.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707922993496134/VID_20220814_003855_192.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707923496808468/971022.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707924058853476/ProbableFlawedNauplius-mobile.mp4.mov",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707924549578802/1119945.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707924998377544/VID_20221108_195809_135.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707933047234682/VID_20221109_171830_572.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707933395374080/VID_20221109_171846_089.mp4",
        "https://cdn.discordapp.com/attachments/996532250185310309/1052707933772853308/VID_20221121_211334_917.mp4",
    
    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Tatuajes \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
