const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

var dancegif = [
    "https://nekocdn.com/images/wZFmoSzy.gif",
    "https://nekocdn.com/images/ptXrnhu9n.gif",
    "https://nekocdn.com/images/FGu2VFM5.gif",
    "https://nekocdn.com/images/ak5Y1XQb.gif",
    "https://nekocdn.com/images/wIBARQzm8.gif",
    "https://nekocdn.com/images/Jfi_KNP4-.gif",
    "https://nekocdn.com/images/eA5WyMA3.gif",
    "https://nekocdn.com/images/nMJVUeeq.gif",
    "https://nekocdn.com/images/tAKVExWd.gif",
    "https://nekocdn.com/images/rX6yArMaW.gif"
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dance")
        .setDescription("Baila o con un usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
        let dance = dancegif[Math.floor(Math.random() * dancegif.length)];
 
        if (!usuario) {
            const embed = new MessageEmbed()//definimos embed
            .setAuthor({name: `${interaction.user.username} está bailando.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(dance)
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} está bailando.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(dance)]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} está bailando con ${usuario.username}. :D`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(dance)
            
            interaction.reply({embeds: [embed2]});
        }
   }
}