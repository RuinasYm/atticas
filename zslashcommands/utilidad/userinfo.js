const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user-info")
        .setDescription("📣 Mira la informacion de un usuario!")
        .addUserOption(option => option.setName('usuario').setDescription('Ingresa un usuario').setRequired(true)),
        
    async run(client, interaction){

  let user = interaction.options.getUser('usuario')


  const start = new Discord.MessageEmbed()//embed Principal
  .setAuthor("User Info", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
  .setColor("e60ad4")//color del embed
  //footer del embed
  .setDescription(` > **Nombre:** ${user} \n > **ID:** \`${user.id}\` \n > **Etiqueta:** #\`${user.discriminator}\``)
  //La fecha en la que se envio el mensaje
 

    const row = new MessageActionRow()//Menu desplegable
    .addComponents(
        new MessageSelectMenu()
        .setPlaceholder(`Haz una selección`)
        .setCustomId("Select")
        .addOptions([
            {
                value: "Home",
                label: "Menu Principal",//primera opcion
                emoji: "🏡" 
            },
            {
               value: "Avatar",
               label: "Visualizar el Avatar",//segunda opcion
               emoji: "🤖"
            },
  
        ])
  
        
    )
  
  interaction.reply({ embeds: [start], components: [row] }).then(async(m) => {

    const collector = interaction.channel.createMessageComponentCollector({ filter: i => i.user.id === interaction.member.id});//el collector de los embeds del comando
    collector.on("collect", async(i) => {
        if(i.values[0] === "start"){
            i.update({ embeds: [start]})
        }
        if(i.values[0] === "Home"){
            i.update({ embeds: [Home]})
        }
        if(i.values[0] === "Avatar"){ 
            i.update({ embeds: [Avatar]})
        }
        
    })
  
    const Home = new Discord.MessageEmbed()//embed de la primera opcion del menu desplegable
    .setAuthor("User Info", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
    .setColor("e60ad4")//color del embed
    //footer del embed
    .setDescription(` > **Nombre:** ${user} \n > **ID:** \`${user.id}\` \n > **Etiqueta:** #\`${user.discriminator}\``)
    //La fecha en la que se envio el mensaje
   
 
    const Avatar = new Discord.MessageEmbed()//embed de la segunda opcion del menu desplegable
    .setAuthor(`Avatar`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
    .setDescription(`**Avatar de ${user}**`)
    .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setColor("e60ad4")
    
    
    const row = new MessageActionRow()//Menu desplegable

    }).catch(err =>{
        interaction.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  Ah ocurrido un error, Usa \`!report\` para Reportarlo! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })
        console.log(err)
    }) 
}

}
