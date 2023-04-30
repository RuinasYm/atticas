const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

var killgif = [
    "https://nekocdn.com/images/fA_3CqGmB.gif",
    "https://nekocdn.com/images/HNnrdYke.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/512X1rBhh.gif",
    "https://nekocdn.com/images/GS63a0Pu.gif",
    "https://nekocdn.com/images/WA_K5JBL.gif",
    "https://nekocdn.com/images/NZ7EEI0MJ.gif",
    "https://nekocdn.com/images/GinvSokV.gif",
    "https://nekocdn.com/images/7Q9dBd_a.gif",
    "https://cdn.discordapp.com/attachments/935312383109369939/976615544251895808/unknown.png"

];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kill")
        .setDescription("Mata a un usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
        let kill = killgif[Math.floor(Math.random() * killgif.length)];
 
        if (!usuario) {
            const embed = new Discord.MessageEmbed()
            .setAuthor({name: `${interaction.user.username} se acaba de suicidar`, iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("RANDOM")
            .setImage(`${kill}`)
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} se acaba de suicidar`, iconURL: client.user.displayAvatarURL({dynamic: true})})
                    .setColor("RANDOM")
                    .setImage(`${kill}`)
            ]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} acaba de matar a ${usuario.username}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("RANDOM")
            .setImage(`${kill}`)
            interaction.reply({embeds: [embed2]});
        }
   }
}

