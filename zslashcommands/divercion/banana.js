const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
.setName("banana")
.setDescription("🍌 ¿Cuanto mide tu banana?"),
  async run(client, interaction){
    let cm = Math.floor(Math.random() * 30)

  interaction.reply({
   
    embeds: [new MessageEmbed()
      .setAuthor({name: "Juego Banana", iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setDescription(`**La banana de ${interaction.member}  mide ${cm} cm.**`)
      .setColor("RANDOM")
      .setImage("https://nekocdn.com/res/menus/banana.png")
    ]
  })
  }
  }
