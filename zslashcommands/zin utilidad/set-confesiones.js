const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const db = require("megadb")
const confesion = new db.crearDB("confesion")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup-confesiones")
        .setDescription("⚙️ Establece un canal de Confesiones")
        .addChannelOption(a => a.setName("canal").setDescription("Establece un canal de confesiones").setRequired(true)),
        
        async run(client, interaction){
            
        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
  

        const channel = interaction.options.getChannel("canal")

        if(channel.type !== "GUILD_TEXT") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> | El canal tiene que ser de Texto! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
        confesion.establecer(interaction.guild.id, channel.id)
        
        interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> | El canal de confesiones se ha establecido en ${channel}! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })

       }

    }