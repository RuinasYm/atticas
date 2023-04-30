const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("howgay")
        .setDescription("🌈 Calcula que tan gay eres"),
    

    async run(client, interaction){

 
    let respuestas = [Math.floor(Math.random() * 100)]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)];

    const embed = new Discord.MessageEmbed()
    .setAuthor(`HowGay`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
    .setDescription(`Que tan gay eres? ${interaction.member}`)
    .addField(` > Eres:`,`**\`${random} %\` gay :gay_pride_flag:**`)
    .setColor("e60ad4")
    
    
    interaction.reply({ embeds: [embed] })

  }

} 