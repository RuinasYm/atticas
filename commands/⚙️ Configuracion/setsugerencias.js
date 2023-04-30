const Setups = require('../../modelos/setups');
const Discord = require('discord.js')

module.exports = {
  name: "setsugerencias",
  alias: ["setupsugerencias",],
  desc: "Sirve para responder automaticamente a un palabra",
  uso: "!setsugerencias <enable> <disable> <canal>",
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
        .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}sugerencias\` \`<enable>\` \`<disable>\` \`<canal>\`! | <:fail:1083542064924479549>`)
        ]
    });
    }

    // Buscamos la configuración del servidor en la base de datos
    let data = await Setups.findOne({ guildID: message.guild.id });
    if(!data) {
      // Si no se encuentra, creamos una nueva configuración
      let server = new Setups({
        sugerenciasEnabled: false,
        sugerenciasChannel: null,
        guildID: message.guild.id,
      });
      await server.save();
    
      data = await Setups.findOne({ guildID: message.guild.id });
    }
    // Comprobamos si el usuario ha proporcionado la opción de deshabilitar
    if (args[0].toLowerCase() === 'disable') {

        if (!data.sugerenciasEnabled) {
            return message.reply(`Las sugerencias ya estan deshabilitadas <:coffe:1085588495172632638>.`)
        }
      // Actualizamos el valor de sugerenciasEnabled a false
      await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        sugerenciasEnabled: false
      });
      // Enviamos un mensaje confirmando la acción
      return message.reply(`Sugerencias deshabilitadas <:coffe:1085588495172632638>.`);
    }

    switch (args[0]) {
      case "enable":{
          if (data.sugerenciasEnabled) {
              return message.reply({embeds: [new Discord.MessageEmbed()
                  .setAuthor({name: 'Sistema activo en uso!', iconURL: client.user.displayAvatarURL({dynamic: true})})
                  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
              .setDescription(`> **Canal:** <#${data.sugerenciasChannel}>\n> \n> Deshabilita este sistema para usarlo en otro canal.`)
              .setColor("e60ad4")
          .setFooter({text: 'Obten el premium para tener sistemas ilimitados.', iconURL: 'https://cdn.discordapp.com/attachments/1078750371117289607/1085682581233729608/diamante.png'})], 
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
          .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}setsugerencias\` \`<enable>\` \`<disable>\` \`<canal>\`! | <:fail:1083542064924479549>`)


          let canal = message.guild.channels.cache.get(args[1]) || message.mentions.channels.first();
          if(!canal) return message.reply({
              embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un canal valido! | <:fail:1083542064924479549>`)]
          })


// Actualizamos el valor de mensajeEnabled a true
await Setups.findOneAndUpdate({guildID: message.guild.id}, {
    sugerenciasEnabled: true,
    sugerenciasChannel: canal,
    guildID: message.guild.id,

}).then(() => {
  return message.reply({embeds: [new Discord.MessageEmbed()
      .setAuthor({name: 'Sugerencias habilitadas', iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
  .setDescription(`> **Canal:** ${canal}`)
  .setColor("e60ad4")]});
}) 

}
break;
  
default:
break;
}
}
}

 
