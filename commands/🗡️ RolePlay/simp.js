const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const Discord = require('discord.js')

module.exports = {
  name: 'simp',
  alias: [],
  desc: "Sirve para crear un Tweet",
  uso: "!tweet <mensaje>",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  async execute(client, message, args) {

    const user = message.author;
    const currentDate = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);
    // Carga la imagen de fondo y el avatar del usuario
    const canvas = Canvas.createCanvas(1280, 720);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1086818873329852467/1086837818766151730/Sin_titulo2.png');
    const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png' }));

    // Dibuja la imagen de fondo y el avatar
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Hace el avatar circular
// Hace el avatar circular y cinco veces más grande
ctx.beginPath();
const centerX = 280; // ajusta la posición X del círculo para centrar el avatar
const centerY = 240;
const radius = 180; // ajusta el radio del círculo para hacer el avatar cinco veces más grande
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
    ctx.font = 'bold 50px Arial';
    ctx.fillText(user.username, 240, 505);
    ctx.fillStyle = '#1DA1F2';
    ctx.font = 'bold 50px Arial';
    ctx.fillText(`${formattedDate}`, 80, 620);

    const attachment = new MessageAttachment(canvas.toBuffer(), 'tweet.png');

    const embed = new Discord.MessageEmbed()
        .setImage(`attachment://tweet.png`)
        .setColor('e60ad4');
        
    message.reply({embeds: [embed], files: [attachment]});
    
  },
};
