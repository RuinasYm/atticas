const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("✍️ Genera un link de invitacion")
    .addStringOption((option) => {
        return option
            .setName("opciones")
            .setDescription("✍️ → invite")
            .setChoices(
                { name: "✍️ → Invite Server", value: "1" },
                { name: "✍️ → Invite Channel", value: "2" }

            )
            .setRequired(true)
    }),
        
    async run(client, interaction){

        let selecion = interaction.options.getString("opciones")

        if (selecion) {
            if (selecion === "1") {         
                const embed = new MessageEmbed()
                .setAuthor("Invite", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setDescription(`**Invitacion del servidor** \`${interaction.guild.name}\`\n > **Link:** \`https://discord.gg/K6rB4pQ2jB\``)   
                
                .setColor("e60ad4")
                .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1050916914777571469/clubatticus.png")

                interaction.reply({embeds: [embed]}) } else { }
            
        if (selecion === "2") { 
            interaction.channel.createInvite({ maxAge: 0, MaxUses: 5 }).then(link => {        
            const embed = new MessageEmbed()
            .setAuthor("Invite", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setDescription(`**Invitacion del canal ** \`${interaction.channel.name}\`\n > **Link:** \`${link}\``)   
            
            .setColor("e60ad4")
            .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1050916914777571469/clubatticus.png")

            interaction.reply({embeds: [embed]}) })} }


                
            }
        }
     
        