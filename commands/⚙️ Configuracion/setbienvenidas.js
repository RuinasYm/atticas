const Setups = require('../../modelos/setups');
const Discord = require('discord.js')

module.exports = {
  name: "setbienvenidas",
  alias: ["setupbienvenidas",],
  desc: "Sirve para activar un mensaje de bienvenidas",
  uso: "!setbienvenidas <enable> <disable> <canal> <texto1> <texto2> <texto3>",
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
            .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}setbienvenidas\` \`<enable>\` \`<disable>\` \`<color>\` \`<embed>\`.`)
        ]
    });
    }

    // Buscamos la configuración del servidor en la base de datos
    let data = await Setups.findOne({ guildID: message.guild.id });
    if(!data) {
      // Si no se encuentra, creamos una nueva configuración
      let server = new Setups({
        bienvenidasEnabled: false,
        guildID: message.guild.id,
        bienvenidasChannel: null,
      });
      await server.save();
    
      data = await Setups.findOne({ guildID: message.guild.id });
    }

              // Comprobamos si el usuario ha proporcionado la opción de habilitar
              if (args[0].toLowerCase() === 'disable') {
                // Comprobamos si el recordatorio ya estaba habilitado
                if (!data.bienvenidasEnabled) {
                  return message.reply(`Las bienvenidas ya están deshabilitadas <:coffe:1085588495172632638>.`)
                }
                // Actualizamos el valor de recordatorioEnabled a false y recordatorioChannel a null
                await Setups.findOneAndUpdate({guildID: message.guild.id}, {
                    bienvenidasEnabled: false,
                    bienvenidasChannel: null,
                    bienvenidasTITULO: null,
                    bienvenidasDESCRIPCION: null,
                    bienvenidasCOLOR: null,
                });
                // Enviamos un mensaje confirmando la acción
                return message.reply(`bienvenidas deshabilitadas <:coffe:1085588495172632638>.`)
              }
      
          switch (args[0]) {
            case "enable":{
                if (data.bienvenidasEnabled) {
                    return message.reply({embeds: [new Discord.MessageEmbed()
                        .setAuthor({name: 'Bienvenidas activas en uso!', iconURL: client.user.displayAvatarURL({dynamic: true})})
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setDescription(`\n> **Canal:** <#${data.bienvenidasChannel}>`)
                    .setColor("e60ad4")
                .setFooter({text: 'Obten el premium para crear mas bienvenidas', iconURL: 'https://cdn.discordapp.com/attachments/1078750371117289607/1085682581233729608/diamante.png'})], 
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
                .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}setbienvenidas\` \`<enable>\` \`<canal>\` \`<texto1>\` \`<texto2>\` \`<texto3>\`.`)

                let canal = message.guild.channels.cache.get(args[1]) || message.mentions.channels.first();
                if(!canal) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un canal valido! | <:fail:1083542064924479549>`)]
                })

                let mensaje = args[2];
                if(!mensaje) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un mensaje valido! | <:fail:1083542064924479549>`)]
                })

                let usuario = args[3];
                if(!usuario) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un mensaje valido! | <:fail:1083542064924479549>`)]
                })

                let footer =args.slice(4).join(" ");
                if(!footer) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un mensaje valido! | <:fail:1083542064924479549>`)]
                })
                if (message.attachments.size == 0) {
                    return message.reply({
                      embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Debes adjuntar un archivo! | <:fail:1083542064924479549>`)]
                    })
                  }

                let link = message.attachments.first().url;


    // Actualizamos el valor de bienvenidasEnabled a true
    await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        bienvenidasEnabled: true,
        bienvenidasChannel: `${canal.id}`,
        bienvenidasMSG: `${mensaje}`,
        bienvenidasCOUNT: `${footer}`,
        bienvenidasUSER: `${usuario}`,
        bienvenidasFONDO: `${link}`
    }).then(() => {
        return message.reply({embeds: [new Discord.MessageEmbed()
        .setAuthor({name: 'Bienvenidas habilitadas', iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`> **Canal:** ${canal}\n`)
        .setColor("e60ad4")], 
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
    }) 
  
  }
  break;
  
  case "color":{ 
                let embed = new Discord.MessageEmbed()
                .setColor("e60ad4")
                .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}setbienvenidas\` \`<color>\` \`<color-circulo>\` \`<color-texto1>\` \`<color-texto2>\` \`<color-texto3>\`.`)

                let circulo = args[1];
                if(!/^#([0-9A-F]{3}){1,2}$/i.test(circulo)) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un color en HEX valido! | <:fail:1083542064924479549>`)]
                })

                let TEXTO1 = args[2];
                if(!/^#([0-9A-F]{3}){1,2}$/i.test(TEXTO1)) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un color en HEX valido! | <:fail:1083542064924479549>`)]
                })

                let TEXTO2 = args[3];
                if(!/^#([0-9A-F]{3}){1,2}$/i.test(TEXTO2)) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un color en HEX valido! | <:fail:1083542064924479549>`)]
                })

                let TEXTO3 = args[4];
                if(!/^#([0-9A-F]{3}){1,2}$/i.test(TEXTO3)) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un color en HEX valido! | <:fail:1083542064924479549>`)]
                })

    // Actualizamos el valor de bienvenidasEnabled a true
    await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        bienvenidasCIRCULO: `${circulo}`,
        bienvenidasTEXTO1: `${TEXTO1}`,
        bienvenidasTEXTO2: `${TEXTO2}`,
        bienvenidasTEXTO3: `${TEXTO3}`
    }).then(() => {
        return message.reply('<:sucess:1083547524717101056> **Colores** aplicados!.') })
    }
    break;
    case "embed":{
                        let embed = new Discord.MessageEmbed()
                .setColor("e60ad4")
                .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}setbienvenidas\` \`<embed>\` \`<titulo>\` \`<descripcion>\` \`<color>\`.`)

                let titulo = args[1];
                if(!titulo) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un titulo valido! | <:fail:1083542064924479549>`)]
                })

                let descripcion = args[2];
                if(!descripcion) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar una descripcion valido! | <:fail:1083542064924479549>`)]
                })

                let color = args[3];
                if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
                  return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un color en HEX valido! | <:fail:1083542064924479549>`)]
                  });
                }

    // Actualizamos el valor de bienvenidasEnabled a true
    await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        bienvenidasTITULO: `${titulo}`,
        bienvenidasDESCRIPCION: `${descripcion}}`,
        bienvenidasCOLOR: `${color}`,
    }).then(() => {
        return message.reply('<:sucess:1083547524717101056> **Embed** aplicado!.') })
    }   
    break;
  default:
      break;
  }


  }
  }
