const Discord = require('discord.js');

module.exports = {
    name: "invitechannel",
    alias: ["cinvite"],
    desc: "Sirve para crear una invitacion en un canal",
    uso: "!invitechannel",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

   async execute (client, message, args) {
        message.channel.createInvite({ maxAge: 0, MaxUses: 0 }).then(link => {

                const invite = new Discord.MessageEmbed()
                .setDescription(`\n **${link}**`)
                
                .setAuthor({name: "Canal Invite", iconURL: client.user.displayAvatarURL({dynamic: true})})
                
                .setColor("e60ad4")

       message.channel.send({ embeds: [invite] });

        })

    }
}