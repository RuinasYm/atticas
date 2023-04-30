const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("lucky")
        .setDescription("🍀 Descubre tu Suerte"),
    async run(client, interaction){

    let dn = Math.floor(Math.random() * 100)
    let sl = Math.floor(Math.random() * 100)
    let sr = Math.floor(Math.random() * 100)
    let random = Math.floor(Math.random() * 100)
    
    const embed = new Discord.MessageEmbed()
    .setAuthor("Lucky", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
    .setDescription(`**Esta es tu suerte ${interaction.member}**\n\n > **💘 Amor:** \`${random} %\`\n > **💰 Dinero:** \`${dn} %\`\n > **💉 Salud:** \`${sl} %\`\n > **🍀 Suerte:** \`${sr} %\``)
    
    .setColor("e60ad4")
    

    interaction.reply({ embeds: [embed] })

  }

} 

