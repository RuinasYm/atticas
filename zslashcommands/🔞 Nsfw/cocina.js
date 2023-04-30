const Discord = require ('discord.js')

module.exports = {
    name: "cocina",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!cocina",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996803453823238154/1001909825812316231/xvideos.com_69c8d5ba7db41bd0d9ffe65342f1b465.mp4",
        "https://cdn.discordapp.com/attachments/996803453823238154/1001909826290450473/ParchedFlawlessGalapagoshawk-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996803453823238154/1001909826827329636/xvideos.com_76ef754c6a760c29346f70aa43c0551e-1.mp4",
        "https://media.discordapp.net/attachments/971432805986889768/976186689162739772/Tanika_so__-_Bagian_.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Lugares - Cocina \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
