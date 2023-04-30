const { MessageEmbed } = require('discord.js');
const Setups = require('../../modelos/setups');

let timer;
let messageCount = 0;

module.exports = {
  name: 'messageCreate',
  async run(client, message) {
 

    const setup = await Setups.findOne({ guildID: message.guild.id });
    if (!setup || !setup.recordatorioEnabled) return;

    if (message.channel.id !== `${setup.recordatorioChannel}`) return; // si el mensaje no viene del canal de recordatorios, salir de la función
    if (message.author.bot) return; 
    
    // aumentar el contador de mensajes y verificar si se debe enviar un recordatorio
    messageCount++;
    if (messageCount >= setup.recordatorioCantidad) {
      // enviar el recordatorio y reiniciar el contador de mensajes
      const channel = client.channels.cache.get(`${setup.recordatorioChannel}`);
      channel.send({embeds: [new MessageEmbed()
        .setAuthor({name: "Recordatorio", iconURL: client.user.displayAvatarURL({ dynamic: true })})
        .setDescription(`> ${setup.recordatorioDescription}`)
        .setColor("RANDOM")
        ]});
      messageCount = 0;
    }
  }
};
