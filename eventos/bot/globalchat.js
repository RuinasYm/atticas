const { MessageEmbed } = require('discord.js');
const GlobalChannel = require('../../modelos/setups');

module.exports = {
  name: 'messageCreate',
  async run(client, message) {
    if(message.author.bot) return;

    // Verifica si el mensaje se envió en el canal global
    if (message.channel.name.match(/^.*global\-chat/i)) {
      // Envía el mensaje a todos los demás servidores
      client.guilds.cache.forEach(guild => {
        if (guild.id !== message.guild.id) { // Excluye el servidor actual
          const channel = guild.channels.cache.find(channel => channel.name.match(/^.*global\-chat/i));
          if (channel) {
            channel.send({
              embeds: [
                new MessageEmbed()
                  .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                  .setDescription(`\n ${message.content}`)
                  .setColor('e60ad4')
                  .setFooter({ text: `Servidor: ${message.guild.name}`, iconURL: message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) })
              ],
            });
          }
        }
      });
    }
  },
}
