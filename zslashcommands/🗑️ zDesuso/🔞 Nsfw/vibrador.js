const Discord = require ('discord.js')

module.exports = {
    name: "vibrador",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!vibrador",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802112698716281/1009938245288738926/VID_20220317_140022_801.mp4",
        "https://cdn.discordapp.com/attachments/971425989483716608/1005949371810058330/15652957497440.mp4",
        "https://cdn.discordapp.com/attachments/996802112698716281/1009938535618461876/Z_-_Play_or_control_her_squirt_through_your_phone_with_App_control_Smart_Worldwide_Shipping_GET_60_OFF_DISCOUNT.mp4",
        "https://cdn.discordapp.com/attachments/996802112698716281/1029499543114481765/4NSGP_zw1thIyaOQ.mp4",
        "https://cdn.discordapp.com/attachments/996802112698716281/1029499543491981352/hannah-owo_0171.mov",
        "https://cdn.discordapp.com/attachments/996802112698716281/1029499544205000704/1644043082463.webm",
        "https://cdn.discordapp.com/attachments/996802112698716281/1036758640650100756/a050bfd90f473998c57c5f38074dc514.mp4",
        "https://cdn.discordapp.com/attachments/996802112698716281/1036758641048567848/1644028897988.webm",
        "https://cdn.discordapp.com/attachments/996802112698716281/1036758641438642197/VID_20220822_222416_774.mp4",
    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Vibrador \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
