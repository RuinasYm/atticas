const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const snipe = require("../../modelos/snipe")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mod")
        .setDescription("Comandos de moderacion")
        .addSubcommand(subcommand =>
                subcommand
                .setName("clear")
                .setDescription("🧹 Elimina mensajes de un Canal")
                //opción de número
                .addNumberOption((Options) =>
                Options
                .setName("cantidad")
                .setDescription("Numero de mensajes a borrar")
                .setRequired(true))
                //opción de usuario
                .addUserOption((Options) => 
                Options
                .setName("usuario")
                .setDescription("Usuario a borrar mensajes")
                .setRequired(false))
                )  
        .addSubcommand(subcommand =>
                subcommand
                .setName("slowmode")
                .setDescription("🧊 Activa el modo lento en un Canal!")
                .addStringOption(option => option.setName("tiempo").setDescription("Indica el tiempo de duracion en Milisegundos").setRequired(true))
                
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("snipe")
                .setDescription("🔎 Ve el ultimo mensaje eliminado de un canal!")
                )   ,          
        
    async run(client, interaction){
        if (interaction.options.getSubcommand() === "clear"){

            if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
              ], ephemeral: true})
              if(!interaction.guild.me.permissions.has("MANAGE_MESSAGES"))return interaction.reply({embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
                .setColor("e60ad4")], ephemeral: true})
    
            
            try {
                
                const { channel, options } = interaction;
    
                const Cantidad = options.getNumber("cantidad");
                const Usuario = options.getMember("usuario");
    
                const Mensaje = await channel.messages.fetch();
    
                if(Cantidad > 100)
                return interaction.reply({content: `**<:fail:1083542064924479549> No puedes eliminar mas de 100 mensajes a la Vez!<:fail:1083542064924479549>**`, ephemeral: true});
    
                const Respuesta = new MessageEmbed()
                .setColor("000000")
                if(Usuario) {
                    let i = 0;
                    const filtrar = [];
                    (await Mensaje).filter((m) => {
                        if(m.author.id === Usuario.id && Cantidad > i) {
                            filtrar.push(m);
                            i++;
                        }
                    })
    
                    await channel.bulkDelete(filtrar, true).then(mensaje => {
                        interaction.reply({ embeds: [e.setDescription(`**Elimine \`${mensaje.size}\` mensajes de ${Usuario}**`).setColor("e60ad4")], ephemeral: true })
                    })
                } else {
                    await channel.bulkDelete(Cantidad, true) .then(mensaje => {
                        interaction.reply({ embeds: [e.setDescription(`**Elimine \`${mensaje.size}\` mensajes de este Canal**`).setColor("e60ad4")], ephemeral: true })
                    })
                }
    
            } catch (error) {
                console.log(error)
            }
            
        } else if (interaction.options.getSubcommand() === "slowmode"){
            let e = new Discord.MessageEmbed()

            if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
         
            const tiempo = interaction.options.getString("tiempo")  
    
            const raw = tiempo;
            const milliseconds = ms(raw);
    
            if(isNaN(milliseconds)) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> | Indica un tiempo en milisegundos Valido! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
            if(milliseconds < 1000) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> | El tiempo minimo de slowmode es de \`1 segundo\`! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
            interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> | Slowmode activado correctamente ${interaction.member}! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })
       
            
        } else if (interaction.options.getSubcommand() === "snipe"){

            if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
              ], ephemeral: true})
              if(!interaction.guild.me.permissions.has("MANAGE_MESSAGES"))return interaction.reply({embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_MESSAGES\` | <:fail:1083542064924479549>**")
                .setColor("e60ad4")], ephemeral: true})
          
          
              let data = await snipe.findOne({ channelId: interaction.channel.id })
          
              if(!data){
                  return interaction.reply({
                      embeds: [new Discord.MessageEmbed()
                          .setDescription("**<:fail:1083542064924479549> |  No hay mensages recientes Eliminados!! | <:fail:1083542064924479549>**")
                          .setColor("e60ad4")
                      ], ephemeral: true
                  })
          
              }
          
              const embed = new Discord.MessageEmbed()
              .setAuthor({name: `Mensaje de ${data.author}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
              .addField("`Mensaje Borrado:`", `${data.message}`)
              .setColor("RANDOM")
              .addField("`Canal:`", `<#${data.channelId}>`,)
              .addField("`Tiempo:`", `<t:${data.time}:R>`,)
              .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
          
              interaction.reply({ embeds: [embed] })
            
        } 
    }
}


