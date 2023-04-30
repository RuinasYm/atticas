const Discord = require ('discord.js')

module.exports = {
    name: "69",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!69",
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

        const contenidos = ["https://cdn.discordapp.com/attachments/1000659086246940742/1001904285958819850/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904607997476934/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904642629832805/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904666755481701/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904693540290651/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904712473387200/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904748502466690/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904832153653449/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001904899119915090/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001905071858139145/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001905112769372160/unknown.png",
        "https://cdn.discordapp.com/attachments/1000659086246940742/1001905130695819394/unknown.png",

    ] 

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Posiciones - 69 \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
