const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName("invites")
      .setDescription("👤 mira las invites de un usuario.")
      .addUserOption(option => option.setName('member').setDescription('Menciona al usuario').setRequired(false)),
async run(client, interaction) {

    const user = interaction.options.getMember("member") || interaction.member;
        
    let invites = await interaction.guild.invites.fetch();
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id);

    let i = 0;
    userInv.forEach(inv => i += inv.uses);

    const embed = new Discord.MessageEmbed()
    .setColor("e60ad4")
    .setAuthor({name: `Invites`, iconURL: user.displayAvatarURL({dynamic: true})})
        .setDescription(`**${user.user.username}** tiene **${i}** invitaciones.`)

    await interaction.reply({ embeds: [embed]});
}
}