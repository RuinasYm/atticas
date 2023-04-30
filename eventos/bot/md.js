const Discord = require ('discord.js')
module.exports = { 
  name: 'messageCreate',
async run(client, message) {
    if (message.channel.type === "DM" && !message.author.bot) {
      const owner = await client.channels.cache.get("1076647589895749652");
      if (owner)
        owner.send({embeds: [new Discord.MessageEmbed()
    .setAuthor({name: `Mensaje de ${message.author.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setColor("e60ad4")
    .setDescription(` > **Contenido:** ${message.content}\n > **Enviado:** <t:${Math.round((Date.now()) / 1000)}:R>`) 
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        ] });
    }
  }
}