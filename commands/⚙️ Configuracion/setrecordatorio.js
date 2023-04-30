const Setups = require('../../modelos/setups');
const Discord = require('discord.js');

module.exports = {
  name: "setrecordatorio",
  alias: ["setuprecordatorio",],
  desc: "Sirve para activar un recordatorio en el servidor",
  uso: "!recordatorio <enable> <disable> <canal> <cantidad> <mensaje>",
  permisos: ["MANAGE_GUILD"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message, args, prefix) {

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

      let metodos = ["enable", "disable"];
        if(!args || !metodos.includes(args[0])) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}recordatorio\` \`<enable>\` \`<disable>\` \`<canal>\` \`<cantidad\` \`<mensaje>\` | <:fail:1083542064924479549>`)
                .setColor("e60ad4")
            ]
        });

    // Buscamos la configuración del servidor en la base de datos
    let data = await Setups.findOne({ guildID: message.guild.id });
    if(!data) {
      // Si no se encuentra, creamos una nueva configuración
      let server = new Setups({
        recordatorioEnabled: false,
        recordatorioChannel:  null,
        guildID: message.guild.id,
      });
      await server.save();

    
      data = await Setups.findOne({ guildID: message.guild.id });
    }

    if (args[0].toLowerCase() === 'disable') {
        // Comprobamos si el recordatorio ya estaba habilitado
        if (!data.recordatorioEnabled) {
          return message.reply(`El recordatorio ya está deshabilitado <:coffe:1085588495172632638>.`)
        }
        // Actualizamos el valor de recordatorioEnabled a false y recordatorioChannel a null
        await Setups.findOneAndUpdate({guildID: message.guild.id}, {
          recordatorioEnabled: false,
          recordatorioChannel: null
        });
        // Enviamos un mensaje confirmando la acción
        return message.reply(`Recordatorio deshabilitado <:coffe:1085588495172632638>.`)
      }
      
        switch (args[0]) {
            case "enable":{
                if (data.recordatorioEnabled) {
                    return message.reply({embeds: [new Discord.MessageEmbed()
                        .setAuthor({name: 'Recordatorio activo en uso!', iconURL: client.user.displayAvatarURL({dynamic: true})})
                        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
                    .setDescription(`\n> **Canal:** <#${data.recordatorioChannel}>\n> **Cada:** \`${data.recordatorioCantidad}\` mensajes \n> **Mensaje:**\n> \`\`\`${data.recordatorioDescription}\`\`\``)
                    .setColor("e60ad4")
                .setFooter({text: 'Obten el premium para tener recordatorios ilimitados.', iconURL: 'https://cdn.discordapp.com/attachments/1078750371117289607/1085682581233729608/diamante.png'})], 
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
                .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}recordatorio\` \`<enable>\` \`<disable>\` \`<canal>\` \`<cantidad>\` \`<mensaje>\` | <:fail:1083542064924479549>`)

                let canal = message.guild.channels.cache.get(args[1]) || message.mentions.channels.first();
                if(!canal) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un canal valido! | <:fail:1083542064924479549>`)]
                })
                let cantidad = Number(args[2]);
                if(!cantidad || isNaN(cantidad) || cantidad < 0 || cantidad % 1 != 0) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar una cantidad valida! | <:fail:1083542064924479549>`)]
                })
                let mensaje = args.slice(3).join(" ");
                if(!mensaje) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un mensaje valido! | <:fail:1083542064924479549>`)]
                })

    // Actualizamos el valor de recordatorioEnabled a true
    await Setups.findOneAndUpdate({guildID: message.guild.id}, {
      recordatorioEnabled: true,
      recordatorioChannel: `${canal.id}`, // Obtenemos el ID del canal mencionado en el segundo argumento
      recordatorioCantidad: `${cantidad}`,
      recordatorioDescription: `${mensaje}`, // Unimos los argumentos desde el tercero hasta el final para obtener la descripción
    }).then(() => {
        return message.reply({embeds: [new Discord.MessageEmbed()
            .setAuthor({name: 'Recordatorio habilitado', iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`> **Canal:** ${canal}\n> **Cada:** \`${cantidad}\` mensajes \n> **Mensaje:**\n> \`\`\`${mensaje}\`\`\``)
        .setColor("e60ad4")]});
    }) 
  
  }
  break;
        
  default:
      break;
  }
}
}
