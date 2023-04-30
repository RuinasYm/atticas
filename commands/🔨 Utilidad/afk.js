const afk = require ('../../modelos/afk');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {

    name: "afk",
    alias: [],
    desc: "Sirve para poner tu estado en afk",
    uso: "!afk <razon>",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"],
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {

        if(message.mentions.roles.first()) {
            message.channel.send('No puedes mencionar roles en tu estado AFK!')
            return;
        }

        const reason = args.join(" ") || "No se dió un motivo."

        const Userdata = await afk.findOne({
            UserID: message.author.id,
            GuildID: message.guild.id
        })
        if (!Userdata){
            let newdata = new afk({
                UserID: message.author.id,
                Reason: reason,
                GuildID: message.guild.id
      
            }) 
      
            await newdata.save()
          }
      
        const embed = new MessageEmbed()
        .setAuthor({name: `${message.author.username} esta AFK`, iconURL: message.author.displayAvatarURL({dynamic: true})})
        .setColor("e60ad4")
        .setDescription(`**Motivo**: ${reason}`)
        .setThumbnail(message.member.displayAvatarURL({dynamic: true}))
        .setFooter({text: 'Avisaré a quienes te mencionen.'})
        message.channel.send({ embeds: [embed] })


    }
}
