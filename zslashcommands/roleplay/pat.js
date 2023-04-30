const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pat")
        .setDescription("Acaricia a un usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
 
        if (!usuario) {
            const embed = new MessageEmbed()//definimos embed
            .setAuthor({name: `${interaction.user.username} acarició a un ser imaginario. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(await club.pat())
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} acarició a un ser imaginario. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.pat())]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} acarició a ${usuario.username}. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(await club.pat())
            interaction.reply({embeds: [embed2]});
        }
   }
}

