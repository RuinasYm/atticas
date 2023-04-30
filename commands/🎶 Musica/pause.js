const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const Discord = require('discord.js')
const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
  name: "pause",
  alias: ["stop"],
  desc: "Sirve para pausar una cancion",
  uso: "!pause",
  permisos: ["PREMIUM"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message, args, discord) {

    const mvc = message.member.voice.channel.id;
    const pvc = getVoiceConnection(message.guild.id);
    if (!pvc) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("<:fail:1083542064924479549> |  No hay ninguna cancion en reproduccion!")
          .setColor("e60ad4")
      ]
  })

    if (mvc != pvc.joinConfig.channelId) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("<:fail:1083542064924479549> |  Tienes que estar en el mismo canal de voz del bot!")
            .setColor("e60ad4")
        ]
    })
    }

;

    const player = getVoiceConnection(message.guild.id).state.subscription
      .player;

    player.pause();
    
    const embed = new Discord.MessageEmbed()
      .setAuthor({name: "Cancion Pausada ♪", iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setColor("e60ad4")

    message.reply({ embeds: [embed] });
  }
}
