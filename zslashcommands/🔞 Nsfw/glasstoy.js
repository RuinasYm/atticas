const Discord = require ('discord.js')

module.exports = {
    name: "glasstoy",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!glasstoy",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996802352134770738/1001916470349008966/unknown.png",
        "https://cdn.discordapp.com/attachments/996802352134770738/1001916491966447656/unknown.png",
        "https://cdn.discordapp.com/attachments/996802352134770738/1001916529207693312/unknown.png",
        "https://cdn.discordapp.com/attachments/996802352134770738/1001916567950479531/unknown.png",
        "https://cdn.discordapp.com/attachments/996802352134770738/1001916648615313440/unknown.png",
        "https://cdn.discordapp.com/attachments/996802352134770738/1001916817226334310/unknown.png",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Juguetes - Glass_Toy \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
