const Discord = require('discord.js');
const Setups = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
  name: 'messageCreate',
  async run(client, message) {

    if (message.author.bot) return;

    // Consultar el estado de saludos para este servidor en la base de datos
    const setup = await Setups.findOne({ guildID: message.guild.id });
    if (!setup || !setup.linksEnabled) return;
    const allowedRoles = setup.allowedRoles.map(r => r.toString());
    const allowedUsers = setup.allowedUsers.map(u => u.toString());
    if (!allowedRoles.includes(message.member.roles.highest.id) && !allowedUsers.includes(message.author.id)) {

    const regex = /(http|https):\/\/[^\s]+/gi;
    if (regex.test(message.content)) {
      message.delete().then(() => {
        message.channel.send({
          embeds: [
            new Discord.MessageEmbed()
              .setDescription("<:fail:1083542064924479549> |  No puedes enviar links!")
              .setColor("e60ad4")
          ]
        }).then(msg => {
          setTimeout(() => msg.delete(), 1000);
        });
      }).catch(console.error);
    }     
     return;
  }}
}