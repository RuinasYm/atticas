const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("slap")
        .setDescription("Bofetea a un usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
 
        if (!usuario) {
            const embed = new Discord.MessageEmbed()
                  .setAuthor({name: `${interaction.user.username} le dió una bofetada a un ser imaginario. o.o`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                  .setColor("RANDOM")//color random
                  .setImage(await club.slap())
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} le dió una bofetada a un ser imaginario. o.o`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.slap())
                ]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} le dio una bofetada a ${usuario.username}. D:`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(await club.slap())
            interaction.reply({embeds: [embed2]});
        }
   }
}

