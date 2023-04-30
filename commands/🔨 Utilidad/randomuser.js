//mejorar embed
const Discord = require('discord.js');


module.exports = {
  name: "randomuser",
  alias: [],
  desc: "Sirve para mostrar un usuario aleatoriamente",
  uso: "!randomuser",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",

async execute (client, message, args){


            const memberid = await message.guild.members.fetch()
                .then((usuariostotales) => {
                    return [
                        `${usuariostotales.random().id}`
                    ].join('\n');
                });

   const member = await message.guild.members.cache.find(m => m.id === `${memberid}`)
  const embed = new Discord.MessageEmbed()
  
    .setThumbnail(member.user.displayAvatarURL({ size: 300, dynamic: true}))
    .setDescription(`> **User:** ${member.user}\n> **ID:** \`${memberid}\`\n> **Join server:** <t:${(Number(member.joinedAt) / 1000).toFixed(0)}:D>`)
    .setColor("e60ad4")
    .setAuthor({name: "Random User", iconURL: client.user.displayAvatarURL({dynamic: true})})

  await  message.channel.send({ embeds: [embed] })
 }

}