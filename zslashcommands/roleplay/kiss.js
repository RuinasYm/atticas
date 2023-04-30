const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kiss")
        .setDescription("Besa a un usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
 
        if (!usuario) {
            const embed= new MessageEmbed()
                  .setAuthor({name: `${interaction.user.username} beso a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                  .setColor("RANDOM")//color random
                  .setImage(await club.kiss())
            interaction.reply({embeds: [embed]});

        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} beso a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.kiss())
                ]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} le dio un beso a ${usuario.username}. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(await club.kiss())
            interaction.reply({embeds: [embed2]});
        }
   }
}

