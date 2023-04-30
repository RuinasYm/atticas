const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("💬 Envia un mensaje desde el bot")
        .addStringOption(option => option.setName("mensaje").setDescription("Contenido a Enviar").setRequired(true)),

    async run(client, interaction){

        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })


       let escribe = interaction.options.getString("mensaje")

const embed = new Discord.MessageEmbed()
.setDescription(`${escribe}`)
.setColor("e60ad4")

interaction.reply({embeds: [embed] })
    
  }

}