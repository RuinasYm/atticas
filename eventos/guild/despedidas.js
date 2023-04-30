const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const Discord = require('discord.js')
const Setups = require('../../modelos/setups');

module.exports = {
    name: 'guildMemberRemove',
    async run(client, member) { 

        const setup = await Setups.findOne({ guildID: member.guild.id });
        if (!setup || !setup.despedidasEnabled || !setup.despedidasChannel) return;


        const despedidas = setup.despedidasMSG.replace(/-/g, ' ');

        const Mensaje = setup.despedidasUSER.replace(/{user}/g, member.toString())
            .replace(/{user\.tag}/g, member.user.tag)
            .replace(/{user\.username}/g, member.user.username)
            .replace(/{user\.id}/g, member.id)
            .replace(/-/g, ' '); 

      const footer = setup.despedidasCOUNT.replace(/{count}/g, member.guild.memberCount)
      .replace(/-/g, ' ');

      if (setup.despedidasDESCRIPCION) {
       desc = setup.despedidasDESCRIPCION.replace(/{user}/g, member.toString())
      .replace(/{user\.tag}/g, member.user.tag)
      .replace(/{user\.username}/g, member.user.username)
      .replace(/{user\.id}/g, member.id)
      .replace(/-/g, ' '); 
      }

      if (setup.despedidasTITULO) {
      titulo = setup.despedidasTITULO.replace(/{user}/g, member.toString())
      .replace(/{user\.tag}/g, member.user.tag)
      .replace(/{user\.username}/g, member.user.username)
      .replace(/{user\.id}/g, member.id)
      .replace(/-/g, ' '); 
      }
    const canvas = Canvas.createCanvas(768, 375);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(`${setup.despedidasFONDO}`);
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));

    // Dibuja la imagen de fondo y el avatar
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Hace el avatar circular
    ctx.beginPath();
    const centerX = 384;
    const centerY = 160;
    const radius = 70;
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(1, '#000');
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    ctx.save();
    ctx.clip();
    ctx.drawImage(avatar, centerX - radius, centerY - radius, radius * 2, radius * 2);
    ctx.restore();

    // Añade un borde al avatar
    ctx.strokeStyle = `${setup.despedidasCIRCULO}`;
    ctx.lineWidth = 5;
    ctx.stroke();

// Añade el nombre y el mensaje del usuario
ctx.fillStyle = `${setup.despedidasTEXTO2}`;
ctx.font = 'bold 30px Arial';
ctx.textAlign = 'center'; // Establece el alineamiento horizontal en el centro
ctx.fillText(`${Mensaje}`, canvas.width / 2, 310);
ctx.fillStyle = `${setup.despedidasTEXTO3}`;
ctx.font = 'bold 22px Arial';
ctx.fillText(`${footer}`, canvas.width / 2, 335);
ctx.font = 'bold 50px Tahoma';
ctx.fillStyle = `${setup.despedidasTEXTO1}`;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 4;
ctx.fillText(`${despedidas}`, canvas.width / 2, 280, 680);




    // Crea un archivo adjunto con la imagen y envía la respuesta
    const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome.png');

    if (setup && setup.despedidasTITULO && setup.despedidasDESCRIPCION && setup.despedidasCOLOR) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`${titulo}`)
        .setDescription(`${desc}`)
        .setImage(`attachment://welcome.png`)
        .setColor(`${setup.despedidasCOLOR}`);
    
        client.channels.cache.get(`${setup.despedidasChannel}`).send({ embeds: [embed], files: [attachment] });
    } else {
      client.channels.cache.get(`${setup.despedidasChannel}`).send({ files: [attachment] });
    }
    

  }
}
