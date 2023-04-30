const Discord = require('discord.js');

// Crear un objeto de Map para almacenar el tiempo de enfriamiento del comando por usuario
const cooldowns = new Map();
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "jalondepelo",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!jalondepelo",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    // Añadir la propiedad "cooldown" al comando para definir el tiempo de enfriamiento en milisegundos
    cooldown: 5000, // En este ejemplo, 5 segundos

    async execute(client, message, args) {

        // Verificar si el canal es NSFW
        if (!message.channel.nsfw) return message.reply({
            embeds: [new MessageEmbed()
              .setAuthor({name: "Contenido con restricción", iconURL: client.user.displayAvatarURL({ dynamic: true })})
                .setDescription("Este comando requiere que el canal permita contenido con restricción por edad (NSFW).\n\nPuedes activar dicha opción en la configuración del canal.")
                .setColor("e60ad4")
                .setImage("https://cdn.discordapp.com/attachments/1052343306538975282/1074426806528135168/nsfw.png")
            ]
          })
    
        // Verificar si el usuario ha usado el comando en el tiempo de enfriamiento definido
        if (cooldowns.has(message.author.id)) {
            const timeLeft = (cooldowns.get(message.author.id) - Date.now()) / 1000;
            if (timeLeft > 0) {
                return message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setAuthor({ name: 'Calm!', iconURL: 'https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png' })
                        .setDescription(`You are very accelerated\nPlease wait **${timeLeft.toFixed(1)} seconds**`)
                        .setColor("e60ad4")
                    ],
                    allowedMentions: { repliedUser: true }
                });
            }
        }
    
        // Si el usuario puede usar el comando, establecer su tiempo de enfriamiento
        cooldowns.set(message.author.id, Date.now() + this.cooldown);
    
        const contenidos = [ 
            "https://cdn.discordapp.com/attachments/1067486120822194276/1070108452778680381/Club_Atticus.001.mp4",
            "https://cdn.discordapp.com/attachments/1067486120822194276/1070108453135200266/Club_Atticus.002.mp4",
            "https://cdn.discordapp.com/attachments/1067486120822194276/1070108453512679646/Club_Atticus.003.mp4",
            "https://cdn.discordapp.com/attachments/1067486120822194276/1070108453831450727/Club_Atticus.jpg",

 ];
    
         // Si el usuario puede usar el comando, establecer su tiempo de enfriamiento
         cooldowns.set(message.author.id, Date.now() + this.cooldown);

         let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; 
         setTimeout(() => {
             message.channel.send({ 
                 content: `\`\`\`js\n🔞 Positions - "!jalondepelo"\n\`\`\` ${contenido}`, 
                 components: [
                     new Discord.MessageActionRow().addComponents(
                         [
                             new Discord.MessageButton()
                                 .setStyle(`LINK`)
                                 .setLabel(`Donwload`)
                                 .setURL(contenido),
                         ],
                         [
                             new Discord.MessageButton()
                                 .setStyle(`LINK`)
                                 .setLabel(`WebSite`)
                                 .setURL("https://docs.clubatticus.ml/"),
                         ]
                     )
                 ]
             });
         }, 1000);
 
        // Verificar si el usuario ingresó un parámetro adicional junto con el comando
        if (args[0]) {
            // Verificar si el parámetro adicional es "video"
            if (args[0].toLowerCase() === "video" || args[0].toLowerCase() === "videos") {
                // Filtrar el contenido para enviar solo los enlaces que terminan en .mp4
              const videos = contenidos.filter(c => c.endsWith(".mp4"));
              if (!videos.length) {
                    return message.reply({
                        embeds: [new Discord.MessageEmbed()
                            .setDescription("No found videos\n Images: ")
                            .setColor("e60ad4")
                        ]
                    });
                }  contenido = videos[Math.floor(Math.random() * videos.length)];
            }
            // Verificar si el parámetro adicional es "imagenes"
            else if (args[0].toLowerCase() === "imagenes" || args[0].toLowerCase() === "imagen" || args[0].toLowerCase() === "image" || args[0].toLowerCase() === "images"){
                // Filtrar el contenido para enviar solo los enlaces que terminan en .png
              const imagenes = contenidos.filter(c => c.endsWith(".png"));
              if (!imagenes.length) {
                    return message.reply({
                        embeds: [new Discord.MessageEmbed()
                            .setDescription("No found images\n Videos: ")
                            .setColor("e60ad4")
                        ]
                    });
                
                }
              contenido = imagenes[Math.floor(Math.random() * imagenes.length)];
            }
        }
          
    }
}
    
