const Discord = require('discord.js');

// Crear un objeto de Map para almacenar el tiempo de enfriamiento del comando por usuario
const cooldowns = new Map();
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "sentones",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!sentones",
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
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109588243886130/Club_Atticus.003.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109588650729552/Club_Atticus.004.movhttps://cdn.discordapp.com/attachments/1067486122571223061/1070109589057568808/Club_Atticus.004.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109589464428654/Club_Atticus.005.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109590030655508/Club_Atticus.005.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109590613667902/Club_Atticus.001.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109591028891731/Club_Atticus.001.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109591402197062/Club_Atticus.002.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109591871946762/Club_Atticus.002.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109592278806589/Club_Atticus.003.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109615259406366/Club_Atticus.008.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109615708176414/Club_Atticus.009.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109616115036180/Club_Atticus.009.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109616576417812/Club_Atticus.006.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109616945496187/Club_Atticus.006.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109617331384430/Club_Atticus.007.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109617729851443/Club_Atticus.007.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109618094735481/Club_Atticus.008.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109623924838420/Club_Atticus.012.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109624910487692/Club_Atticus.013.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109626269442138/Club_Atticus.010.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109626693079111/Club_Atticus.010.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109627154440312/Club_Atticus.011.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109693747417159/Club_Atticus.017.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109693336354907/Club_Atticus.017.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109627154440312/Club_Atticus.011.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109627515158548/Club_Atticus.011.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109627888455721/Club_Atticus.012.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109694196195368/Club_Atticus.018.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109694741446856/Club_Atticus.014.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109695748079626/Club_Atticus.015.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109696180113459/Club_Atticus.015.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109696687611944/Club_Atticus.016.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109697157365810/Club_Atticus.016.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109769332957254/Club_Atticus.021.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109769802727574/Club_Atticus.022.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109770213765140/Club_Atticus.022.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109770666745856/Club_Atticus.018.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109771090378892/Club_Atticus.019.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109771543359518/Club_Atticus.019.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109771958591538/Club_Atticus.020.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109772298338425/Club_Atticus.020.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109772700987532/Club_Atticus.021.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109800794439770/Club_Atticus.027.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109801297747998/Club_Atticus.028.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109801687810138/Club_Atticus.023.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109802044342414/Club_Atticus.023.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109802459570176/Club_Atticus.024.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109802933518397/Club_Atticus.024.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109803319410845/Club_Atticus.025.mov",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109803663335546/Club_Atticus.025.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109803986288730/Club_Atticus.026.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109820948066434/Club_Atticus.036.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109821782728755/Club_Atticus.029.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109822176989254/Club_Atticus.030.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109823082958918/Club_Atticus.032.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109823573696543/Club_Atticus.033.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109823967957153/Club_Atticus.034.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109824362225824/Club_Atticus.035.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109834210447451/Club_Atticus.043.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109834696999002/Club_Atticus.044.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109835527458816/Club_Atticus.038.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109835984650350/Club_Atticus.039.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109836458610739/Club_Atticus.040.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109836890607766/Club_Atticus.041.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109837284884581/Club_Atticus.042.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109844218056764/Club_Atticus.054.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109844591345704/Club_Atticus.046.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109844960456715/Club_Atticus.047.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109845346324490/Club_Atticus.048.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109845786722314/Club_Atticus.049.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109846210359336/Club_Atticus.050.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109846633975891/Club_Atticus.051.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109847594479638/Club_Atticus.053.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109865856483409/Club_Atticus.062.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109866640814160/Club_Atticus.063.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109867014098994/Club_Atticus.064.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109867332878336/Club_Atticus.055.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109868087840828/Club_Atticus.057.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109868444364890/Club_Atticus.058.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109868834426900/Club_Atticus.059.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109869883011102/Club_Atticus.061.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109876182851614/Club_Atticus.069.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109877030101035/Club_Atticus.065.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109877579567165/Club_Atticus.066.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1070109877986410566/Club_Atticus.067.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1072276236350525572/VID_20220527_105645_910.mp4.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1072276335013154958/video_2022-05-14_08-54-38.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1081027790616395847/1158914.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1083084885599731833/1546407918820.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1083084886082072626/1156746.mp4",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1083084886459547648/1641745918600.webm",
            "https://cdn.discordapp.com/attachments/1067486122571223061/1083084886887383181/Club_Atticus.007.mp4",

 ];
    
         // Si el usuario puede usar el comando, establecer su tiempo de enfriamiento
         cooldowns.set(message.author.id, Date.now() + this.cooldown);

         let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; 
         setTimeout(() => {
             message.channel.send({ 
                 content: `\`\`\`js\n🔞 Positions - "!sentones"\n\`\`\` ${contenido}`, 
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
    
