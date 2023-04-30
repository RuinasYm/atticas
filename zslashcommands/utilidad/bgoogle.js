const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("google")
        .setDescription("🌐 Busca algo en Google")
        .addStringOption(option => option.setName("busqueda").setDescription("Contenido a Buscar").setRequired(true)),

    async run(client, interaction){

    let google = interaction.options.getString("busqueda") 


const embed = new Discord.MessageEmbed()
            .setImage(`https://cdn.discordapp.com/attachments/1030686591972282418/1043264490495541248/nuevo-logo-de-google.jpg`)
            .setAuthor("Busqueda Google", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            
            
            .setDescription(`\n > **Busqueda:** \`${google}\`\n > **Resultado:** [Click Aqui](https://www.google.com/search?q=${google})`)
            
            interaction.reply({ embeds: [embed] })
       }
    } 
    