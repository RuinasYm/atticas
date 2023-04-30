//mejorar embed
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("🎭 Mira el avatar de otro Usuario")
    .addUserOption(option => option.setName('member').setDescription('Menciona el usuario que veras el avatar').setRequired(false)),
    async run(client, interaction){
        const member = interaction.options.getMember("member") || interaction.member;

        const embed = new MessageEmbed()
        .setAuthor(`Avatar`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setColor("e60ad4")
        
        
        .setDescription(`**Avatar de ${interaction.member}**`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        await interaction.reply({ embeds: [embed] });
    }
}
