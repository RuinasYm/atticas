const Discord = require ('discord.js')

module.exports = {
    name: "venezolanas",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!venezolanas",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996997792553783326/997196816720351272/unknown.png",
        "https://cdn.discordapp.com/attachments/996997792553783326/997196867957964860/unknown.png",
        "https://cdn.discordapp.com/attachments/996997792553783326/997196890829508718/unknown.png",
        "https://cdn.discordapp.com/attachments/996997792553783326/997196977261510736/unknown.png",
        "https://cdn.discordapp.com/attachments/996997792553783326/997197006684557322/unknown.png",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Etnias - Venezolanas \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
