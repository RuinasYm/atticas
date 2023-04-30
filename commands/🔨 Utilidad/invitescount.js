const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "invites",
  alias: [],
  desc: "Sirve para ver las invitacione de un usuario",
  uso: "!invites (user)",
  permisos: ["ADMINISTRATOR"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
async execute (client, message, args) {
      
        const user = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member;
        
        let invites = await message.guild.invites.fetch();
        let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id);

        let i = 0;
        userInv.forEach(inv => i += inv.uses);

        const embed = new Discord.MessageEmbed()
        .setColor("e60ad4")
        .setAuthor({name: `Invites`, iconURL: user.displayAvatarURL({dynamic: true})})
        .setDescription(`**${user.user.username}** tiene **${i}** invitaciones.`)
        .setThumbnail(user.displayAvatarURL({dynamic: true}))

        await message.reply({ embeds: [embed]});
    }
}