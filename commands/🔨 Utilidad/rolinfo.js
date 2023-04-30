const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "rolinfo",
  alias: ["rinfo"],
  desc: "Sirve para ver la informacion de un rol",
  uso: "!rolinfo (rol)",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args) {

const role = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first();


  if(!args[0]) return message.reply({
    embeds: [new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  Tienes que mencionar a un rol para ver su Informacion! | <:fail:1083542064924479549>**")
        .setColor("e60ad4")
    ]
})

  if(!role) return message.reply({
    embeds: [new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  El rol que ingresaste no es Valido! | <:fail:1083542064924479549>**")
        .setColor("e60ad4")
    ]
})
  //Modificalo a tu Gusto
  const start = new Discord.MessageEmbed()//embed Principal
  .setAuthor({name: "Rol Info", iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setColor("e60ad4")//color del embed
  //footer del embed
  .setDescription(`\n > **Nombre:** <@&${role.id}>\n > **ID:** \`${role.id}\`\n > **Color hex:** \`${role.hexColor}\`\n > **Creacion:** <t:${parseInt(role.createdTimestamp / 1000)}:f> (<t:${parseInt(role.createdTimestamp / 1000)}:R>)\n > **Usuarios con el rol:** \`${role.members.size} usuario(s)\`\n > **¿Mencionable?:** \`${role.mentionable ? "Si" : " No"}\``)
  //La fecha en la que se envio el mensaje
 

    const row = new MessageActionRow()//Menu desplegable
    .addComponents(
        new MessageSelectMenu()
        .setPlaceholder(`Selecciona una categoria`)
        .setCustomId("Select")
        .addOptions([
            {
                value: "Home",
                label: "Menu Principal",//primera opcion
                emoji: "<:home:1083518663405088818>" 
            },
            {
              value: "Roles",
              label: "Visualizar los Roles",//tercera opcion
              emoji: "<:atticus:1078753726044590190>"
           }
  
        ])
  
        
    )
  
  message.channel.send({ embeds: [start], components: [row] }).then(async(m) => {

    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id});//el collector de los embeds del comando
    collector.on("collect", async(i) => {
        if(i.values[0] === "start"){
            i.update({ embeds: [start]})
        }
        if(i.values[0] === "Home"){
            i.update({ embeds: [Home]})
        }
        if(i.values[0] === "Roles"){ 
          i.update({ embeds: [Roles]})
        }
        
    })
  
    const Home = new Discord.MessageEmbed()//embed de la primera opcion del menu desplegable
    .setAuthor({name: "Rol Info", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setColor("e60ad4")//color del embed
    //footer del embed
    .setDescription(`\n > **Nombre:** <@&${role.id}>\n > **ID:** \`${role.id}\`\n > **Color hex:** \`${role.hexColor}\`\n > **Creacion:** <t:${parseInt(role.createdTimestamp / 1000)}:f> (<t:${parseInt(role.createdTimestamp / 1000)}:R>)\n > **Usuarios con el rol:** \`${role.members.size} usuario(s)\`\n > **¿Mencionable?:** \`${role.mentionable ? "Si" : " No"}\``)
    //La fecha en la que se envio el mensaje
   
    const Roles = new Discord.MessageEmbed()//embed de la tercera opcion del menu desplegable
    .setAuthor({name: "Roles del Servidor", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`${message.guild.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition).map(r => r.toString()).join(" ' ")}`)
    .setColor("e60ad4")
    
    

    })
  }

}//Fin del Comando