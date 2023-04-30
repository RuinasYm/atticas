const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

var bombas = [
    "https://media.tenor.com/5e1S1sXovF4AAAAd/fbomb-bomb.gif",
    "https://media.tenor.com/Uy4FE6a_zuYAAAAC/run-fire.gif",
    "https://media.tenor.com/CEoB6xLMBkcAAAAC/chicken-bomb.gif",
    "https://media.tenor.com/F2MBHC2PajgAAAAd/sanalogy-spongebob.gif",
    "https://media.tenor.com/hDJ1EV_X0AIAAAAC/vasu.gif",
    "https://media.tenor.com/_TQcegphP7MAAAAd/boom-bomb.gif",
    "https://media.tenor.com/EuBh6n2QZPYAAAAC/bomb-explode.gif",

];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("funny")
        .setDescription("Comandos de divercion")
        .addSubcommand(subcommand =>
                subcommand
                .setName("8ball")
                .setDescription("🎱 Pregunta a la bola mágica")
                .addStringOption(option => option.setName("pregunta").setDescription("Formula tu pregunta").setRequired(true))
                )  
        .addSubcommand(subcommand =>
                subcommand
                .setName("banana")
.setDescription("🍌 ¿Cuanto mide tu banana?")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("bomb")
                .setDescription("💣 Utilizalo para lanzar una Bomba!")
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("dado")
                .setDescription("🎲 Tira al Dado!")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("gato")
                .setDescription("🐱 Publica un Gato"),
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("hack")
                .setDescription("👨🏻‍💻 Hackea a un Usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres hackear").setRequired(true))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("horoscopo")
                .setDescription("♉ Descubre tu Horoscopo")
                .addStringOption((option) => {
                    return option
                        .setName("signo")
                        .setDescription("Elije tu signo Sodiacal")
                        .setChoices(
                            { name: "libra", value: "null" },
                            { name: "tauro", value: "null" },
                            { name: "cancer", value: "null" },
                            { name: "capricornio", value: "null" },
                            { name: "sagitario", value: "null" },
                            { name: "geminis", value: "null" },
                            { name: "piscis", value: "null" },
                            { name: "leo", value: "null" },
                            { name: "aries", value: "null" },
                            { name: "virgo", value: "null" },
                            { name: "escorpio", value: "null" },
                            { name: "acuario", value: "null" }
        
                        )
                        .setRequired(true)
                })
                )    
        .addSubcommand(subcommand =>
                subcommand
                .setName("howgay")
                .setDescription("🌈 Calcula que tan gay eres")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("lucky")
                .setDescription("🍀 Descubre tu Suerte")
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("manco")
                .setDescription("🥴 Ve que tan manco Eres")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("meme")
                .setDescription("😅 Genera un meme en el Servidor")
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("motivacion")
                .setDescription("🎆 Envia un mensaje motivador")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("pared")
                .setDescription("🧱 Pon una Pared")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("reverse")
                .setDescription("💬 Revierte un Texto")
                .addStringOption(option => option.setName("texto").setDescription("Dijita un texto a Revertir").setRequired(true))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("saludo")
                .setDescription("👋 Saluda a un Usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres saludar").setRequired(true))
                ),          
        
    async run(client, interaction){
        if (interaction.options.getSubcommand() === "8ball"){
            let question = interaction.options.getString("pregunta") 

            let answer = [
                "Si", "No", "Tal vez", "Probablemente"
            ] 
        
            let finalAnswer = answer[Math.floor(Math.random() * answer.length)]
    
    interaction.reply({
       
        embeds: [new MessageEmbed()
          .setAuthor(`Bola Mágica 🎱`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
          .addField("\n\n > Pregunta:", `\`${question}\``)
          .addField("\n\n > Respuesta:", `\`${finalAnswer}\``)
          //.setDescription(` > Pregunta: ${question}\n\n > Respuesta: ${finalAnswer}`)
          .setColor("e60ad4")
          
          
        ]
      })
        } else if (interaction.options.getSubcommand() === "banana"){
            let cm = Math.floor(Math.random() * 30)

            interaction.reply({
             
              embeds: [new MessageEmbed()
                .setAuthor({name: "Juego Banana", iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setDescription(`**La banana de ${interaction.member}  mide ${cm} cm.**`)
                .setColor("RANDOM")
                .setImage("https://nekocdn.com/res/menus/banana.png")
              ]
            }) 
        } else if (interaction.options.getSubcommand() === "bomb"){
            let bomb = bombas[Math.floor(Math.random() * bombas.length)];

            const embed = new Discord.MessageEmbed()
                .setAuthor("Lanzaron una Bomba!", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setImage(`${bomb}`) //Esto es opcional, solo pones la URL de la imagen
                .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
                 //footer del embed
                ; //para que le salga la hora que lo ejecuto
    
            
            interaction.reply({ embeds: [embed] })
       
        } else if (interaction.options.getSubcommand() === "dado"){
            const dado = Math.floor(Math.random() * 6)


            const embed = new Discord.MessageEmbed()
            .setAuthor(`Dado`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            
            
            .setDescription(`**Este es tu número ${interaction.member}**\n\n  > **🎲:** \`${dado}\``) 
            
            interaction.reply({ embeds: [embed] }) 
        } else if (interaction.options.getSubcommand() === "gato"){
            const array = ["https://cdn.discordapp.com/attachments/1013475919177973891/1019868166240870450/desconocido.jpeg", "https://images-ext-2.discordapp.net/external/SpAMRN8rPIaUlKNzByGF7u8SIZgxEWEqzWYdErkkSuk/https/nekocdn.com/images/j-sxzdqI.jpeg", "https://images-ext-2.discordapp.net/external/4E_V9HREoTSN8_pTpUnOoperLjeCW-KdDn26o2wzT5I/https/nekocdn.com/images/CwsQjnrs.jpeg", "https://images-ext-2.discordapp.net/external/FxXU4SO-PqoM9JwkJHH77vO25BysZc7EJmSlrHfxTLQ/https/nekocdn.com/images/EVAj19TT.jpeg", "https://images-ext-2.discordapp.net/external/MksSvW2ibP9Shksk8oHKAF4jl7blvg2y6xu8gKyIeAI/https/nekocdn.com/images/EvUxPttp.jpeg", "https://images-ext-2.discordapp.net/external/EM-8tHqVbQLs8Jc75yVCuRbLxrbstjo-8TVQRmCviwY/https/nekocdn.com/images/odkGCJQr.jpeg", "https://images-ext-2.discordapp.net/external/PJ_MbfyzQU5XaJgXhpBoxxp2pf8SIMRgIQE0801hQmI/https/nekocdn.com/images/N-LpSnEh.jpeg", "https://images-ext-2.discordapp.net/external/UBImjwxtvQZkq3NaOgwelSB_dVGKB4YKwQty_QntNqk/https/nekocdn.com/images/MZH2E9ns.jpeg", "https://images-ext-2.discordapp.net/external/PQur42Q1J_M5Ir9cuP3GK8WAJoT6xoRnR2x3Mlxntto/https/nekocdn.com/images/4Xlx7wN7.jpeg", "https://images-ext-2.discordapp.net/external/y-AIk7FnisDa4iOqzoN1pTB6SjEhS1ZOeC8iYymOHKc/https/nekocdn.com/images/EsTS8XwK.jpeg", "https://images-ext-2.discordapp.net/external/HEvvuGmFJM0zp1IlY6_B7PmvTlZIPXjWumLMj6gb9yE/https/nekocdn.com/images/4hmeQGSS.jpeg", "https://images-ext-1.discordapp.net/external/k4f9mylM3U5raznZorUTLhInNNueDgDltI0rYx4BFhw/https/nekocdn.com/images/KlUvuL2x.jpeg", "https://images-ext-2.discordapp.net/external/PQur42Q1J_M5Ir9cuP3GK8WAJoT6xoRnR2k4f9mylM3U5raznZorUTLhInNNueDgDltI0rYx4BFhwx3Mlxntto/https/nekocdn.com/images/4Xlx7wN7.jpeg", "https://images-ext-1.discordapp.net/external/wlYoLUnWOLmndG6yXFmmG3b6I7GKC-J1NUaY1uYJzXA/https/nekocdn.com/images/Dq4EF-_U.jpeg", "https://images-ext-2.discordapp.net/external/Q8VmaWx_dSA8cL1Mi5r1KsnPRzUifPry0bwX1dbwg28/https/nekocdn.com/images/wfB9E51Z.jpeg", "https://images-ext-1.discordapp.net/external/FNuxlCHbNTa3tGUBIn7Mfh8a0qE3e5v3TodsF5_Yx-M/https/nekocdn.com/images/N4mH_hnQ.jpeg",] //hacemos un array con todas las posibles respuestas

const embed = new Discord.MessageEmbed()
        .setAuthor(`Gato`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        
        .setColor("e60ad4")
        
    
        interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "hack"){
            let usuario = interaction.options.getUser("usuario") 

            let ip = Math.floor(Math.random() * 91)
            let ip1 = Math.floor(Math.random() * 81)
            let ip2 = Math.floor(Math.random() * 54)
            let ip3 = Math.floor(Math.random() * 48)
            let numero = Math.floor(Math.random() * 10)
            let numero1 = Math.floor(Math.random() * 50)
            let numero2 = Math.floor(Math.random() * 70)
            let numero3 = Math.floor(Math.random() * 70)
            let numero4 = Math.floor(Math.random() * 70)
    
            
            let correo = [
                "@gmail.com", "@gmail.co", "@outlook.es", "@outlook.com", "@outlook.co", "@hotmail.es"
              ] 
        
            let finalcorreo = correo[Math.floor(Math.random() * correo.length)] 
            
            let mensaje = await interaction.reply({
              embeds: [new MessageEmbed()
                  .setAuthor("Hack", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                  .setDescription(`**<a:loading:1042597104490655794> | ${interaction.member} esta hackeando a ${usuario}**`)
                  .setColor("e60ad4")
               ]
    
          })
          setTimeout(() => {
            interaction.editReply({
                  embeds: [new MessageEmbed()
                    .setAuthor("Hack", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setDescription(`**${interaction.member} ha hackeado a ${usuario}**\n\n > **IP:** \`${ip}.${ip1}.${ip2}.${ip3}\`\n > **Gmail:** \`${usuario.tag}${finalcorreo}\`\n > **Contraseña:** \`${numero}${numero1}${numero2}${numero3}${numero4}\``)
                    .setColor("e60ad4")
                  ]
                })
              }, 8000) 
                 
        } else if (interaction.options.getSubcommand() === "horoscopo"){
            let amor = Math.floor(Math.random() * 100)
            let dinero = Math.floor(Math.random() * 100)
            let salud = Math.floor(Math.random() * 100)
            let suerte = Math.floor(Math.random() * 100)
            let trabajo = Math.floor(Math.random() * 100)
            let sexo = Math.floor(Math.random() * 100)
        
            const embed = new Discord.MessageEmbed()
              .setDescription(`**Este es tu Horoscopo ${interaction.member}**\n\n > **💘 Amor:** \`${amor} %\`\n > **💰 Dinero** \`${dinero} %\`\n > **💉 Salud:** \`${salud} %\`\n > ** 🍀Suerte:** \`${suerte} %\`\n > ** 🧰Trabajo:** \`${trabajo} %\`\n > **<:girl4:1016175601108930631> Sexo:** \`${sexo} %\``)
              .setAuthor("Horoscopo", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
              
              .setColor("e60ad4")
              
            interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "howgay"){
            let respuestas = [Math.floor(Math.random() * 100)]
            let random = respuestas[Math.floor(Math.random() * respuestas.length)];
        
            const embed = new Discord.MessageEmbed()
            .setAuthor(`HowGay`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setDescription(`Que tan gay eres? ${interaction.member}`)
            .addField(` > Eres:`,`**\`${random} %\` gay :gay_pride_flag:**`)
            .setColor("e60ad4")
            
            
            interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "lucky"){
            let dn = Math.floor(Math.random() * 100)
            let sl = Math.floor(Math.random() * 100)
            let sr = Math.floor(Math.random() * 100)
            let random = Math.floor(Math.random() * 100)
            
            const embed = new Discord.MessageEmbed()
            .setAuthor("Lucky", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setDescription(`**Esta es tu suerte ${interaction.member}**\n\n > **💘 Amor:** \`${random} %\`\n > **💰 Dinero:** \`${dn} %\`\n > **💉 Salud:** \`${sl} %\`\n > **🍀 Suerte:** \`${sr} %\``)
            
            .setColor("e60ad4")
            
        
            interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "manco"){
            const array = ["https://cdn.discordapp.com/attachments/995244061806039100/1019370889390866492/images_8.jpeg",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042197188555571310/manco1.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042197667939368982/manco2.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042197898772881448/manco3.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042198564723494942/manco4.gif",]
            let probabilidad = Math.floor(Math.random() * 100)
    
            const embed = new Discord.MessageEmbed()
            .setAuthor("Manco", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setDescription(`${interaction.member} **Tu nivel de manco es de** \`${probabilidad}%\``)
            .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
            
            .setColor("e60ad4")
            
    
            interaction.reply({ embeds: [embed] })  
        } else if (interaction.options.getSubcommand() === "meme"){
            const meme = hispamemes.meme(); //Hacemos que se genere/cambie el meme de manera random

            const embed = new Discord.MessageEmbed()//Definimos el embed
            .setAuthor(`Meme`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")//Color
            .setImage(meme)//La imagen, que en este caso será el meme
            //Un footer
            //Hora y fecha en la que se envió el embed
        
            interaction.reply({ embeds: [embed] })//Enviamos el mensaje
        } else if (interaction.options.getSubcommand() === "motivacion"){
            const frase = [//estas son las fraces motivadoras, las puedes personalizar a tu gusto
            "La vida es una aventura emocionante, ¡asegúrate de vivirla al máximo!",
            "Nunca es demasiado tarde para ser lo que quieres ser",
            "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito",
            "La vida es un regalo, ¡no la dejes pasar!",
            "La perseverancia es la madre de todas las cualidades",
            "El fracaso es simplemente la oportunidad de comenzar de nuevo con más experiencia",
            "La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir adelante",
            "No te rindas, el fracaso es solo una oportunidad para comenzar de nuevo con más experiencia"
          
          
          ];
          
            const img = [//estas son las imagenes motivadoras, las puedes personalizar a tu gusto
              "https://pm1.narvii.com/6573/7a48fd580cfcee796669d1414e055247502f5eb2_hq.jpg",
              "https://wc.wallpaperuse.com/wallp/46-465576_s.jpg",
              "https://i.pinimg.com/originals/9b/27/95/9b27958bad64aaf2de043b0ebdf63310.jpg",
              "https://pm1.narvii.com/6626/a73df3afb14a61710b50015847507037988d9a52_hq.jpg",
              "https://i.pinimg.com/originals/49/fe/c8/49fec86beb14058b401afddf41d12877.jpg",
              "https://www.todofondos.net/wp-content/uploads/1920x1200-Mujeres-Agua-Nubes-Paisajes-Arboles-Arte-de-Fantasia.jpg",
            
          
          ];
    
          let frases = frase[Math.floor(Math.random() * frase.length)];//con esto creamos la funcion de enviar frases aleatorias
          let imagenes = img[Math.floor(Math.random() * img.length)];//con esto creamos la funcion de enviar imagenes aleatorias
    
          const embed = new Discord.MessageEmbed()
          .setAuthor({name: "Frace motivadora!", iconURL: client.user.displayAvatarURL({dynamic: true})})//Este es el titulo superior del mensaje
          .setDescription(`\`\`\`${frases}\`\`\``)//Aca van las frases motivadoras que se enviaran
          .setImage(`${imagenes}`)//Aca van las imagenes motivadoras que se enviaran
          .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
          ; //para que le salga la hora que lo ejecuto
    
          
          interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "pared"){
            
        const array = ["https://cdn.discordapp.com/attachments/1014748725110902904/1019485194329260072/lv_0_20220914004750.gif",]
        let pared = array[Math.floor(Math.random() * array.length)];

        const embed = new Discord.MessageEmbed()
        .setAuthor("Pared", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setDescription(`**${interaction.member} Acabo de poner pared**`)
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        
        .setColor("e60ad4")
        

        interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "reverse"){
            let revert = interaction.options.getString('texto')
            if(!revert)return interaction.reply({
             embeds: [new Discord.MessageEmbed()
                 .setDescription("**<:fail:1083542064924479549> |  Tienes que indicar un texto a Revertir! | <:fail:1083542064924479549>**")
                 .setColor("e60ad4")
             ]
         })
         let reverse = revert.split("").reverse().join("")
         const embed = new Discord.MessageEmbed()
         .setAuthor(`Reverse`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png") 
         .setColor("e60ad4")
         .setDescription(` > **Autor:** ${interaction.member}\n > **Texto:** ${reverse}`)
                 interaction.reply({ embeds: [embed] })   
        } else if (interaction.options.getSubcommand() === "saludo"){
            const array = [    "https://cdn.discordapp.com/attachments/1030686591972282418/1042203427708612679/saludos9.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203428241281044/saludos8.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203428648136914/saludos7.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203429159833620/saludos6.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203429600243772/saludos5.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203433672904796/saludos4.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203434092351588/saludos3.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203434461433946/saludos2.gif",
            "https://cdn.discordapp.com/attachments/1030686591972282418/1042203435023487006/saludos1.gif",]
    
        let usuario = interaction.options.getUser("usuario") 
    
    const embed = new Discord.MessageEmbed()
    
                .setAuthor(`Saludo`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png") 
                .setDescription(`**${interaction.member} ha saludado a ${usuario}**`)
                .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
                .setColor("e60ad4")
                
                interaction.reply({ embeds: [embed] })
            
        } 

    }
}


