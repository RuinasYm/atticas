const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {

    data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("🎱 Pregunta a la bola mágica")
    .addStringOption(option => option.setName("pregunta").setDescription("Formula tu pregunta").setRequired(true)),

    async run(client, interaction){

        let question = interaction.options.getString("pregunta") 

        let answer = [
            "Si", "No", "Tal vez", "Probablemente"
        ] 
    
        let finalAnswer = answer[Math.floor(Math.random() * answer.length)]

interaction.reply({
   
    embeds: [new MessageEmbed()
      .setAuthor(`Bola Mágica 🎱`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
      .addField("\n\n > Pregunta:", `\`${question}\``)
      .addField("\n\n > Respuesta:", `\`${finalAnswer}\``)
      //.setDescription(` > Pregunta: ${question}\n\n > Respuesta: ${finalAnswer}`)
      .setColor("e60ad4")
      
      
    ]
  })

    }
    
}