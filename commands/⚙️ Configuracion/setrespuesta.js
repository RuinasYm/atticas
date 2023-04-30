const Setups = require('../../modelos/setups');
const Discord = require('discord.js')

module.exports = {
  name: "setrespuesta",
  alias: ["setuprespuesta",],
  desc: "Sirve para responder automaticamente a un palabra",
  uso: "!respuesta <enable> <disable> <palabra> <mensaje>",
  permisos: ["MANAGE_GUILD"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message, args, prefix) {
    // Comprobamos si el usuario ha proporcionado un argumento

    if (!message.member.permissions.has('MANAGE_GUILD')) {
      return message.reply({
        embeds: [
          new Discord.MessageEmbed()
            .setDescription(
              '**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**'
            )
            .setColor('e60ad4'),
        ],
      });
    }

    // Comprobar si el bot tiene permisos de administrador
    if (!message.guild.me.permissions.has('MANAGE_GUILD')) {
      return message.reply({
        embeds: [
          new Discord.MessageEmbed()
            .setDescription(
              '**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**'
            )
            .setColor('e60ad4'),
        ],
      });
    }

    if (!args.length) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
        .setColor("e60ad4")
        .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}respuesta\` \`<enable>\` \`<disable>\` \`<palabra>\` \`<mensaje>\`! | <:fail:1083542064924479549>`)
        ]
    });
    }

    // Buscamos la configuración del servidor en la base de datos
    let data = await Setups.findOne({ guildID: message.guild.id });
    if(!data) {
      // Si no se encuentra, creamos una nueva configuración
      let server = new Setups({
        saludosEnabled: false,
        guildID: message.guild.id,
      });
      await server.save();
    
      data = await Setups.findOne({ guildID: message.guild.id });
    }

    // Comprobamos si el usuario ha proporcionado la opción de deshabilitar
    if (args[0].toLowerCase() === 'disable') {
      if (!data.saludosEnabled) {
        return message.reply(`La respuesta automatica ya está deshabilitada <:coffe:1085588495172632638>.`)
      }
      // Actualizamos el valor de saludosEnabled a false
      await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        saludosEnabled: false
      });
      // Enviamos un mensaje confirmando la acción
      return message.reply(`Mensaje de respuesta automatica a la palabra **${data.saludosPalabra}** deshabilitados <:coffe:1085588495172632638>.`);
    }

    switch (args[0]) {
      case "enable":{
          if (data.saludosEnabled) {
              return message.reply({embeds: [new Discord.MessageEmbed()
                  .setAuthor({name: 'Respuesta activa en uso!', iconURL: client.user.displayAvatarURL({dynamic: true})})
                  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
              .setDescription(`> **Palabra:** \`${data.saludosPalabra}\`\n> **Mensaje:**\n> \`\`\`${data.saludosMensaje}\`\`\``)
              .setColor("e60ad4")
          .setFooter({text: 'Obten el premium para tener respuestas ilimitadas.', iconURL: 'https://cdn.discordapp.com/attachments/1078750371117289607/1085682581233729608/diamante.png'})], 
          components: [
              new Discord.MessageActionRow().addComponents(
                  [
                      new Discord.MessageButton()
                          .setStyle(`LINK`)
                          .setLabel(`Premium`)
                          .setURL('https://www.patreon.com/clubatticus'),
                  ],
                  [
                      new Discord.MessageButton()
                          .setStyle(`LINK`)
                          .setLabel(`Docs`)
                          .setURL("https://docs.clubatticus.ml/_/"),
                  ]
              )
          ]});
            }
          
          let embed = new Discord.MessageEmbed()
          .setColor("e60ad4")
          .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}respuesta\` \`<enable>\` \`<disable>\` \`<palabra>\` \`<mensaje>\`! | <:fail:1083542064924479549>`)


          let palabra = args[1]
          if(!palabra) return message.reply({
              embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar una palabra valida! | <:fail:1083542064924479549>`)]
          })

          let mensaje = args.slice(2).join(" ");
          if(!mensaje) return message.reply({
              embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un mensaje valido! | <:fail:1083542064924479549>`)]
          })

// Actualizamos el valor de mensajeEnabled a true
await Setups.findOneAndUpdate({guildID: message.guild.id}, {
  saludosEnabled: true,
  saludosPalabra: `${palabra}`,
  saludosMensaje: `${mensaje}`,

}).then(() => {
  return message.reply({embeds: [new Discord.MessageEmbed()
      .setAuthor({name: 'Respuesta habilitada', iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .setDescription(`> **Palabra:** \`${palabra}\`\n> **Mensaje:**\n> \`\`\`${mensaje}\`\`\``)
  .setColor("e60ad4")]});
}) 

}
break;
  
default:
break;
}
}
}

 
