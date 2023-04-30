const Setups = require('../../modelos/setups');
const Discord = require('discord.js')

module.exports = {
  name: "setlogs",
  alias: ["setuplogs"],
  desc: "Sirve para activar los logs en el sevidor",
  uso: "!logs <enable> <disable> <canal>",
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
        .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}logs\` \`<enable>\` \`<disable>\` \`<canal>\`! | <:fail:1083542064924479549>`)
        ]
    });
    }

    // Buscamos la configuración del servidor en la base de datos
    let data = await Setups.findOne({ guildID: message.guild.id });
    if(!data) {
      // Si no se encuentra, creamos una nueva configuración
      let server = new Setups({
        logsEnabled: false,
        guildID: message.guild.id,
        logsChannel: null,
      });
      await server.save();
    
      data = await Setups.findOne({ guildID: message.guild.id });
    }

              // Comprobamos si el usuario ha proporcionado la opción de habilitar
              if (args[0].toLowerCase() === 'disable') {
                // Comprobamos si el recordatorio ya estaba habilitado
                if (!data.logsEnabled) {
                  return message.reply(`Los logs ya están deshabilitados <:coffe:1085588495172632638>.`)
                }
                // Actualizamos el valor de recordatorioEnabled a false y recordatorioChannel a null
                await Setups.findOneAndUpdate({guildID: message.guild.id}, {
                    logsEnabled: false,
                    logsChannel: null,
                });
                // Enviamos un mensaje confirmando la acción
                return message.reply(`Logs deshabilitados <:coffe:1085588495172632638>.`)
              }
      
          switch (args[0]) {
            case "enable":{
                if (data.logsEnabled) {
                    return message.reply({embeds: [new Discord.MessageEmbed()
                        .setAuthor({name: 'logs activos en uso!', iconURL: client.user.displayAvatarURL({dynamic: true})})
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setDescription(`\n> **Canal:** <#${data.logsChannel}>`)
                    .setColor("e60ad4")
                .setFooter({text: 'Obten el premium para separar los logs', iconURL: 'https://cdn.discordapp.com/attachments/1078750371117289607/1085682581233729608/diamante.png'})], 
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
                .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}recordatorio\` \`<enable>\` \`<disable>\` \`<canal>\` | <:fail:1083542064924479549>`)

                let canal = message.guild.channels.cache.get(args[1]) || message.mentions.channels.first();
                if(!canal) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un canal valido! | <:fail:1083542064924479549>`)]
                })


    // Actualizamos el valor de logsEnabled a true
    await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        logsEnabled: true,
        logsChannel: `${canal.id}`,

    }).then(() => {
        return message.reply({embeds: [new Discord.MessageEmbed()
        .setAuthor({name: 'Logs habilitados', iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`> **Canal:** ${canal}\n`)
        .setColor("e60ad4")]});
    }) 
  
  }
  break;
        
  default:
      break;
  }


  }
  }
