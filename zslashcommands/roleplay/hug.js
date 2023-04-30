const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("feed")
        .setDescription("🍣 Abraza a un usuario!")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {

        const usuario = interaction.options.getUser("usuario");
 
        if (!usuario) {
            const embed = new MessageEmbed()
        .setAuthor({name: `${interaction.user.username} abrazó a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        .setColor("RANDOM")//color random
        .setImage(await club.hug())
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} abrazó a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.hug())
                    ]})
                
                const embed2 = new MessageEmbed()//definimos embed
                .setAuthor({name: `${interaction.user.username} le dio un abrazo a ${usuario.username}. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                .setColor("RANDOM")//color random
                .setImage(await club.hug())
            interaction.reply({embeds: [embed2]});
        }
   }
}
