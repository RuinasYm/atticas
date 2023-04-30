const play = require("play-dl");
const Discord = require('discord.js')
const { createAudioPlayer, createAudioResource, joinVoiceChannel, AudioPlayerStatus } = require('@discordjs/voice');
const { VoiceConnectionStatus } = require('@discordjs/voice');
module.exports = {
  name: "play",
  alias: [],
  desc: "Sirve para reproducir una cancion",
  uso: "!play (cancion)",
  permisos: ["PREMIUM"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message, args, discord) {

    //# Canal de voz
    let vc = message.member.voice.channel;
    //# Comprobaciones
    if (args.length < 1) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("<:fail:1083542064924479549> |  Tienes que ingresar el nombre de una cancion!")
            .setColor("e60ad4")
        ]
    })
    }
  
    if (!vc) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("<:fail:1083542064924479549> |  Tienes que estar en un canal de voz!")
            .setColor("e60ad4")
        ]
    })
    }
  
    let ytInfo = await play.search(args.join(" "));
    let stream = await play.stream(ytInfo[0].url);
  
    const embed = new Discord.MessageEmbed()
    .setAuthor({name: "Ahora suena ♪", iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`[${ytInfo[0].title}](${ytInfo[0].url})\n \`[0:00 / ${ytInfo[0].durationRaw}]\``)
    .setColor("e60ad4")
    .setThumbnail(ytInfo[0].thumbnails[ytInfo[0].thumbnails.length - 1].url)
    .setFooter({text: `Pedida por ${message.author.username}`, iconURL: message.author.displayAvatarURL({dynamic: true })})
  
    const connection = joinVoiceChannel({
      channelId: vc.id,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator,
    });
  
    const resource = createAudioResource(stream.stream, {
      inputType: stream.type,
    });
    const player = createAudioPlayer();
    player.play(resource);
    connection.subscribe(player);
  
    message.reply({ embeds: [embed] });
    player.on("error", (error) => {
      console.error(
        `Error: ${error.message} with resource ${error.resource.metadata.title}`
      );
      player.play(getNextResource());
    });
  
    player.on(AudioPlayerStatus.Idle, () => {
      // Se sale del canal de voz después de 5 segundos
      setTimeout(() => {
        if (connection.state.status !== VoiceConnectionStatus.Destroyed) {
          connection.destroy();
        }
      }, 5000);
    });
  }
}  