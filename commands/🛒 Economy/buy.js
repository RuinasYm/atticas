const Item = require('../../modelos/item');
const ecoSchema = require('../../modelos/economia');
const discord = require('discord.js')

module.exports = {
  name: 'buy',
  alias: ['comprar'],
  description: 'Sirve para comprar un articulo de la tienda',
  uso: '!buy (item-id)',
  permisos: ['SEND_MESSAGES'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  async execute(client, message, args) {
    const itemId = parseInt(args[0]);

    if (isNaN(itemId)) {
      return message.channel.send(`<:cofee:1070895818460102656> Se supone que debes escribir el **nombre** o **id** del item que quieres comprar.`);
    }

    const item = await Item.findOne({id: itemId, guildId: message.guild.id});
    let userData = await ecoSchema.findOne({ userID: message.author.id });

    if (!userData) {
      let newdata = new ecoSchema({
        userID: message.author.id,
      });

      await newdata.save();
      userData = await ecoSchema.findOne({ userID: message.author.id });
    }

    if (!userData.inventario || !userData.inventario.includes(item?._id)) {
      if (!item || !item._id) {
        return message.channel.send(`<:cofee:1070895818460102656> Ese item no está disponible en la tienda.`);
      }
      if (item.price > userData.dinero) {
        return message.channel.send(`<:cofee:1070895818460102656> No tienes suficientes <:clubcoin:1075230099001069568> para comprar el item ${item.name}.`);
      }
      userData.inventario.push(item._id);
      await userData.save();
    } else {
      return message.channel.send(`<:cofee:1070895818460102656> Ya has comprado el item ${item.name}.`);
    }

    userData.dinero -= item.price;
    await userData.save();

    return message.reply({
      embeds: [new discord.MessageEmbed()
        .setAuthor({name: `Compra de ${message.author.username}`, iconURL: message.member.displayAvatarURL({dynamic: true})})
        .setDescription(`**Item:** ${item.name}\n**Costo:** ${item.price} <:clubcoin:1075230099001069568>.`)
        .setColor("e60ad4")
        .setThumbnail(message.member.displayAvatarURL({dynamic: true}))
      ]
    });
  }
};
