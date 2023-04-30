const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
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
        .setName("premium")
        .setDescription("Comandos premium")
        .addSubcommand(subcommand =>
                subcommand
                .setName("colores")
                .setDescription("🎨 Personaliza el color de tu Rol")
                .addStringOption((option) => {
                    return option
                        .setName("colores")
                        .setDescription("Escoje un color")
                        .setChoices(
                            { name: "🌸 → Rosa", value: "1" },
                            { name: "🟢 → Verde", value: "2" },
                            { name: "🟣 → Mora", value: "3" },
                            { name: "🔵 → Azul", value: "4" },
                            { name: "🔴 → Rojo", value: "5" },
                            { name: "🟠 → Naranja", value: "6" },
                            { name: "🔘​ → Gris", value: "7" },
                            { name: "⚫️ → Negro ", value: "8" },
                            { name: "⚪ → Blanco", value: "9" },
                            { name: "🟡 → Amarillo", value: "10" },
        
                        )
                        .setRequired(true)
                })
                )  
        .addSubcommand(subcommand =>
                subcommand
                .setName("setup")
                .setDescription("✨ → añade o remueve un usuario!")
                .addStringOption((option) => {
                    return option
                        .setName("opciones")
                        .setDescription("✨ → Premium")
                        .setChoices(
                            { name: "✨ → Agregar Premium", value: "1" },
                            { name: "✨ → Remover Premium", value: "2" }
        
                        )
                        .setRequired(true)
                })
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un Usuario").setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
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
                    .addStringOption(option => option.setName('cancion').setDescription('Indica una cancion').setRequired(false))
                    ),          
        
    async run(client, interaction){
        if (interaction.options.getSubcommand() === "colores"){
            let e = new Discord.MessageEmbed()

        const nopremium = db.get(`premium_${interaction.member.id}`);
        const c = interaction.options.getString('colores')


        if (nopremium !== true) {

            interaction.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Este comando solo esta disponible para **Boosters**.\nBoostea este servidor para obtener acceso a los comandos [**premium**](https://docs.clubatticus.ml/)`).setAuthor(`Premium`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png").setColor("e60ad4")], ephemeral: true })

        } else {

            if (c) 
            if (c === "1"){ 
                
                interaction.member.roles.remove("1051226269733363742");
                interaction.member.roles.remove("1051226453775228998"); 
                interaction.member.roles.remove("1051226405150670888"); 
                interaction.member.roles.remove("1051226507391029299"); 
                interaction.member.roles.remove("1051226557986906243"); 
                interaction.member.roles.remove("1051226643185795105"); 
                interaction.member.roles.remove("1051226695685898251"); 
                interaction.member.roles.remove("1051226755303747654");  
                interaction.member.roles.remove("1051226883821412442"); 
                interaction.member.roles.add("1050956250864689214"); 
               
                interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1050956250864689214>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "2") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226269733363742"); 
               
                interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226269733363742>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "3") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226453775228998"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226453775228998>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "4") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226405150670888"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226405150670888>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "5") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243");  
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226643185795105"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226643185795105>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "6") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226557986906243"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226557986906243>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "7") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226695685898251"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226695685898251>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "8") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226755303747654"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226755303747654>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "9") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.add("1051226883821412442"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226883821412442>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "10") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226507391029299"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226507391029299>").setColor("e60ad4")], ephemeral: true }) } else { }

         } 
            
        } else if (interaction.options.getSubcommand() === "setup"){
            let e = new Discord.MessageEmbed()
        let selecion = interaction.options.getString("opciones")
        const user = interaction.options.getUser("usuario")

            if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

        if (selecion) {
            if (selecion === "1") { 
                db.set(`premium_${user.id}`, true)
                const embed = new Discord.MessageEmbed()
                .setAuthor("Premium", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                
                .setDescription(` > **Nuevo usuario Premium! \n > Usuario:** <@${user.id}>`)
                
                interaction.reply({embeds: [embed]}) } else { }
            
        if (selecion === "2") { if (db.get(`premium_${user.id}`) === null || db.get(`premium_${user.id}`) === false)return  interaction.reply({
            embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  El usuario mencionado no es Premium!! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })
        
        db.set(`premium_${user.id}`, false)
        const embed = new Discord.MessageEmbed()
        .setAuthor("Premium", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setColor("e60ad4")
        
        .setDescription(` > **Premium Removido! \n > Usuario:** <@${user.id}>`)
        
        interaction.reply({embeds: [embed]}) } }

    } else if (interaction.options.getSubcommand() === "musica"){
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
}


