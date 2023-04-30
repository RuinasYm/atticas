const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

var sleepgif = [
    "https://nekocdn.com/images/Y4_zbL2j.gif",
    "https://nekocdn.com/images/bZO8JPuE.gif",
    "https://nekocdn.com/images/UiHZmxit.gif",
    "https://i.pinimg.com/originals/f1/5e/3e/f15e3e84c6fc6ef01419fa7fab86b571.gif"
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("sleep")
        .setDescription("Duerme o con un usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
        let sleep = sleepgif[Math.floor(Math.random() * sleepgif.length)];
 
        if (!usuario) {
            const embed = new MessageEmbed()//definimos embed
            .setAuthor({name: `${interaction.user.username} se mimió o tiene sueño.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(sleep)
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} se mimió o tiene sueño.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(sleep)
                ]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} se fue a mimir con ${usuario.username}. (-, - )…zzzZZZ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(sleep)
            interaction.reply({embeds: [embed2]});
        }
   }
}