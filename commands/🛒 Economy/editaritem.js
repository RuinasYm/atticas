const Item = require('../../modelos/item');
const Discord = require('discord.js')

module.exports = {
  name: 'editaritem',
  alias: ["edititem"],
  description: 'Edita un item de la tienda',
  uso: '!edititem <id> <precio> <nombre> <descripcion>',
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
      
    const data = await Item.find({guildId: message.guild.id});

    
    if(args.length < 4) {
      let embed = new Discord.MessageEmbed()
        .setColor("e60ad4")
        .setDescription(`<:fail:1083542064924479549> |  Uso correcto: ${prefix}editaritem \`<id>\` \`<precio>\` \`<nombre>\` \`<descripcion>\` | <:fail:1083542064924479549>`);
      return message.reply({
        embeds: [embed]
      });
    }
    // Obtener los parámetros del comando
    let id = Number(args[0]);
    if(!id || isNaN(id) || id < 0 || id % 1 != 0) return message.reply({
        embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un id valido! | <:fail:1083542064924479549>`)]
    })
    let price = Number(args[1]);
    if(!price || isNaN(price) || price < 0 || price % 1 != 0) return message.reply({
        embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un precio valido! | <:fail:1083542064924479549>`)]
    })
    let name = args[2]
    if(!name) return message.reply({
        embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un nombre valido! | <:fail:1083542064924479549>`)]
    })
    let description = args.slice(3).join(" ");
    if(!description) return message.reply({
        embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar una descripcion valida! | <:fail:1083542064924479549>`)]
    })

    // Buscar el item a editar
    const item = data.find(item => item.id === id);
    if (!item) {
      return message.reply('El id especificado no existe en la tienda <:coffe:1085588495172632638>.');
    }

    // Actualizar los datos del item
    item.name = name;
    item.price = parseInt(price);
    item.description = description;

    // Guardar los cambios en la base de datos
    await item.save();

    // Enviar un mensaje de confirmación
    message.channel.send(`El item con el id ${id} ha sido editado correctamente en la tienda <:coffe:1085588495172632638>.`)

  },
};