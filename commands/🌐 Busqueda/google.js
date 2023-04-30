const Discord = require('discord.js');

module.exports = {
  name: "google",
  alias: [],
  async execute (client, message, args) {
    let texto = args.join(' ');

    if (!args[0]) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar algo a buscar!**")
          .setColor("e60ad4")
        ]
      });
    }

    const encodedText = encodeURIComponent(texto);
    const embed = new Discord.MessageEmbed()
      .setImage('')
      .setThumbnail('https://assets.stickpng.com/images/5a951939c4ffc33e8c148af2.png')
      .setAuthor({ name: "Búsqueda Google", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
      .setColor("e60ad4")
      .setDescription(`\n > **Búsqueda:** \`${texto}\`\n > **Resultado:** [Click Aqui]](https://www.google.com/search?q=${encodedText})`);

    message.channel.send({ embeds: [embed] });
  }
};
