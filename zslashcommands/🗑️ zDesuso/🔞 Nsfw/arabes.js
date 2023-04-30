const Discord = require ('discord.js')

module.exports = {
    name: "arabes",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!arabes",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996997471668535327/997197675709612032/unknown.png",
        "https://cdn.discordapp.com/attachments/996997471668535327/997197740901662861/unknown.png",
        "https://cdn.discordapp.com/attachments/996997471668535327/997197803082219660/unknown.png",
        "https://cdn.discordapp.com/attachments/996997471668535327/1036760589525073982/document_6172236641395017050.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Arabes \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
