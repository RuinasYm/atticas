const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dado")
        .setDescription("🎲 Tira al Dado!"),
        
    async run(client, interaction){
        
const dado = Math.floor(Math.random() * 6)


const embed = new Discord.MessageEmbed()
.setAuthor(`Dado`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
.setColor("e60ad4")


.setDescription(`**Este es tu número ${interaction.member}**\n\n  > **🎲:** \`${dado}\``) 

interaction.reply({ embeds: [embed] })
    }
}
