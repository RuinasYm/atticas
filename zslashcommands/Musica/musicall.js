const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const play = require("play-dl");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const db = require("quick.db");
const { getVoiceConnection } = require("@discordjs/voice");
const {
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
} = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("musica")
        .setDescription("🎶 Escucha musica")
        .addStringOption((option) => {
            return option
                .setName("selecciona")
                .setDescription("Escoje un opcion")
                .setChoices(
                    { name: "🎶 → Play", value: "1" },
                    { name: "🎶 → Pause", value: "2" },
                    { name: "🎶 → Resume", value: "3" },


                )
                .setRequired(true)
        })
        .addStringOption(option => option.setName('cancion').setDescription('Indica una cancion').setRequired(false)),

    async run(client, interaction){

        const c = interaction.options.getString('selecciona')
        let name = interaction.options.getString("cancion")
        let e = new Discord.MessageEmbed()

        const nopremium = db.get(`premium_${interaction.member.id}`);

        if (nopremium !== true) {

          interaction.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Este comando solo esta disponible para **Boosters**.\nBoostea este servidor para obtener acceso a los comandos [**premium**](https://docs.clubatticus.ml/)`).setAuthor(`Premium`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png").setColor("e60ad4")], ephemeral: true })

      } else {
            if (c) 
            if (c === "1"){ 
                let vc = interaction.member.voice.channel;
            
                if (!vc) {
                  return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Tienes que estar en un canal de voz! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                }
            
                let ytInfo = await play.search(`${name}`);
                let stream = await play.stream(ytInfo[0].url);
            
                const embed = new Discord.MessageEmbed()
                .setAuthor({name: "Music", iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setDescription(`**[${ytInfo[0].title}](${ytInfo[0].url})**`)
                .setColor("e60ad4")
                .setImage(`https://thumbs.gfycat.com/SlightUnevenCommabutterfly-size_restricted.gif`)
            
            
                const connection = joinVoiceChannel({
                  channelId: vc.id,
                  guildId: interaction.guildId,
                  adapterCreator: interaction.guild.voiceAdapterCreator,
                });
            
                const resource = createAudioResource(stream.stream, {
                  inputType: stream.type,
                });
                const player = createAudioPlayer();
                player.play(resource);
                connection.subscribe(player);
            
                interaction.reply({ embeds: [embed], ephemeral: true });
                player.on("error", (error) => {
                  console.error(
                    `Error: ${error.interaction} with resource ${error.resource.metadata.title}`
                  );
                  player.play(getNextResource());
                });
            
             } else { }
            if (c === "2"){ 
                const mvc = interaction.member.voice.channel.id;
                const pvc = getVoiceConnection(interaction.guild.id);
                if (!pvc) return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No se esta reproduciendo musica! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
            
                if (mvc != pvc.joinConfig.channelId) {
                  return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Tienes que estar en el mismo canal de voz en el que esta el bot! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                }
            
                const player = getVoiceConnection(interaction.guild.id).state.subscription
                  .player;
            
                player.pause();
                const embed = new Discord.MessageEmbed()
                .setAuthor({name: "Music Paused", iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setColor("e60ad4")
                .setImage(`https://ugtechmag.com/wp-content/uploads/2021/12/pause12.jpg`)
            
                interaction.reply({ embeds: [embed], ephemeral: true });
            
             } else { } 
            if (c === "3"){ 
              const mvc = interaction.member.voice.channel.id;
              const pvc = getVoiceConnection(interaction.guild.id);
              if (!pvc) return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No se esta reproduciendo musica! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
          
              if (mvc != pvc.joinConfig.channelId)
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Tienes que estar en el mismo canal de voz en el que esta el bot! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
          
              const player = getVoiceConnection(interaction.guild.id).state.subscription
                .player;
          
              player.unpause();
              const embed = new Discord.MessageEmbed()
              .setAuthor({name: "Music Resume", iconURL: client.user.displayAvatarURL({dynamic: true})})
              .setColor("e60ad4")
              .setImage(`https://thumbs.gfycat.com/SlightUnevenCommabutterfly-size_restricted.gif`)
          
              interaction.reply({ embeds: [embed], ephemeral: true });
          
             } else { }

        }
     }
    }