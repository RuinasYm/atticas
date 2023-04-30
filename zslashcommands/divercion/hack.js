const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
      .setName("hack")
      .setDescription("👨🏻‍💻 Hackea a un Usuario")
      .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres hackear").setRequired(true)),
  async run(client, interaction){

    let usuario = interaction.options.getUser("usuario") 

        let ip = Math.floor(Math.random() * 91)
        let ip1 = Math.floor(Math.random() * 81)
        let ip2 = Math.floor(Math.random() * 54)
        let ip3 = Math.floor(Math.random() * 48)
        let numero = Math.floor(Math.random() * 10)
        let numero1 = Math.floor(Math.random() * 50)
        let numero2 = Math.floor(Math.random() * 70)
        let numero3 = Math.floor(Math.random() * 70)
        let numero4 = Math.floor(Math.random() * 70)

        
        let correo = [
            "@gmail.com", "@gmail.co", "@outlook.es", "@outlook.com", "@outlook.co", "@hotmail.es"
          ] 
    
        let finalcorreo = correo[Math.floor(Math.random() * correo.length)] 
        
        let mensaje = await interaction.reply({
          embeds: [new MessageEmbed()
              .setAuthor("Hack", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
              .setDescription(`**<a:loading:1042597104490655794> | ${interaction.member} esta hackeando a ${usuario}**`)
              .setColor("e60ad4")
           ]

      })
      setTimeout(() => {
        interaction.editReply({
              embeds: [new MessageEmbed()
                .setAuthor("Hack", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setDescription(`**${interaction.member} ha hackeado a ${usuario}**\n\n > **IP:** \`${ip}.${ip1}.${ip2}.${ip3}\`\n > **Gmail:** \`${usuario.tag}${finalcorreo}\`\n > **Contraseña:** \`${numero}${numero1}${numero2}${numero3}${numero4}\``)
                .setColor("e60ad4")
              ]
            })
          }, 8000) 
            
    }
}