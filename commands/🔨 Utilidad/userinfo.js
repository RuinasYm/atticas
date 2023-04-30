const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "userinfo",
    alias: ["uinfo"],
    desc: "Sirve para ver la informacion de un usuario",
    uso: "!userinfo o !userinfo (usuario)",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

async execute (client, message, args){

  const usuario = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  const start = new Discord.MessageEmbed()//embed Principal
  .setAuthor({name: "User Info", iconURL: usuario.displayAvatarURL({dynamic: true})})
  .setColor("e60ad4")//color del embed
  .setDescription(` > **Nombre:** ${usuario} \n > **ID:** \`${usuario.user.id}\` \n > **Etiqueta:** #\`${usuario.user.discriminator}\``)
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
               value: "Avatar",
               label: "Visualizar el Avatar",//segunda opcion
               emoji: "<:atticus:1078753726044590190>"
            },
  
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
        if(i.values[0] === "Avatar"){ 
            i.update({ embeds: [Avatar]})
        }
        
    })
  
    const Home = new Discord.MessageEmbed()//embed de la primera opcion del menu desplegable
    .setAuthor({name: "User Info", iconURL: usuario.displayAvatarURL({dynamic: true})})
    .setColor("e60ad4")//color del embed
    //footer del embed
    .setDescription(` > **Nombre:** ${usuario} \n > **ID:** \`${usuario.user.id}\` \n > **Etiqueta:** #\`${usuario.user.discriminator}\``)
    //La fecha en la que se envio el mensaje
   
 
    const Avatar = new Discord.MessageEmbed()//embed de la segunda opcion del menu desplegable
    .setAuthor({name: "Avatar", iconURL: usuario.displayAvatarURL({dynamic: true})})
    .setDescription(`**Avatar de ${usuario}**`)
    .setImage(usuario.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setColor("e60ad4")
    
    

    })
}

}
