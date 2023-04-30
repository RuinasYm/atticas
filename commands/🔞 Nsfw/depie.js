const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
// Crear un objeto de Map para almacenar el tiempo de enfriamiento del comando por usuario
const cooldowns = new Map();

module.exports = {
    name: "depie",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!depie",
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
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721013808287834/twerkbase_20220418_193555.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721014332571728/xvideos.com_46abf7727ab6637b72dde68c9bece644.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721014890397716/xvideos.com_bf97be48d31d9743584f83941521d16e.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721015469228162/xvideos.com_8f61a8d04872a288921c4629071179fe.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721016039657472/ssstwitter_1649020655.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721016526176256/UnusedLavishAlbatross-mobile.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721017021120532/video5028335328318981196_001_001.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721017683824720/Brazzers_Timere_Hardcore_20.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721018325532772/received_375354820670529.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721018908557494/VID-20230125-WA0015.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721059467481179/vyzR87Y4jFiSuTlI.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721059853344898/1127320.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721060402810920/cPV0rG2NkcE7yTUo.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721060906110986/VID-20220906-WA0043.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721061396848733/VID_20220729_181113_278.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721061782720592/iqPq2kdLANHybsiU.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721062294442004/video0-2-1.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721062697082951/UnsteadyRashMaggot-mobile.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721063250743297/st.cofDxfdioupI.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721063850516590/VID-20220624-WA0035.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1077721066677481573/EnviousRoastedAltiplanochinchillamouse-mobile.mov",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1083085222876287136/924735.mp4",
            "https://cdn.discordapp.com/attachments/1077720732458569748/1083085223216029758/1664981817265574.webm",

 ];
    
         // Si el usuario puede usar el comando, establecer su tiempo de enfriamiento
         cooldowns.set(message.author.id, Date.now() + this.cooldown);

         let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; 
         setTimeout(() => {
             message.channel.send({ 
                 content: `\`\`\`js\n🔞 Positions - "!depie"\n\`\`\` ${contenido}`, 
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
    
