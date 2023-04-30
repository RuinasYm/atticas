const { SlashCommandBuilder } = require('@discordjs/builders')
const { DiscordAPIError } = require('@discordjs/rest')
const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("presentacion")
        .setDescription("🌸 → Presentate en el Servidor")
        .addStringOption((option) => {
            return option
                .setName("nombre")
                .setDescription("🌸 → Ingresa tu nombre")
        
                .setRequired(true)
        })
        .addStringOption((option) => {
          return option
              .setName("edad")
              .setDescription("🌸 → Ingresa tu edad")
      
              .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("genero")
            .setDescription("🌸 → Ingresa tu Genero")
            .setChoices(
                { name: "🌸 → Femenino", value: "Femenino" },
                { name: "🌸 → Masculino", value: "Masculino" },
                { name: "🌸 → No Binario", value: "No Binario" }
            )
            .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("sexualidad")
            .setDescription("🌸 → Ingresa tu Sexualidad")
            .setChoices(
                { name: "🌸 → Heterosexual", value: "Heterosexual" },
                { name: "🌸 → Homosexual", value: "Homosexual" },
                { name: "🌸 → Bisexual", value: "Bisexual" },
                { name: "🌸 → Pansexual", value: "Pansexual" },
                { name: "🌸 → Asexual", value: "Asexual" },
                { name: "🌸 → No Binario", value: "No Binario" }
                
            )
            .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("cumpleaños")
            .setDescription("🌸 → Ingresa tu cumpleaños")
            .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("pais")
            .setDescription("🌸 → Ingresa tu pais")
    
            .setRequired(true)
    })
    .addStringOption((option) => {
      return option
          .setName("altura")
          .setDescription("🌸 → Ingresa tu altura")
  
          .setRequired(true)
  })
  .addStringOption((option) => {
    return option
        .setName("comida-favorita")
        .setDescription("🌸 → Ingresa tu comida favorita")

        .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("animal-favorito")
      .setDescription("🌸 → Ingresa tu animal favorito")
      .setRequired(true)
})

.addStringOption((option) => {
  return option
      .setName("color-favorito")
      .setDescription("🌸 → Ingresa tu color favorito")
      .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("musica-favorita")
      .setDescription("🌸 → Ingresa tu musica favorita")
      .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("juego-favorito")
      .setDescription("🌸 → Ingresa tu juego favorito")
      .setRequired(true)
})

.addStringOption((option) => {
  return option
      .setName("tus-gustos")
      .setDescription("🌸 → Ingresa lo que mas te guste de ti")
      .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("md")
      .setDescription("🌸 → Indica tu Md")
      .setChoices(
          { name: "🌸 → Abierto", value: "Abierto" },
          { name: "🌸 → Cerrado", value: "Cerrado" },
          { name: "🌸 → Abierto (Solo Chicas)", value: "Abierto" },
          { name: "🌸 → Abierto (Solo Chicos)", value: "Abierto" },
          
      )
      .setRequired(true)
})

    ,
    async run(client, interaction, member) {

    let e = new Discord.MessageEmbed()

    const name = interaction.options.getString('nombre')
    const edad = interaction.options.getString('edad')
    const genero = interaction.options.getString('genero')
    const sexualidad = interaction.options.getString('sexualidad')
    const cumpleaños = interaction.options.getString('cumpleaños')
    const pais = interaction.options.getString('pais')
    const altura = interaction.options.getString('altura')
    const comida = interaction.options.getString('comida-favorita')
    const animal = interaction.options.getString('animal-favorito')
    const color = interaction.options.getString('color-favorito')
    const musica = interaction.options.getString('musica-favorita')
    const juego = interaction.options.getString('juego-favorito')
    const gusto = interaction.options.getString('tus-gustos')
    const md = interaction.options.getString('md')

    const embed = new Discord.MessageEmbed()
.setAuthor({name: `Presentacion de ${interaction.user.username}\n`, iconURL: interaction.member.displayAvatarURL({ dynamic: true})})
.setColor("e60ad4")
.setThumbnail(interaction.member.displayAvatarURL({ dynamic: true}))
.setDescription(`> ↬ ♡ **Nombre:** ${name}\n > ↬ ♡ **Edad:** ${edad}\n > ↬ ♡ **Genero:** ${genero}\n > ↬ ♡ **Sexualidad:** ${sexualidad}\n > ↬ ♡ **Cumpleaños:** ${cumpleaños}\n > ↬ ♡ **Pais:** ${pais}\n > ↬ ♡ **Altura:** ${altura}\n > ↬ ♡ **Comida Fav:** ${comida}\n > ↬ ♡ **Animal Fav:** ${animal}\n > ↬ ♡ **Color Fav:** ${color}\n > ↬ ♡ **Musica Fav:** ${musica}\n > ↬ ♡ **Juego Fav:** ${juego}\n > ↬ ♡ **Mis Gustos:** ${gusto}\n > ↬ ♡ **Md:** ${md}`)
 
await client.channels.cache.get("1073808907467759777").send({ embeds: [embed] })
await interaction.reply({ embeds: [e.setDescription(`[Presentacion](https://discord.com/channels/1067233169184657438/1073808907467759777) enviada correctamente`).setColor("e60ad4")], ephemeral: true })    
    
    }

}