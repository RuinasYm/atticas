const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const db = require("megadb")
const reporte = new db.crearDB("reporte")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup-reportes")
        .setDescription("⚙️ Establece un canal de Reportes")
        .addChannelOption(a => a.setName("canal").setDescription("Establece un canal de Reportes").setRequired(true)),
        
        async run(client, interaction){

            let e = new Discord.MessageEmbed()

            if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
  

        const channel = interaction.options.getChannel("canal")

        if(channel.type !== "GUILD_TEXT") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> | El canal tiene que ser de Texto! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
        reporte.establecer(interaction.guild.id, channel.id)
        
        interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> | El canal de reportes se ha establecido en ${channel}! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })

       }

    }