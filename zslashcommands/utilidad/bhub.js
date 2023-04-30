const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hub")
        .setDescription("💛 Busca algo en PornHub")
        .addStringOption(option => option.setName("busqueda").setDescription("Contenido a Buscar").setRequired(true)),

    async run(client, interaction){
    let porn = interaction.options.getString("busqueda") 


const embed = new Discord.MessageEmbed()
            .setImage(`https://3.bp.blogspot.com/-CRgUeWpqlUE/W4eG4TWP9pI/AAAAAAAAeeA/ZTaoug-OJw0Q_b2KoCYHwl9X8r9vxUfvACLcBGAs/s400/Unknown.png`)
            .setAuthor("Busqueda Hub", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            
            
            .setDescription(`\n > **Busqueda:** \`${porn}\`\n > **Resultado:** [Click Aqui](https://es.pornhub.com/video/search?search=${porn})`)
            
            interaction.reply({ embeds: [embed] })
       }
    } 
    