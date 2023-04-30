const Discord = require ('discord.js')

module.exports = {
    name: "baño",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!baño",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996803690197426226/1001914346785484831/1_4922483196429337120.mp4",
        "https://cdn.discordapp.com/attachments/996803690197426226/1001914347188134058/video0-1_1.mp4",
        "https://cdn.discordapp.com/attachments/996803690197426226/1001914347620143214/1QtIJuvm_720p.mp4",
        "https://cdn.discordapp.com/attachments/996803690197426226/1001914348123475988/EnchantedAdorableFiddlercrab-mobile.mp4",
        "https://cdn.discordapp.com/attachments/996803690197426226/1009941047662612580/1.6.mov",
        "https://cdn.discordapp.com/attachments/996803690197426226/1009941048056873060/unrealisticablecanvasback.mov",
        "https://cdn.discordapp.com/attachments/996803690197426226/1009941048384036904/xvideos.com_366afe48c917f293cbf174438fbdb697.mp4",
        "https://cdn.discordapp.com/attachments/996803690197426226/1009941048757342398/xvideos.com_ea2246431a128623d76203621c9c0c26-1.mp4",
        "https://cdn.discordapp.com/attachments/996803690197426226/1009941049113853982/VinaSkyy_1416024253405798403720P.mp4",
        "https://cdn.discordapp.com/attachments/996803690197426226/1019307060048969858/Wgs4l7kCPwMayKR-.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Lugares - Baño \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
