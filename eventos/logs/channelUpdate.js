const Discord = require ('discord.js')
const Setups = require('../../modelos/setups');

module.exports = {
	name: `channelUpdate`,
	async run(client, channel) {  

    const setup = await Setups.findOne({ guildID: channel.guild.id });
    if (!setup || !setup.logsEnabled || !setup.logsChannel) return;
    
    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Canal Editado", iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setColor("e60ad4")
    .setDescription(` > **Name:** ${channel.name} (${channel})\n > **Id:** [${channel.id}](https://discord.com/channels/${channel.guild.id}/${channel.id})\n > **Editado:** <t:${Math.round((Date.now()) / 1000)}:R>`) 
    .setThumbnail(channel.guild.iconURL({dynamic: true}) || client.user.displayAvatarURL({ dynamic: true }))
      client.channels.cache.get(`${setup.logsChannel}`).send({embeds: [embed] })

  }
}