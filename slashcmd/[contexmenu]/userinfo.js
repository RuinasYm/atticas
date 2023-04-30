const Discord = require('discord.js')
const { ContextMenuCommandBuilder } = require('@discordjs/builders')
const { Permissions } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName('Perfil')
    .setType(2),

    async run(client, interaction) {

        const usuario = await interaction.guild.members.fetch(interaction.targetId)

      const start = new Discord.MessageEmbed()//embed Principal
        .setAuthor({name: "User Info", iconURL: usuario.user.displayAvatarURL({dynamic: true})})
        .setColor("e60ad4")//color del embed
        .setThumbnail(usuario.user.displayAvatarURL({dynamic: true}))
        .setDescription(` > **Nombre:** ${usuario.user}\n> **Apodo:** \`${usuario.nickname ? usuario.nickname : 'Ninguno'}\`\n > **ID:** \`${usuario.user.id}\` \n > **Etiqueta:** #\`${usuario.user.discriminator}\`\n> **Roles:** \`${usuario.roles.cache.filter(role => role.name !== '@everyone').size
        }\`\n> **Fecha de creación:**\n> <t:${Math.round(usuario.user.createdAt / 1000)}:R>\n> **Fecha de Union:**\n> <t:${Math.round(usuario.joinedAt / 1000)}:R>}`);
      
        
       
        
        interaction.reply({ embeds: [start]})
      
         
    
          
    }
    
}