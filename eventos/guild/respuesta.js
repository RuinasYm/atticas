const Setups = require('../../modelos/setups');

module.exports = {
  name: 'messageCreate',
  async run(client, message) {
    if (message.author.bot) return;

    // Consultar el estado de saludos para este servidor en la base de datos
    const setup = await Setups.findOne({ guildID: message.guild.id });
    if (!setup || !setup.saludosEnabled) return;

    
    // Si los saludos están habilitados, enviar un mensaje de saludo
    if (message.content.startsWith(`${setup.saludosPalabra}`)) {
      const mensaje = setup.saludosMensaje .replace(/{user}/g, message.author.toString())
      .replace(/{user\.tag}/g, message.author.tag)
      .replace(/{user\.username}/g, message.author.username)
      .replace(/{user\.id}/g, message.author.id)
      message.channel.send(`${mensaje}`);
    }
  },
};
