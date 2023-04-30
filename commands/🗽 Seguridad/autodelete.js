const Setups = require('../../modelos/setups');
const Discord = require('discord.js')

module.exports = {
  name: "setautodelete",
  alias: ["setupautodelete", "autodelete"],
  desc: "Sirve para eliminar automaticamente un mensaje.",
  uso: "!delete <enable> <disable> <palabra> <mensaje>",
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
        .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}delete\` \`<enable>\` \`<disable>\``)
        ]
    });
    }

    // Buscamos la configuración del servidor en la base de datos
    let data = await Setups.findOne({ guildID: message.guild.id });
    if(!data) {
      // Si no se encuentra, creamos una nueva configuración
      let server = new Setups({
        deleteEnabled: false,
        guildID: message.guild.id,
      });
      await server.save();
    
      data = await Setups.findOne({ guildID: message.guild.id });
    }

    // Comprobamos si el usuario ha proporcionado la opción de deshabilitar
    if (args[0].toLowerCase() === 'disable') {
      if (!data.deleteEnabled) {
        return message.reply(`La delete automatica ya está deshabilitada <:coffe:1085588495172632638>.`)
      }
      // Actualizamos el valor de deleteEnabled a false
      await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        deleteEnabled: false
      });
      // Enviamos un mensaje confirmando la acción
      return message.reply(`Delete automatica deshabilitada <:coffe:1085588495172632638>.`);
    }

    switch (args[0]) {
      case "enable":{
          if (data.deleteEnabled) {
              return message.reply({embeds: [new Discord.MessageEmbed()
                  .setAuthor({name: 'Delete activa en uso!', iconURL: client.user.displayAvatarURL({dynamic: true})})
                  .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                  .setColor("e60ad4")
                  .setFooter({text: 'Obten el premium para tener deletes ilimitadas.', iconURL: 'https://cdn.discordapp.com/attachments/1078750371117289607/1085682581233729608/diamante.png'})], 
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
          .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}delete\` \`<enable>\` \`<disable>\``)


// Actualizamos el valor de mensajeEnabled a true
await Setups.findOneAndUpdate({guildID: message.guild.id}, {
  deleteEnabled: true,

}).then(() => {
  return message.reply({embeds: [new Discord.MessageEmbed()
      .setAuthor({name: 'Delete habilitada', iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
      .setColor("e60ad4")]});
}) 

}
break;
  
default:
break;
}
}
}

 
