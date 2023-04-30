const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pared")
        .setDescription("🧱 Pon una Pared"),
    async run(client, interaction){

        const array = ["https://cdn.discordapp.com/attachments/1014748725110902904/1019485194329260072/lv_0_20220914004750.gif",]
        let pared = array[Math.floor(Math.random() * array.length)];

        const embed = new Discord.MessageEmbed()
        .setAuthor("Pared", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setDescription(`**${interaction.member} Acabo de poner pared**`)
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        
        .setColor("e60ad4")
        

        interaction.reply({ embeds: [embed] })
    }
} 