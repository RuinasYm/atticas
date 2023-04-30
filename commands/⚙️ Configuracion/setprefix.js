const schema = require(`../../modelos/servidor`)
const Discord = require('discord.js')

module.exports = {
    name: "setprefix",
    alias: ["setprefijo", "cambiarprefijo", "cambiarprefix"],
    desc: "Sirve para cambiar el Preijo del Bot en el Servidor",
    uso: "!setprefix <prefix>",
    permisos: ["MANAGE_GUILD"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args, prefix) {

      let data = await schema.findOne({ guildID: message.guild.id });
      if(!data) {
        // Si no se encuentra, creamos una nueva configuración
        let server = new schema({
          guildID: message.guild.id,
          prefijo: "!",
        });
        await server.save();
      
        data = await schema.findOne({ guildID: message.guild.id });
      }

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

        if(!args[0]) return message.reply(`**<:fail:1083542064924479549> |  Tienes que ingresar un nuevo prefijo para el servidor! | <:fail:1083542064924479549>**`)
        await schema.findOneAndUpdate({guildID: message.guild.id}, {
            prefijo: args[0]
        })
        return message.reply(`El prefix se ha actualizado de **"**\`${data.prefijo}\`**"** a **"**\`${args[0]}\`**"** <:coffe:1085588495172632638>.`)
    }
}

