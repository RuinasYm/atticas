const Discord = require ('discord.js')
const Setups = require('../../modelos/setups');

module.exports = {
	name: `messageUpdate`,
	async run(client, message, oldMessage) {  

   
    const setup = await Setups.findOne({ guildID: message.guild.id });
    if (!setup || !setup.logsEnabled || !setup.logsChannel) return;
    if (message.author.bot) return; 
    
    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Mensaje editado", iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setColor("e60ad4")
    .setDescription(` > **Mensaje:** ${message.content}\n > **Nuevo mensaje:** ${oldMessage.content}\n > **Id:** [${message.id}](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})\n > **Usuario:** ${message.author}\n > **Canal:** ${message.channel}\n > **Editado:** <t:${Math.round((Date.now()) / 1000)}:R>`) 
    .setThumbnail(message.guild.iconURL({dynamic: true}) || client.user.displayAvatarURL({ dynamic: true }))
      client.channels.cache.get(`${setup.logsChannel}`).send({embeds: [embed] })

  }
}