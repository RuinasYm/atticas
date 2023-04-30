const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("uptime")
        .setDescription("⌛ Mira el tiempo que llevo Encendido"),
    

    async run(client, interaction){
        let dias = Math.floor(client.uptime / 86400000)
        let horas = Math.floor(client.uptime / 3600000) % 24
        let minutos = Math.floor(client.uptime / 60000) % 60
        let segundos = Math.floor(client.uptime / 1000) % 60
    
        const embed = new Discord.MessageEmbed()
        .setDescription(`Llevo prendido: \`${dias}\` dias \`${horas}\` horas \`${minutos}\` minutos y \`${segundos}\` segundos`)
        .setColor("e60ad4")
        
        
        interaction.reply({ embeds: [embed]})
    }
}
