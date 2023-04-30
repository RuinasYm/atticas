const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const day= require("dayjs")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server-info")
        .setDescription("📣 Mira la informacion del Servidor!"),
        
    async run(client, interaction){
 
  const createsv = day(interaction.guild.createdAt).format("DD/MM/YY")//creacion del &{createsv}
 
  const start = new Discord.MessageEmbed()//embed Principal
  .setAuthor(`Informacion del Servidor`, client.user.avatarURL())//Author del embed
  .setColor("e60ad4")//color del embed
  //footer del embed
  .setDescription(`\n > **Nombre:** \`${interaction.guild.name}\`\n > **ID:** \`${interaction.guild.id}\`\n > **Owner:** ${await interaction.guild.fetchOwner()}\n > **Miembros:** \`${interaction.guild.memberCount}\`\n > **Roles:** \`${interaction.guild.roles.cache.size}\`\n > **Canales:** \`${interaction.guild.channels.cache.size}\`\n > **Boosts:** \`${interaction.guild.premiumSubscriptionCount.toString()}\`\n > **Emojis:** \`${interaction.guild.emojis.cache.size}\`\n > **Creacion:** \`${createsv}\`\n > **Invitacion:** [**Click Aqui**](https://discord.gg/qj2xmdZCS5)`)//descripcion del embed
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
               value: "Emojis",
               label: "Visualizar los Emojis",//segunda opcion
               emoji: "🎭"
            },
            {
              value: "Roles",
              label: "Visualizar los Roles",//tercera opcion
              emoji: "🌀"
           }
  
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
        if(i.values[0] === "Emojis"){ 
            i.update({ embeds: [Emojis]})
        }
        if(i.values[0] === "Roles"){ 
          i.update({ embeds: [Roles]})
        }
        
    })
  
    const Home = new Discord.MessageEmbed()//embed de la primera opcion del menu desplegable
  .setAuthor(`Informacion del Servidor`, client.user.avatarURL())//Author del embed
  .setColor("e60ad4")
  
  .setDescription(`\n > **Nombre:** \`${interaction.guild.name}\`\n > **ID:** \`${interaction.guild.id}\`\n > **Owner:** ${await interaction.guild.fetchOwner()}\n > **Miembros:** \`${interaction.guild.memberCount}\`\n > **Roles:** \`${interaction.guild.roles.cache.size}\`\n > **Canales:** \`${interaction.guild.channels.cache.size}\`\n > **Boosts:** \`${interaction.guild.premiumSubscriptionCount.toString()}\`\n > **Emojis:** \`${interaction.guild.emojis.cache.size}\`\n > **Creacion:** \`${createsv}\`\n > **Invitacion:** [**Click Aqui**](https://discord.gg/qj2xmdZCS5)`)//descripcion del embed
   
 
    const Emojis = new Discord.MessageEmbed()//embed de la segunda opcion del menu desplegable
    .setAuthor(`Emojis del Servidor`, client.user.avatarURL())
    .setDescription(`${interaction.guild.emojis.cache.sort((a, b) => b.rawPosition - a.rawPosition).map(r => r.toString()).join(" ' ")}`)
    .setColor("e60ad4")
    
    

    const Roles = new Discord.MessageEmbed()//embed de la tercera opcion del menu desplegable
    .setAuthor(`Roles del Servidor`, client.user.avatarURL())
    .setDescription(`${interaction.guild.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition).map(r => r.toString()).join(" ' ")}`)
    .setColor("e60ad4")
    
    

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

}//Fin del Comando