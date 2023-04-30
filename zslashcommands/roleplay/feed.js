const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("feed")
        .setDescription("🍣 Alimentate o a un Usuario!")
        .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres alimentar").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
 
        if (!usuario) {
            const embed = new MessageEmbed()
                .setAuthor({name: `Ñaam ${interaction.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                .setColor("RANDOM")
                .setImage(await club.feed());
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `Ñaam ${interaction.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")
                    .setImage(await club.feed())
                ]})
                
            const embed2 = new MessageEmbed()
                .setAuthor({name: `${interaction.user.username} le dio de comer a ${usuario.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                .setColor("RANDOM")
                .setImage(await club.feed());
            interaction.reply({embeds: [embed2]});
        }
   }
}

