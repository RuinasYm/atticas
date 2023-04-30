const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("🏓 Mira mi latencia"),
    

    async run(client, interaction){
        interaction.reply({
            embeds: [new MessageEmbed()
              .setAuthor("Ping", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
              .setDescription(` > **Latencia:** \`${client.ws.ping} ms\``)
              .setColor("e60ad4")
              
              
            ]
          })
          }
          }
