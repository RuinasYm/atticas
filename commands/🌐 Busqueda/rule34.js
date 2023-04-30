const Discord = require('discord.js')
const booru = require("booru")
const cooldowns = new Map();

module.exports = {
    name: "r34",
    alias: ["rule34", "regla34"],
    desc: "Sirve para buscar algo en rule34",
    uso: "!r34 (search)",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["SEND_MESSAGES"], 
    valoracion: "⭐⭐⭐⭐⭐",
    cooldown: 5000,
    async execute (client, message, args, prefix) {

        if (!message.channel.nsfw) return message.reply({
            embeds: [new Discord.MessageEmbed()
              .setAuthor({name: "Contenido con restricción", iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setDescription("Este comando requiere que el canal permita contenido con restricción por edad (NSFW).\n\nPuedes activar dicha opción en la configuración del canal.")
                .setColor("e60ad4")
                .setImage("https://cdn.discordapp.com/attachments/1052343306538975282/1074426806528135168/nsfw.png")
            ]
          })

          if (cooldowns.has(message.author.id)) {
            const timeLeft = (cooldowns.get(message.author.id) - Date.now()) / 1000;
            if (timeLeft > 0) {
                return message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setAuthor({ name: 'Calma!', iconURL: 'https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png' })
                        .setDescription(`Estas llendo demaciado rapido!\nPorfavor espera **${timeLeft.toFixed(1)} segundos**`)
                        .setColor("e60ad4")
                    ],
                    allowedMentions: { repliedUser: true }
                });
            }
        }

    cooldowns.set(message.author.id, Date.now() + this.cooldown);

    const tags = args.join(" ") //los tags que buscaremos
    if(!tags) return message.reply({
    embeds: [new Discord.MessageEmbed()
      .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar algo a buscar!**")
      .setColor("e60ad4")
    ]
  });
    booru.search('rule34', [tags], { limit: 1, random: true })//el primero es para buscar en la rule 34, luego se busca con los tags, luego agarramos una sola imagen y que sea una imagen aleatoria
    .then(posts => {//el json como toda la informacion
    for(let post of posts) {//luego la parte post de posts
    
    message.channel.send({ content: `\`\`\`js\n🔞 Regla34 - "${prefix}r34"\n\`\`\`Etiquetas de búsqueda: \`${tags}\`\n\n ${post.fileUrl}`, components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`Fuente original`).setURL(post.fileUrl),
            ],
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`Reportar`).setURL(`https://discord.gg/xBZhMewUrw`),
            ],
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`WebSite`).setURL("https://docs.clubatticus.ml/"),
            ]
            )]})

 }
 }).catch(e => message.channel.send("error "+e))//un catch por si da error
}
}
