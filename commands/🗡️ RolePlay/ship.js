const { MessageEmbed } = require("discord.js")
const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
name: 'ship',
alias: [],
desc: 'Calcula tu porsentaje amoroso con un usuario',
uso: '!ship <user>',
permisos: ['SEND_MESSAGES'],
permisos_bot: ['SEND_MESSAGES'],
valoracion: '⭐⭐⭐⭐⭐',
async execute (client, message, args) {

        const block = "⬛";
        const heart = ":red_square:";
    
        
        const user1 = message.author
        const user2 = message.mentions.users.first() || client.users.cache.get(args[0])
        if(!user2) return message.reply("L-lo siento >u<, pero debes mencionar a alguien.")
        
        const canvas = Canvas.createCanvas(610, 200);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1086818873329852467/1090075562929836102/love.png');
        const avatar1 = await Canvas.loadImage(user1.displayAvatarURL({ format: 'png' }));
        const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: 'png' }));
        
        // Dibuja la imagen de fondo y los avatares
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.save();
        // Hace los avatares circulares y los dibuja en el canvas
        ctx.beginPath();
        const centerX1 = 488;
        const centerY1 = 100;
        const radius1 = 81;
        const gradient1 = ctx.createRadialGradient(centerX1, centerY1, 0, centerX1, centerY1, radius1);
        gradient1.addColorStop(0, '#fff');
        gradient1.addColorStop(1, '#000');
        ctx.arc(centerX1, centerY1, radius1, 0, Math.PI * 2, false);
        ctx.clip();
        ctx.drawImage(avatar2, centerX1 - radius1, centerY1 - radius1, radius1 * 2, radius1 * 2);
        ctx.restore();

        ctx.beginPath();
        const centerX2 = 125;
        const centerY2 = 100;
        const radius2 = 81;
        const gradient2 = ctx.createRadialGradient(centerX2, centerY2, 0, centerX2, centerY2, radius2);
        gradient2.addColorStop(0, '#fff');
        gradient2.addColorStop(1, '#000');
        ctx.arc(centerX2, centerY2, radius2, 0, Math.PI * 2, false);
        ctx.clip();
        ctx.drawImage(avatar1, centerX2 - radius2, centerY2 - radius2, radius2 * 2, radius2 * 2);
        ctx.restore();
        
        
        // Crea un archivo adjunto con la imagen y envía la respuesta
        const attachment = new MessageAttachment(canvas.toBuffer(), 'tweet.png');
        

                const embed = new MessageEmbed()
                    .setColor('e60ad4')
                    .setAuthor({name: '💓 Tenemos una nueva pareja? 💓', iconURL: client.user.displayAvatarURL({dynamic: true})})
                    .setImage(`attachment://tweet.png`)
                    .addFields(
                        { name: `Usuario 1`, value: `****${user1}****`, inline: true },
                        { name: `Usuario 2`, value: `****${user2}****`, inline: true },
                        { name: `**Compatibilidad**`, value: ship() },
                        )
                try {
                    return message.reply({embeds: [embed], files: [attachment]})
                } catch (error) {
                    return message.Editreply({
                        embeds: [
                            new MessageEmbed()
                            .setDescription(`❌ | Ah ocurrido un error!`)
                            .setColor("RED")
                        ], ephemeral: true
                    })
                }
                function ship() {
                    const hearts = Math.floor(Math.random() * 105) + 0;
                    const hearte = (hearts / 10)
        
                    const str = `${heart.repeat(hearte)}${block.repeat(11 - hearte)} ${hearts}%`;
                    return str;
                }
                

        
            }
        }
 
