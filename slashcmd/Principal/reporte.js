const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reporte")
        .setDescription("⚠️ reporta un problema")
        .addStringOption(option => option.setName("razon").setDescription("razon del reporte").setRequired(true)),

    async run(client, interaction){

        let e = new Discord.MessageEmbed()

        const razon = interaction.options.getString("razon") 

      const embed = new Discord.MessageEmbed()
      .setAuthor({name: 'Reporte', iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setDescription(` > **Nuevo reporte de:** ${interaction.member}\n > **Razón:** \`${razon}\``)
      .setColor("e60ad4")
      
    client.channels.cache.get('1083544644668895274').send({embeds: [embed]})
    interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> |  Se envio correctamente tu Reporte! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })
  }
}