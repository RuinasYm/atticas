const ActionsClient = require('discord-actions');
const actions = new ActionsClient();
const Setups = require('../../modelos/gestos')
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
 
module.exports = {
name: 'bonk',
alias: ['bono'],
desc: 'Sirve para hacer un bonk a un usuario',
uso: '!bonk <user>',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['SEND_MESSAGES'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {


    if (!args.length) return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
  
    const usuario = message.mentions.users.first() 
    if (!usuario) {
      return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
    }
    if (usuario.id === message.author.id) return message.channel.send({
      embeds: [new MessageEmbed()
        .setAuthor({name: `${message.author.username} le dió un bonk a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setColor("RANDOM")//color random
        .setImage((await actions.sfw.bite()).url)
      ]
  })

  let data = await Setups.findOne({ userID: usuario.id });
  if(!data) {
    // Si no se encuentra, creamos una nueva configuración
    let server = new Setups({
      userID: usuario.id,
      bonk: +1
    });
    await server.save();
  
    data = await Setups.findOne({ userID: usuario.id });
  }

  await Setups.findOneAndUpdate({ userID: usuario.id }, {
    bonk: data.bonk +1
  });

  const embed2 = new MessageEmbed()//definimos embed
  .setAuthor({name: `${usuario.username} ha recibido ${data.bonk} bonks.`, iconURL: client.user.displayAvatarURL({dynamic: true})})
  .setColor("RANDOM")//color random
  .setImage((await actions.sfw.bite()).url)
  message.channel.send({embeds: [embed2]});//y que lo mande
  }}