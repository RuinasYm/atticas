const Item = require('../../modelos/item');
const Discord = require('discord.js')

module.exports = {
  name: 'additem',
  alias: ["añadiritem"],
  description: 'Añade un item a la tienda',
  uso: '!additem <id> <precio> <nombre> <descripcion>',
  permisos: ['MANAGE_GUILD'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  async execute (client, message, args, prefix)  {

    const data = await Item.find({guildId: message.guild.id});

      if(args.length < 4) {
        let embed = new Discord.MessageEmbed()
          .setColor("e60ad4")
          .setDescription(`<:fail:1083542064924479549> |  Uso correcto: ${prefix}additem \`<id>\` \`<precio>\` \`<nombre>\` \`<descripcion>\` | <:fail:1083542064924479549>`);
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
    // Cr
    let description = args.slice(3).join(" ");
    if(!description) return message.reply({
        embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un nombre valido! | <:fail:1083542064924479549>`)]
    })
    // Crear un nuevo artículo utilizando el modelo Item de Mongoose

// Verificar si el id ya está en uso
if (data.some(item => item.id === id)) {
  return message.reply('El id especificado ya esta en uso <:coffe:1085588495172632638>.');
}// Verificar si el id ya está en uso
if (data.some(item => item.name === name)) {
  return message.reply('El nombre especificado ya esta en uso <:coffe:1085588495172632638>.');
}

// Crear un nuevo artículo utilizando el modelo Item de Mongoose
const item = new Item({
  guildId: message.guild.id,
  id: parseInt(id),
  name: name,
  price: parseInt(price),
  description: description
});

// Guardar el nuevo artículo en la base de datos
await item.save();

// Enviar un mensaje de confirmación
message.channel.send(`El item ${name} se ha añadido a la tienda con el identificador ${id} <:coffe:1085588495172632638>.`);

  },
};