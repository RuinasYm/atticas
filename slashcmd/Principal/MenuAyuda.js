const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { readdirSync } = require('fs');
const Discord = require('discord.js');
const { manageSug } = require('simply-djs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("📙 Mira mis comandos"),


    async run(client, interaction, args){
        interaction.reply("!help").then(msg => {
            setTimeout(() => msg.delete(), 1000)});



            }
        }
        
