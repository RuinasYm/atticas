const Setups = require('../../modelos/setups');
const Discord = require('discord.js')

module.exports = {
  name: "antilinks",
  alias: [],
  desc: "Sirve para activar el anti links",
  uso: "!setantilinks enable",
  permisos: ["MANAGE_GUILD"],
  permisos_bot: ["MANAGE_MESSAGES"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message, args, prefix) {
    // Comprobamos si el usuario ha proporcionado un argumento
    if (!message.member.permissions.has('MANAGE_GUILD')) {
      return message.reply({
        embeds: [
          new Discord.MessageEmbed()
            .setDescription(
              '**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_GUILD\`**'
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
              '**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_GUILD\`**'
            )
            .setColor('e60ad4'),
        ],
      });
    }

    if (!args.length) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
        .setColor("e60ad4")
        .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}setantilinks\` \`<enable>\` \`<disable>\`! | <:fail:1083542064924479549>`)
        ]
    });
    }

    // Buscamos la configuración del servidor en la base de datos
    let data = await Setups.findOne({ guildID: message.guild.id });
    if(!data) {
      // Si no se encuentra, creamos una nueva configuración
      let server = new Setups({
        linksEnabled: false,
        guildID: message.guild.id,

      });
      await server.save();
    
      data = await Setups.findOne({ guildID: message.guild.id });
    }

              // Comprobamos si el usuario ha proporcionado la opción de habilitar
              if (args[0].toLowerCase() === 'disable') {
                // Comprobamos si el recordatorio ya estaba habilitado
                if (!data.linksEnabled) {
                    return message.reply('<:sucess:1083547524717101056> El **Anti-Links** ya esta desactivado.');
                }
                // Actualizamos el valor de recordatorioEnabled a false y recordatorioChannel a null
                await Setups.findOneAndUpdate({guildID: message.guild.id}, {
                    linksEnabled: false,
                });
                // Enviamos un mensaje confirmando la acción
                return message.reply('<:sucess:1083547524717101056> **Anti-Links** desactivado.');
              }
      
          switch (args[0]) {
            case "enable":{
                if (data.linksEnabled) {
                    return message.reply('<:sucess:1083547524717101056> El **Anti-Links** ya esta activo.');
                  }
                
    // Actualizamos el valor de welcomeEnabled a true
    await Setups.findOneAndUpdate({guildID: message.guild.id}, {
        linksEnabled: true,
    }).then(() => {
        return message.reply({embeds: [new Discord.MessageEmbed()
            .setAuthor({name: 'Anti-Links habilitado!', iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("e60ad4")
    ], 
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
        
  default:
      break;
  }


  }
  }
