///////////////////////mejorar embed
const Discord = require('discord.js');
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');

module.exports = {
    name: "ban",
    alias: ["banear"],
    desc: "Sirve para banear a un usuario",
    uso: "!ban (usuario)",
    permisos: ["ADMINISTRATOR"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
   async execute (client, message, args, prefix) {
        ////////////////////CONST CONST CONST CONST// ///////////////
        const perms = message.member.permissions.has("BAN_MEMBERS");
        const perms_bot = message.guild.me.permissions.has("BAN_MEMBERS");
        const moderador = message.author;
        const razon = args.slice(1).join(' ') || 'No se especifico una Razón'
        const usuario = message.mentions.members.first();

        ////////////////////////////////EMBEDS EMBEDS EMBEDS Y MÁS EMBEDS///////////////////////////////////////
        let error = new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos de: \`BAN_MEMBERS\` | <:fail:1083542064924479549>**")
        .setColor("e60ad4")

        let error1 = new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos de: \`BAN_MEMBERS\` | <:fail:1083542064924479549>**")
        .setColor("e60ad4")

        let error2 = new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  Tienes que mencionar a un usuario Valido! | <:fail:1083542064924479549>**")
        .setColor("e60ad4")

        let error3 = new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  No te puedes banear a ti Mismo! | <:fail:1083542064924479549>**")
        .setColor("e60ad4")
        let error4 = new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  No me puedo auto Banear! | <:fail:1083542064924479549>**")
        .setColor("e60ad4")

        let error6 = new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  No puedes banear a alguien con tu mismo rol o Superior! | <:fail:1083542064924479549>**")
        .setColor("e60ad4")

        let error7 = new Discord.MessageEmbed()
        .setDescription("**<:fail:1083542064924479549> |  No puedo banear a un usuario con un rol superior al Mio! | <:fail:1083542064924479549>**")
        .setColor("e60ad4")


        //////////////////////////////IF IF IF IF IF IF IF IF !IF //////////////////////////////////////////////////////////////////
        if(!perms) return message.reply({ embeds: [error1] })
        if(!perms_bot) return message.reply({ embeds: [error] })
        if(!usuario) return message.reply({ embeds: [error2] })
        if(usuario.user.id === message.author.id) return message.reply({ embeds: [error3] })
        if(usuario.user.id === client.user.id) return message.reply({ embeds: [error4] })
        if(message.member.roles.highest.position <= usuario.roles.highest.position) return message.reply({ embeds: [error6] })
        if(message.guild.me.roles.highest.position <= usuario.roles.highest.position) return message.reply({ embeds: [error7] })

        ////////////////////SI FUNCIONA TODO, SEGUIMOS CON EL PROCEDIMIENTO////////////////////
        await usuario.ban({ reason: `${message.author.tag} - ${razon}` })
        const banEmbed = new Discord.MessageEmbed()
        .setDescription(`> **Moderador:** ${moderador}\n> **ID:** \`${moderador.id}\`\n> \n> **Usuario:** ${usuario}\n> **ID:** \`${usuario.id}\`\n> \n > **Razón:**\n> \`\`\`${razon}\`\`\``)
        .setAuthor({name: "Usuario Baneado", iconURL: message.guild.iconURL({dynamic: true}) || client.user.displayAvatarURL({ dynamic: true })})
        .setThumbnail(message.guild.iconURL({dynamic: true}) || client.user.displayAvatarURL({ dynamic: true }))
        .setColor("e60ad4")
        message.channel.send({ embeds: [banEmbed] })
    }
}