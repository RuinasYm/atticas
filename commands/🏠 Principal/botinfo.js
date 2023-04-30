const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const { mem, cpu, os } = require('node-os-utils'); //npm i node-os-utils
const { stripIndent } = require('common-tags'); //npm i common-tags
const { readdirSync } = require('fs');

module.exports = {
  name: "botinfo",
  alias: ["bot"],
  desc: "Sirve para ver la informacion del bot",
  uso: "!botinfo",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) { 

const { totalMemMb, usedMemMb } = await mem.info();
const categorias = readdirSync('./commands');

const permissions = ['SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'];
const inviteLink = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`;

const createdAt = Math.floor(client.user.createdAt / 1000);

const embed = new Discord.MessageEmbed()
.setAuthor({name: "Bot Info", iconURL: client.user.displayAvatarURL({dynamic: true})})
.setDescription(` > **Nombre:** ${client.user.username}\n > **ID:** \`${client.user.id}\`\n > **Version:** \`1.0\`\n > **Comandos:** \`${client.commands.size}\`\n> **Categorias:** \`${categorias.length}\`\n > **Ram usada:** \`${usedMemMb} MB\`\n > **Cpu usado:** \`${await cpu.usage()} %\`\n > **Ping:** \`${client.ws.ping} ms\`\n > **Creacion:** <t:${createdAt}:f>\n > **Invitacion:** [**Click Aqui**](${inviteLink})`)
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
.setColor("e60ad4")




/*const systeminfo = stripIndent`
CPU       : ${cpu.model()}
Cores     : ${cpu.count()}
CPU Usada : ${await cpu.usage()} %
RAM       : ${totalMemMb} MB
Ram Usada : ${usedMemMb} MB

.addField("CPU:", `${cpu.model()}`) 
.addField("Cores:", `${cpu.count()}`) 
.addField("CPU Usada:", `${await cpu.usage()} %`) 
.addField("RAM:", `${totalMemMb} MB`) 
.addField("RAM USADA:", `${usedMemMb} MB`) 

.addField(`**ID:** 1044756126350196796`)
.addField(`**Versión:** 1.0`)
.addField(`**Creación:** 6/12/22`)
.addField(`**Developer:**`)
`;
*/

message.channel.send({ embeds: [embed] })
    
  }

}
 
