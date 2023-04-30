const Discord = require('discord.js');
const User = require('../../modelos/economia');

module.exports = {
    name: 'addmoney',
    alias: ['darmonedas',],
    description: 'Añade coins al banco de un usuario',
    uso: '!balance - !balance (user)',
    permisos: ['SEND_MESSAGES'],
    permisos_bot: ['ADMINISTRATOR'],
    valoracion: '⭐⭐⭐⭐⭐',
 async execute(client, message, args) {

    if(message.author.id !== "1001880420138373191") return message.reply("No tienes suficientes permisos para hacer esto <:coffe:1085588495172632638>")

    if (args.length !== 2) {
      return message.reply('La forma correcta es: \`!addmoney @usuario cantidad\` <:coffe:1085588495172632638>');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('La forma correcta es: \`!addmoney @usuario cantidad\` <:coffe:1085588495172632638>');
    }

    const amount = parseInt(args[1], 10);
    if (isNaN(amount)) {
      return message.reply('La cantidad tiene que ser con numeros <:coffe:1085588495172632638>');
    }

    User.findOne({ userID: user.id }).then(userData => {
      if (!userData) {
        userData = new User({ userID: user.id});
      }

      userData.banco += amount;
      userData.save().then(() => {
        message.reply(`Se han dado ${amount} <:clubcoin:1075230099001069568> a **${user.username}** <:coffe:1085588495172632638>`);
      });
    }).catch(error => {
      console.error(error);
      message.reply('Ha ocurrido un error al dar los <:clubcoin:1075230099001069568>');
    });
  },
};
