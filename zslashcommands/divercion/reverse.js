const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reverse")
        .setDescription("💬 Revierte un Texto")
        .addStringOption(option => option.setName("texto").setDescription("Dijita un texto a Revertir").setRequired(true)),
    async run(client, interaction){

    let revert = interaction.options.getString('texto')
       if(!revert)return interaction.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  Tienes que indicar un texto a Revertir! | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
        ]
    })
    let reverse = revert.split("").reverse().join("")
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Reverse`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png") 
    .setColor("e60ad4")
    .setDescription(` > **Autor:** ${interaction.member}\n > **Texto:** ${reverse}`)
            interaction.reply({ embeds: [embed] })
    }
}