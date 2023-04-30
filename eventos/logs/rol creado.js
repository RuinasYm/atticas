const Discord = require ('discord.js')
const Setups = require('../../modelos/setups');

module.exports = {
	name: `roleCreate`,
	async run(client, role) {  

    const setup = await Setups.findOne({ guildID: role.guild.id });
    if (!setup || !setup.logsEnabled || !setup.logsChannel) return;

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Rol creado", iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setColor("e60ad4")
    .setDescription(` > **Name:** ${role.name} (${role})\n > **Id:** ${role.id}\n > **Creación:** <t:${Math.round((Date.now()) / 1000)}:R>`) 
    .setThumbnail(role.guild.iconURL({dynamic: true}) || client.user.displayAvatarURL({ dynamic: true }))
      client.channels.cache.get(`${setup.logsChannel}`).send({embeds: [embed] })

  }
}