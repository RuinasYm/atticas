const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'servers',
  alias: ["serverlist"],
  desc: "Sirve para ver la lista de servers en los que esta el bot",
  uso: "!servers",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message) {
    // Obtener la lista de servidores
    const guilds = client.guilds.cache;

    // Crear un arreglo con la información de cada servidor
    const serverList = [];
    for (const guild of guilds.values()) {
      try {
        const invite = await guild.invites.create(guild.systemChannel, { unique: true, maxAge: 0 });
        serverList.push({
          name: guild.name,
          id: guild.id,
          inviteURL: invite.url
        });
      } catch (err) {
        console.log(`El bot no tiene permisos de crear invitación en el servidor ${guild.name} (${guild.id})`);
        serverList.push({
          name: guild.name,
          id: guild.id,
          inviteURL: null
        });
      }
    }

    // Crear el embed con la lista de servidores
    const embed = new MessageEmbed()
      .setAuthor({name: "Lista de servidores", iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setDescription(serverList.map(guild => `- ${guild.inviteURL ? `[${guild.name}](${guild.inviteURL})` : guild.name} (**ID:** \`${guild.id}\`)`).join('\n'))
      .setColor('e60ad4')
      .setThumbnail(client.user.displayAvatarURL({dynamic: true}));

    // Enviar el mensaje con el embed
    message.channel.send({ embeds: [embed] });
  }
};
