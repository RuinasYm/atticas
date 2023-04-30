const Discord = require('discord.js');
const Setups = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
  name: 'messageCreate',
  async run(client, message) {

    if (message.author.bot) return;

    // Consultar el estado de saludos para este servidor en la base de datos
    const setup = await Setups.findOne({ guildID: message.guild.id });
    if (!setup || !setup.deleteEnabled) return;
    const allowedRoles = setup.allowedRoles.map(r => r.toString());
    const allowedUsers = setup.allowedUsers.map(u => u.toString());
    if (message.content.includes('!setautodelete')) return;
    if (message.content.includes('!setupautodelete')) return;
    if (message.content.includes('!autodelete')) return;
    if (!allowedRoles.includes(message.member.roles.highest.id) && !allowedUsers.includes(message.author.id)) {
      // El usuario no tiene permiso para enviar links
    message.delete()
    }
  }
};
