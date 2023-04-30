const Discord = require('discord.js');

module.exports = {
    name: "unban",
    alias: ["desbanear"],
    desc: "Sirve para desbanear a un usuario",
    uso: "!unban (usuario)",
    permisos: ["BAN_MEMBERS"],
    permisos_bot: ["BAN_MEMBERS"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args, prefix) {
        // Constantes
        const perms = message.member.permissions.has("BAN_MEMBERS");
        const perms_bot = message.guild.me.permissions.has("BAN_MEMBERS");
        const moderador = message.author;
        const razon = args.slice(1).join(' ') || 'No se especificó una razón';
        const userID = args[0];

        // Embeds
        const error1 = new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos de: \`BAN_MEMBERS\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4");

        const error2 = new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No se especificó un ID de usuario válido! | <:fail:1083542064924479549>**")
            .setColor("e60ad4");

        const error3 = new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No se especificó un ID de usuario válido! | <:fail:1083542064924479549>**")
            .setColor("e60ad4");

        // Verificación de permisos y usuario baneado
        if(!perms) return message.reply({ embeds: [error1] });
        if(!perms_bot) return message.reply({ embeds: [error1] });
        if(!userID) return message.reply({ embeds: [error2] });

        const bans = await message.guild.bans.fetch();
        const bannedUser = bans.get(userID);

        if(!bannedUser) return message.reply({ embeds: [error3] });

        // Realizar el unban
        await message.guild.members.unban(userID, `${moderador.tag} - ${razon}`);

        // Embed de éxito
        const unbanEmbed = new Discord.MessageEmbed()
            .setDescription(`> **Moderador:** ${moderador}\n> **ID:** \`${moderador.id}\`\n> \n> **Usuario desbaneado:** ${bannedUser.user.tag}\n> **ID:** \`${bannedUser.user.id}\`\n> \n> **Razón:**\n> \`\`\`${razon}\`\`\``)
            .setAuthor({name: "Usuario Desbaneado", iconURL: message.guild.iconURL({dynamic: true}) || client.user.displayAvatarURL({ dynamic: true })})
            .setThumbnail(message.guild.iconURL({dynamic: true}) || client.user.displayAvatarURL({ dynamic: true }))
            .setColor("00e8ff");

        message.channel.send({ embeds: [unbanEmbed] });
    }
}
