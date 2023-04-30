const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("set-prefix")
        .setDescription("🤖 Cambia el prefijo del Bot!")
        .addStringOption(option => option.setName("prefijo").setDescription("Indica el nuevo Prefijo").setRequired(true)),
        
    async run(client, interaction){

        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

 const prefijo = interaction.options.getString("prefijo") 

if(prefijo > 5) return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> | El prefix no puede tener mas de 4 Caracteres! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
  

 prefix_db.establecer(interaction.guild.id, prefijo)

 interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> | El prefix \`${prefijo}\` se establecio Correctamente! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })

 }

}  
