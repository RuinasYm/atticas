const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName("fecha")
      .setDescription("⌚ Muestra la fecha Actual."),  
async run(client, interaction) {
  const embed = new Discord.MessageEmbed()
  .setAuthor("Fecha", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
  .setDescription(`\n > **Date:** <t:${Math.round(Date.now()/1000)}:d>\n > **Hora:** <t:${Math.round(Date.now()/1000)}:t>`) 
    .setColor("e60ad4")
    
    
 interaction.reply({embeds: [embed]})       
    }
};