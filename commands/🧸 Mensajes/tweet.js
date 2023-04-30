const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const Discord = require('discord.js')

module.exports = {
  name: 'tweet',
  alias: ['msgtweet'],
  desc: "Sirve para enviar un mensaje en forma de tweet",
  uso: "!tweet <mensaje>",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  async execute(client, message, args) {

    const user = message.author;
    const tweetMessage = args.join(' ');
    if(!tweetMessage) return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar un Mensaje! | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
        ]
    })
    // Carga la imagen de fondo y el avatar del usuario
    const canvas = Canvas.createCanvas(960, 428);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1086818873329852467/1086818899292602498/Sin_titulo.png');
    const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png' }));

    // Dibuja la imagen de fondo y el avatar
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Hace el avatar circular
    ctx.beginPath();
    const centerX = 105;
    const centerY = 85;
    const radius = 45;
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(1, '#000');
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    ctx.save();
    ctx.clip();
    ctx.drawImage(avatar, centerX - radius, centerY - radius, radius * 2, radius * 2);
    ctx.restore();

    // Añade el nombre y el mensaje del usuario
    ctx.fillStyle = '#1DA1F2';
    ctx.font = 'bold 30px Arial';
    ctx.fillText(user.username, 170, 90);
    ctx.fillStyle = '#9b9b9b';
    ctx.font = 'bold 22px Arial';
    ctx.fillText(`@${user.username}`, 165, 120);
    ctx.font = '35px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText(tweetMessage, 60, 180, 680);

    // Crea un archivo adjunto con la imagen y envía la respuesta
    const attachment = new MessageAttachment(canvas.toBuffer(), 'tweet.png');

    const embed = new Discord.MessageEmbed()
        .setAuthor({name: `Tweet de ${message.author.username}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setImage(`attachment://tweet.png`)
        .setColor('e60ad4');
        
    message.reply({embeds: [embed], files: [attachment]});
  },
};
