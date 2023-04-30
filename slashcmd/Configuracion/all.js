const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const schema = require(`../../modelos/servidor`)
const config = require('../../config/config.json')
module.exports = {
    data: new SlashCommandBuilder()
        .setName("config")
        .setDescription("Comandos de configuracion")
        .addSubcommand(subcommand =>
                subcommand
                .setName("prefix")
                .setDescription("🤖 Cambia el prefijo del Bot!")
                .addStringOption(option => option.setName("prefijo").setDescription("Indica el nuevo Prefijo").setRequired(true))
                ),          
        
    async run(client, interaction, prefix){
        if (interaction.options.getSubcommand() === "prefix"){

            let data = await schema.findOne({ guildID: interaction.guild.id });
            if(!data) {
              // Si no se encuentra, creamos una nueva configuración
              let server = new schema({
                guildID: interaction.guild.id,
                prefijo: "!",
              });
              await server.save();
            
              data = await schema.findOne({ guildID: interaction.guild.id });
            }
        const prefijo = interaction.options.getString("prefijo") 

        if (!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
          ], ephemeral: true})
          if(!interaction.guild.me.permissions.has("MANAGE_GUILD"))return interaction.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
        ], ephemeral: true})

        if(!prefijo) return interaction.reply(`**<:fail:1083542064924479549> |  Tienes que ingresar un nuevo prefijo para el servidor! | <:fail:1083542064924479549>**`)
      
        await schema.findOneAndUpdate({guildID: interaction.guild.id}, {
            prefijo: `${prefijo}`
        })
        return interaction.reply(`El prefix se ha actualizado de **"**\`${data.prefijo}\`**"** a **"**\`${prefijo}\`**"** <:coffe:1085588495172632638>.`)

        }

    }
}
