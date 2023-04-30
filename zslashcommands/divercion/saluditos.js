const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("saludo")
        .setDescription("👋 Saluda a un Usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres saludar").setRequired(true)),

    async run(client, interaction){

        const array = [    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203427708612679/saludos9.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203428241281044/saludos8.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203428648136914/saludos7.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203429159833620/saludos6.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203429600243772/saludos5.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203433672904796/saludos4.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203434092351588/saludos3.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203434461433946/saludos2.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042203435023487006/saludos1.gif",]

    let usuario = interaction.options.getUser("usuario") 

const embed = new Discord.MessageEmbed()

            .setAuthor(`Saludo`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png") 
            .setDescription(`**${interaction.member} ha saludado a ${usuario}**`)
            .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
            .setColor("e60ad4")
            
            interaction.reply({ embeds: [embed] })
       }
    } 
    