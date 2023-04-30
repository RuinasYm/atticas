const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("manco")
        .setDescription("🥴 Ve que tan manco Eres"),
    async run(client, interaction){

        const array = ["https://cdn.discordapp.com/attachments/995244061806039100/1019370889390866492/images_8.jpeg",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042197188555571310/manco1.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042197667939368982/manco2.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042197898772881448/manco3.gif",
        "https://cdn.discordapp.com/attachments/1030686591972282418/1042198564723494942/manco4.gif",]
        let probabilidad = Math.floor(Math.random() * 100)

        const embed = new Discord.MessageEmbed()
        .setAuthor("Manco", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setDescription(`${interaction.member} **Tu nivel de manco es de** \`${probabilidad}%\``)
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        
        .setColor("e60ad4")
        

        interaction.reply({ embeds: [embed] })
    }
} 