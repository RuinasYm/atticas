const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("by")
        .setDescription("© Mira los creditos del Bot!"),
        
    async run(client, interaction){

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Creditos`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
    .setColor("e60ad4")
    
    .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1065746146368180365/neko-koshki-devushka.jpg")
    .setDescription(`\n > **Fundador de** \`${interaction.guild.name}\`\n > [!! ୭ Botri ˖ֹ ❦ ೃ୭#5176](https://discord.com/users/1001880420138373191)`)

    interaction.reply({ embeds: [embed] })
    
  }

}