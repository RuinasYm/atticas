const afk = require ('../../modelos/afk');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
  name: 'messageCreate',
  async run(client, message) {
    if (!message.guild || message.author.bot) return;

    const data = await afk.findOne({
      UserID: message.author.id,
      GuildID: message.guild.id,
    });
    if (data) {
      await afk.findOneAndDelete({
        UserID: message.author.id,
        GuildID: message.guild.id
      });
      message.reply({content: `Bienvenido/a de regreso **${message.author.username}** tu estado AFK fue removido. <3`})
      .then((msg) => setTimeout(() => msg.delete(), 15000));
    }
    const mentionedMember =  message.mentions.members.first();
    if (mentionedMember) {
      const data = await afk.findOne({
        UserID: mentionedMember.id,
        GuildID: message.guild.id // comprobar si el estado AFK se estableció en el servidor actual
      });
      if (data) {
        const eventTime = data.time; // momento en que se estableció el estado AFK
        const elapsedTime = Date.now() - eventTime; // calcular cuánto tiempo ha pasado en milisegundos
        const seconds = Math.floor(elapsedTime / 1000); // convertir a segundos
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${mentionedMember.user.username} esta AFK`, mentionedMember.displayAvatarURL({dynamic: true}))
        .setDescription(`Motivo: ${data.Reason}`)
        .setColor("e60ad4")
        .setThumbnail(mentionedMember.displayAvatarURL({dynamic: true}));
        message.channel.send({ embeds: [embed] })
        .then((msg) => setTimeout(() => msg.delete(), 15000));
      }
    }
  }
};
