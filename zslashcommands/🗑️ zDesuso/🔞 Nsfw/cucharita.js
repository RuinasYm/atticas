const Discord = require ('discord.js')

module.exports = {
    name: "cucharita",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!cucharita",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/996996004169658478/1009945033140605078/xvideos.com_1d7c9d5b8ba1bc5f796939786fa44e2d.mp4",
        "https://cdn.discordapp.com/attachments/996996004169658478/1009945033576816722/xvideos.com_5a985a3af381629f7ddc2c72ee4d44c3.mp4",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - Cucharita \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
