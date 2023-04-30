const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "kicksv",
    alias: ["sacarbot"],
    desc: "Sirve para sacar el bot de un servidor",
    uso: "!kicksv (servidor)",
    permisos: ["ADMINISTRATOR"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args) {

        if(message.author.id !== "1001880420138373191") return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

        if(!args[0]) return message.reply(`**<:fail:1083542064924479549> |  Menciona un servidor Valido! | <:fail:1083542064924479549>**`)
        const guildid = args[0]
        
        client.guilds.cache.get(guildid).leave()
        const embed = new Discord.MessageEmbed()
                 
        .setAuthor({name: "Kick Sv", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`**<:sucess:1083547524717101056> | He abandonado correctamente el servidor ${guildid}! | <:sucess:1083547524717101056>**`)
        .setColor("e60ad4")
        
        
        message.reply({embeds: [embed] })
    }
}

