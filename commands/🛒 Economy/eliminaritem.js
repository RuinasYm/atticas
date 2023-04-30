const Item = require('../../modelos/item');
const Discord = require('discord.js')

module.exports = {
  name: 'eliminaritem',
  alias: ["quitaritem", "removeitem"],
  description: 'Elimina un item de la tienda',
  uso: '!eliminaritem <id>',
  permisos: ['MANAGE_GUILD'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  async execute (client, message, args, prefix)  {

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

    if(args.length < 1) {
      let embed = new Discord.MessageEmbed()
        .setColor("e60ad4")
        .setDescription(`<:fail:1083542064924479549> |  Uso correcto: ${prefix}eliminaritem \`<id>\` | <:fail:1083542064924479549>`);
      return message.reply({
        embeds: [embed]
      });
    }

    // Obtener el id del artículo a eliminar
    let id = Number(args[0]);
    if(!id || isNaN(id) || id < 0 || id % 1 != 0) return message.reply({
        embeds: [new Discord.MessageEmbed()
          .setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un id válido! | <:fail:1083542064924479549>`)]
    })

    // Buscar el artículo en la base de datos y eliminarlo
    const item = await Item.findOneAndDelete({ guildId: message.guild.id, id: parseInt(id) });

    // Si el artículo no se encontró, enviar un mensaje de error
    if(!item) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
          .setDescription(`<:fail:1083542064924479549> |  El item con el identificador **${id}** no existe en la tienda! | <:fail:1083542064924479549>`)]
    })
    }

    // Enviar un mensaje de confirmación
    message.channel.send(`El item **${item.name}** con el identificador **${id}** se ha eliminado de la tienda <:coffe:1085588495172632638>.`);
  },
};
