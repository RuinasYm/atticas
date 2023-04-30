const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("horoscopo")
        .setDescription("♉ Descubre tu Horoscopo")
        .addStringOption((option) => {
            return option
                .setName("signo")
                .setDescription("Elije tu signo Sodiacal")
                .setChoices(
                    { name: "libra", value: "null" },
                    { name: "tauro", value: "null" },
                    { name: "cancer", value: "null" },
                    { name: "capricornio", value: "null" },
                    { name: "sagitario", value: "null" },
                    { name: "geminis", value: "null" },
                    { name: "piscis", value: "null" },
                    { name: "leo", value: "null" },
                    { name: "aries", value: "null" },
                    { name: "virgo", value: "null" },
                    { name: "escorpio", value: "null" },
                    { name: "acuario", value: "null" }

                )
                .setRequired(true)
        }),
    async run(client, interaction){


    let amor = Math.floor(Math.random() * 100)
    let dinero = Math.floor(Math.random() * 100)
    let salud = Math.floor(Math.random() * 100)
    let suerte = Math.floor(Math.random() * 100)
    let trabajo = Math.floor(Math.random() * 100)
    let sexo = Math.floor(Math.random() * 100)

    const embed = new Discord.MessageEmbed()
      .setDescription(`**Este es tu Horoscopo ${interaction.member}**\n\n > **💘 Amor:** \`${amor} %\`\n > **💰 Dinero** \`${dinero} %\`\n > **💉 Salud:** \`${salud} %\`\n > ** 🍀Suerte:** \`${suerte} %\`\n > ** 🧰Trabajo:** \`${trabajo} %\`\n > **<:girl4:1016175601108930631> Sexo:** \`${sexo} %\``)
      .setAuthor("Horoscopo", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
      
      .setColor("e60ad4")
      
    interaction.reply({ embeds: [embed] })
  }

}