const { SlashCommandBuilder } = require('@discordjs/builders')
const { DiscordAPIError } = require('@discordjs/rest')
const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("donwload")
        .setDescription("🌸 → Load a Donwloa")
        .addChannelOption((option) => {
            return option
                .setName("canal")
                .setDescription("Elije el canal donde se enviara el embed")
                .addChannelTypes(0)
                .setRequired(true)
        })
        .addStringOption((option) => {
            return option
                .setName("name")
                .setDescription("🌸 → Ingresa un nombre")
        
                .setRequired(true)
        })
   
      .addStringOption((option) => {
        return option
            .setName("description")
            .setDescription("🌸 → Ingresa una descripcion")
            .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("link")
            .setDescription("🌸 → Ingresa el link")
    
            .setRequired(true)
    })
    .addStringOption((option) => {
        return option
            .setName("image")
            .setDescription("🌸 → Ingresa el link")
    
            .setRequired(true)
    })

    ,
    async run(fur, interaction) {


        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

    let e = new MessageEmbed()
    let canal = interaction.options.getChannel("canal")
    const name = interaction.options.getString('name')
    const descrip = interaction.options.getString('description')
    const pais = interaction.options.getString('link')
    const img = interaction.options.getString('image')
    const embed = new Discord.MessageEmbed()
.setAuthor({name: `${name}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
.setColor("e60ad4")
.setDescription(`\n> [${descrip}](${pais})\n\n> **Pagina:**\n> https://docs.clubatticus.ml/`)
.setImage(img)
let m = await canal.send({ embeds: [embed] })
interaction.reply({ embeds: [e.setDescription("**Se envio correctamente el **" + `[embed](${m.url})`).setColor("e60ad4")], ephemeral: true })
    
    }

}