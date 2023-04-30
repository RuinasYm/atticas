const Discord = require('discord.js');

module.exports = {
  name: "hub",
  alias: ['msghub'],
  desc: "Sirve para enviar un mensaje en fondo hub",
  uso: "!msgpornhub <mensaje>",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute (client, message, args) {

const txt = args.join('%20');   

if (!txt) return message.reply({
  embeds: [new Discord.MessageEmbed()
    .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar un Texto!**")
    .setColor("e60ad4")
  ]
});

  
let autor = message.author; 

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') 

const embed = new Discord.MessageEmbed()
    .setImage(`attachment://logo.png`)
    .setColor('e60ad4');
    
message.reply({embeds: [embed], files: [attachment]});

  }
}