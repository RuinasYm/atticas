const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("texthub")
        .setDescription("🧡 Texto en fondo Hub!")
        .addStringOption(o => o.setName("contenido").setDescription("Escribe el contenido a Transformar").setRequired(true)),
        
    async run(client, interaction, args){

        const contenido = interaction.options.getString("contenido")  
          
        let autor = interaction.member;
        
        let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${interaction.member.displayAvatarURL()}&text=${contenido}&username=${autor.user.tag}&raw=1`,'logo.png')
        
        interaction.reply({files: [attachment] })  
  }
}