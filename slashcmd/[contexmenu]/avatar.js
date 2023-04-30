const discord = require('discord.js')
const { ContextMenuCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName('Avatar')
    .setType(2),

    async run(client, interaction) {
        const user = await interaction.guild.members.fetch(interaction.targetId)

        let png = user.user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
        let jpg = user.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        let webp = user.user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })

        const embed = new discord.MessageEmbed()
        .setAuthor({name: 'Avatar', iconURL: user.user.displayAvatarURL({dynamic: true, size: 1024})})
        .setColor("e60ad4")     
        .setDescription(`**Icono de ${user.user.username}**`)
        .setImage(user.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        

        interaction.reply({ embeds: [embed], components: [new discord.MessageActionRow().addComponents(
            [
                new discord.MessageButton().setStyle("LINK").setLabel("PNG").setURL(`${png}`),
                new discord.MessageButton().setStyle("LINK").setLabel("JPG").setURL(`${jpg}`),
                new discord.MessageButton().setStyle("LINK").setLabel("WEBP").setURL(`${webp}`),
            ]
        )]})
    }
    
}