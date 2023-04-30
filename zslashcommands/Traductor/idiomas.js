const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const translate = require ("translate-google")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
      .setName("traductor")
      .setDescription("🔁 Traduce un Texto")
      .addStringOption((option) => {
        return option
            .setName("idioma")
            .setDescription("Elije un idioma para Traducir")
            .setChoices(
                { name: "🔁 → en (texto a ingles)", value: "1" },
                { name: "🔁 → es (texto a español)", value: "2" },
                { name: "🔁 → fr (texto a frances)", value: "3" },
                { name: "🔁 → rs (texto a ruso)", value: "4" },
                { name: "🔁 → tr (texto a Turco)", value: "5" },
            )
            .setRequired(true)
    })
    .addStringOption((option) => {
        return option
            .setName("texto")
            .setDescription("Dijita el texto a traducir")
            .setRequired(true)
    }),

async run(client, interaction, args) {

    let e = new MessageEmbed()

    if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

    let idiomas = interaction.options.getString("idioma")
    const es = interaction.options.getString('es')
    const en = interaction.options.getString('en')
    const fr = interaction.options.getString('fr')
    const rs = interaction.options.getString('rs')
    const tr = interaction.options.getString('tr')
    const texto = interaction.options.getString('texto')

    if (idiomas) {
        if (idiomas === "1") { translate(texto, {to: 'en'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Traductor En", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            .setDescription(` >  ${res} `)    
            interaction.reply({ embeds: [embed] })
        })     } else { }
        if (idiomas === "2") { translate(texto, {to: 'es'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Traductor Es", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            .setDescription(` >  ${res} `)    
            interaction.reply({ embeds: [embed] })
        })     } else { }
        if (idiomas === "3") { translate(texto, {to: 'fr'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Traductor Fr", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            .setDescription(` >  ${res} `)    
            interaction.reply({ embeds: [embed] })
        })     } else { }
        if (idiomas === "4") { translate(texto, {to: 'ru'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Traductor Rs", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            .setDescription(` >  ${res} `)    
            interaction.reply({ embeds: [embed] })
        }).catch(err =>{
            interaction.reply({
                embeds: [new Discord.MessageEmbed()
                    .setThumbnail("https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setTitle("<:fail:1083542064924479549> | Error | <:fail:1083542064924479549>")
                    .setDescription("**Ah ocurrido un error\n > Usa:** \`!report\` para Reportarlo! ")
                    .setColor("e60ad4")
                ]
            })
            console.log(err)
        })      } else { }
        if (idiomas === "5") { translate(texto, {to: 'tr'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Traductor Tr", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            .setDescription(` >  ${res} `)    
            interaction.reply({ embeds: [embed] })
        })     } else { }
  
    } else { }
    }

}