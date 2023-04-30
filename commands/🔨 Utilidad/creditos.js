const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "creditos",
  alias: ["by"],
  desc: "Sirve para ver los creditos del bot",
  uso: "!creditos",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Creditos", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setColor("e60ad4")
    .setDescription(`\n > **Developer**\n > [Botri#6523](https://discord.com/users/1001880420138373191)`)
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))

    message.channel.send({ embeds: [embed], components: [
      new Discord.MessageActionRow().addComponents(
          [
              new Discord.MessageButton()
                  .setStyle(`LINK`)
                  .setLabel(`Premium`)
                  .setURL('https://www.patreon.com/clubatticus'),
          ],
          [
              new Discord.MessageButton()
                  .setStyle(`LINK`)
                  .setLabel(`Docs`)
                  .setURL("https://docs.clubatticus.ml/_/"),
          ]
      )
  ]}) 
    
  }

}