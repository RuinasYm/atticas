const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
  name: 'uwebhook',
  alias: [''],
  desc: 'Sirve para crear una webhook de un usuario',
  uso: '!uwebhook <user> <message>',
  permisos: ['SEND_MESSAGES'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  async execute(client, message, args) {

    if(message.author.id !== "1001880420138373191") return message.reply({content: 'No tienes permisos para hacer esto >-<'})

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user) {
      return message.channel.send('Necesitas mencionar a alguien -▲-');
    }

    let msg = args.slice(1).join(" ");
    if (!msg) {
      return message.channel.send('Necesitas ingresar un mensaje >-<');
    }

    message.delete();

    try {
      const webhook = await message.channel.createWebhook(user.displayName, {
        avatar: user.user.displayAvatarURL({dinamyc: true}),
        channel: message.channel.id
      });

      await webhook.send(msg);
      await webhook.delete();
    } catch (err) {
      console.error(err);
      return message.channel.send('Ocurrió un error al enviar el mensaje');
    }
  }
}
