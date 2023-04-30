const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("jail")
        .setDescription("⛓️ Encarcela a un Usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres Encarcelar").setRequired(true)),
    async run(client, interaction){

    let user = interaction.options.getUser("usuario") 
    const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

    const embed= new Discord.MessageEmbed()
            .setAuthor(`Jail`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setDescription(`**${interaction.member} ha encarcelado a ${user}**`)
            .setImage(`https://some-random-api.ml/canvas/jail?avatar=${avatar}`)
            .setColor("e60ad4")
            
            

        interaction.reply({embeds: [embed]})
        
    }
  }
    
