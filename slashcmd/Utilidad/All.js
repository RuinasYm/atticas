const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const { mem, cpu, os } = require('node-os-utils'); //npm i node-os-utils
const day = require("dayjs")
const translate = require ("translate-google")
const Canvas = require('canvas');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("util")
        .setDescription("📣 Mira la informacion de un usuario!")
        .addSubcommand(subcommand =>
            subcommand
            .setName("avatar")
            .setDescription("🎭 Mira el avatar de otro Usuario")
            .addUserOption(option => option.setName('member').setDescription('Menciona el usuario que veras el avatar').setRequired(false))
            )
        .addSubcommand(subcommand =>
            subcommand
            .setName("google")
            .setDescription("🌐 Busca algo en Google")
            .addStringOption(option => option.setName("busqueda").setDescription("Contenido a Buscar").setRequired(true))
            )
        .addSubcommand(subcommand =>
                subcommand
            .setName("hub")
            .setDescription("💛 Busca algo en PornHub")
            .addStringOption(option => option.setName("busqueda").setDescription("Contenido a Buscar").setRequired(true))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("bot")
                .setDescription("📣 Mira la informacion del Bot!")
                )  
        .addSubcommand(subcommand =>
                subcommand
                .setName("by")
                .setDescription("© Mira los creditos del Bot!")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("confesion")
                .setDescription("🙊 Envia una Confesion!")
                .addStringOption(o => o.setName("contenido").setDescription("Escribe una Confesion").setRequired(true))
                .addBooleanOption(oa => oa.setName("anonimo").setDescription("Establece si la confesion sera Anonima!").setRequired(true))
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("embed")
                .setDescription("💎 Crea un embed personalizado")
                .addChannelOption((option) => {
                    return option
                        .setName("canal")
                        .setDescription("Elije el canal donde se enviara el embed")
                        .addChannelTypes(0)
                        .setRequired(true)
                })
                .addStringOption((option) => {
                    return option
                        .setName("titulo")
                        .setDescription("Agrega un titulo al embed")
                        .setRequired(true)
                })
                .addStringOption((option) => {
                    return option
                        .setName("descripción")
                        .setDescription("Agrega una descripcion al embed")
                        .setRequired(false)
                })
                .addStringOption((option) => {
                    return option
                        .setName("thumbnail")
                        .setDescription("Agrega una miniatura al embed")
                        .setRequired(false)
                })
                .addStringOption((option) => {
                    return option
                        .setName("imagen")
                        .setDescription("Agrega una imagen al embed")
                        .setRequired(false)
                })
                .addStringOption((option) => {
                    return option
                        .setName("footer")
                        .setDescription("Agrega un pie de pagina al embed")
                        .setRequired(false)
                })
                .addStringOption((option) => {
                    return option
                        .setName("color")
                        .setDescription("Elije un color para el embed")
                        .setChoices(
                            { name: "🔵 → Azul Cielo", value: "#CCEEFF" },
                            { name: "⚫️ → Negro", value: "#000000" },
                            { name: "⚪ → Gris", value: "#808080" },
                            { name: "🟣 → Morado", value: "#800080" },
                            { name: "💮 → Rosado", value: "#e60ad4" },
                            { name: "🟢 → Verde", value: "#00FF00" },
                            { name: "🟡 → Amarillo", value: "#FFFF00" },
                            { name: "🔵​ → Azul", value: "#0000FF" },
                            { name: "🔴 → Rojo", value: "#FF0000" },
                            { name: "🌈 → Random", value: "RANDOM" }
                        )
                        .setRequired(false)
                })
                .addStringOption((option) => {
                    return option
                        .setName("timestamp")
                        .setDescription("Agrega la hora al embed")
                        .setChoices(
                            { name: "Si", value: "s" },
                            { name: "No", value: "n" }
                        )
                        .setRequired(false)
                })
                .addStringOption((option) => {
                    return option
                        .setName("autor")
                        .setDescription("Agrega el author al embed")
                        .setChoices(
                            { name: "Si", value: "s" },
                            { name: "No", value: "n" }
                        )
                        .setRequired(false)
                })
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("encuesta")
                .setDescription("📊 Crea una Encuesta")
            
                .addChannelOption(o => o.setName("canal").setDescription("el canal donde enviaras la encuesta").setRequired(true))
                .addStringOption(o => o.setName("pregunta").setDescription("la pregunta de la encuesta").setRequired(true))
                .addStringOption(o => o.setName("opcion1").setDescription("opcion de encuenta").setRequired(true))
                .addStringOption(o => o.setName("opcion2").setDescription("opcion de encuenta").setRequired(true))
                .addStringOption(o => o.setName("opcion3").setDescription("opcion de encuesta").setRequired(false))
                .addStringOption(o => o.setName("opcion4").setDescription("opcion de encuesta").setRequired(false))
                .addStringOption(o => o.setName("opcion5").setDescription("opcion de encuesta").setRequired(false))
                .addStringOption(o => o.setName("opcion6").setDescription("opcion de encuesta").setRequired(false))
                .addStringOption(o => o.setName("opcion7").setDescription("opcion de encuesta").setRequired(false))
                .addStringOption(o => o.setName("opcion8").setDescription("opcion de encuesta").setRequired(false))
                .addStringOption(o => o.setName("opcion9").setDescription("opcion de encuesta").setRequired(false))
                .addStringOption(o => o.setName("opcion10").setDescription("opcion de encuesta").setRequired(false))
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("fecha")
                .setDescription("⌚ Muestra la fecha Actual.")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("invites")
                .setDescription("👤 mira las invites de un usuario.")
                .addUserOption(option => option.setName('member').setDescription('Menciona al usuario').setRequired(false))
                )    
        .addSubcommand(subcommand =>
                subcommand
                .setName("invite")
                .setDescription("✍️ Genera un link de invitacion")
                .addStringOption((option) => {
                    return option
                        .setName("opciones")
                        .setDescription("✍️ → invite")
                        .setChoices(
                            { name: "✍️ → Invite Server", value: "1" },
                            { name: "✍️ → Invite Channel", value: "2" }
            
                        )
                        .setRequired(true)
                })
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("jail")
                .setDescription("⛓️ Encarcela a un Usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres Encarcelar").setRequired(true))
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("ping")
                .setDescription("🏓 Mira mi latencia")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("presentacion")
        .setDescription("🌸 → Presentate en el Servidor")
        .addStringOption((option) => {
            return option
                .setName("nombre")
                .setDescription("🌸 → Ingresa tu nombre")
        
                .setRequired(true)
        })
        .addStringOption((option) => {
          return option
              .setName("edad")
              .setDescription("🌸 → Ingresa tu edad")
      
              .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("genero")
            .setDescription("🌸 → Ingresa tu Genero")
            .setChoices(
                { name: "🌸 → Femenino", value: "Femenino" },
                { name: "🌸 → Masculino", value: "Masculino" },
                { name: "🌸 → No Binario", value: "No Binario" }
            )
            .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("sexualidad")
            .setDescription("🌸 → Ingresa tu Sexualidad")
            .setChoices(
                { name: "🌸 → Heterosexual", value: "Heterosexual" },
                { name: "🌸 → Homosexual", value: "Homosexual" },
                { name: "🌸 → Bisexual", value: "Bisexual" },
                { name: "🌸 → Pansexual", value: "Pansexual" },
                { name: "🌸 → Asexual", value: "Asexual" },
                { name: "🌸 → No Binario", value: "No Binario" }
                
            )
            .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("cumpleaños")
            .setDescription("🌸 → Ingresa tu cumpleaños")
            .setRequired(true)
      })
      .addStringOption((option) => {
        return option
            .setName("pais")
            .setDescription("🌸 → Ingresa tu pais")
    
            .setRequired(true)
    })
    .addStringOption((option) => {
      return option
          .setName("altura")
          .setDescription("🌸 → Ingresa tu altura")
  
          .setRequired(true)
  })
  .addStringOption((option) => {
    return option
        .setName("comida-favorita")
        .setDescription("🌸 → Ingresa tu comida favorita")

        .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("animal-favorito")
      .setDescription("🌸 → Ingresa tu animal favorito")
      .setRequired(true)
})

.addStringOption((option) => {
  return option
      .setName("color-favorito")
      .setDescription("🌸 → Ingresa tu color favorito")
      .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("musica-favorita")
      .setDescription("🌸 → Ingresa tu musica favorita")
      .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("juego-favorito")
      .setDescription("🌸 → Ingresa tu juego favorito")
      .setRequired(true)
})

.addStringOption((option) => {
  return option
      .setName("tus-gustos")
      .setDescription("🌸 → Ingresa lo que mas te guste de ti")
      .setRequired(true)
})
.addStringOption((option) => {
  return option
      .setName("md")
      .setDescription("🌸 → Indica tu Md")
      .setChoices(
          { name: "🌸 → Abierto", value: "Abierto" },
          { name: "🌸 → Cerrado", value: "Cerrado" },
          { name: "🌸 → Abierto (Solo Chicas)", value: "Abierto" },
          { name: "🌸 → Abierto (Solo Chicos)", value: "Abierto" },
          
      )
      .setRequired(true)
})
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("random")
                .setDescription("👤 Elije a un usuario Aleatorio!")
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName('role') // Seteamos el nombre
                .setDescription(' ✨ Añade o remueve un rol a un usuario') // La description
                .addStringOption((option) => {
                    return option
                        .setName("selecciona")
                        .setDescription("✨ → Haz una selecion")
                        .setChoices(
                            { name: "✨ → Agregar Rol", value: "1" },
                            { name: "✨ → Remover Rol", value: "2" },
                        )
                        .setRequired(true)
                  })
                .addUserOption(usuario => usuario.setName('usuario').setDescription('Asignale el rol al usuario').setRequired(true)) // Creamos la opcion para mencionar un usuario y que sea obligatorio
                .addRoleOption(role => role.setName('role').setDescription('Asigna el rol').setRequired(true))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("server")
        .setDescription("📣 Mira la informacion del Servidor!")
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("sugerencia")
        .setDescription("💡 Envia una Sugerencia al bot!")
        .addStringOption(o => o.setName("contenido").setDescription("Escribe una sugerencia").setRequired(true))
        .addBooleanOption(oa => oa.setName("anonimo").setDescription("Establece si la sugerencia sera Anonima!").setRequired(true))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("texthub")
                .setDescription("🧡 Texto en fondo Hub!")
                .addStringOption(o => o.setName("contenido").setDescription("Escribe el contenido a Transformar").setRequired(true))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("uptime")
                .setDescription("⌛ Mira el tiempo que llevo Encendido")
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("user")
                .setDescription("📣 Mira la informacion de un usuario!")
                .addUserOption(option => option.setName('usuario').setDescription('Ingresa un usuario').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                    .setName("traductor")
      .setDescription("🔁 Traduce un Texto")
      .addStringOption((option) => {
        return option
            .setName("idioma")
            .setDescription("Elije un idioma para Traducir")
            .setChoices(
                { name: "🔁 → en (texto a ingles)", value: "1" },
                { name: "🔁 → es (texto a español)", value: "2" },
                { name: "🔁 → fr (texto a frances)", value: "3" },
                { name: "🔁 → rs (texto a ruso)", value: "4" },
                { name: "🔁 → tr (texto a Turco)", value: "5" },
            )
            .setRequired(true)
    })
    .addStringOption((option) => {
        return option
            .setName("texto")
            .setDescription("Dijita el texto a traducir")
            .setRequired(true)
    })
                    ),          
        
    async run(client, interaction){
        if (interaction.options.getSubcommand() === "avatar"){

            const member = interaction.options.getMember("member") || interaction.member;

            const embed = new MessageEmbed()
            .setAuthor(`Avatar`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            
            
            .setDescription(`**Avatar de ${interaction.member}**`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            await interaction.reply({ embeds: [embed] });
        } else if (interaction.options.getSubcommand() === "google"){

            let google = interaction.options.getString("busqueda") 


            const embed = new Discord.MessageEmbed()
                        .setImage(`https://cdn.discordapp.com/attachments/1030686591972282418/1043264490495541248/nuevo-logo-de-google.jpg`)
                        .setAuthor("Busqueda Google", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                        .setColor("e60ad4")
                        
                        
                        .setDescription(`\n > **Busqueda:** \`${google}\`\n > **Resultado:** [Click Aqui](https://www.google.com/search?q=${google})`)
                        
                        interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "hub"){
                let porn = interaction.options.getString("busqueda") 


                const embed = new Discord.MessageEmbed()
                            .setImage(`https://3.bp.blogspot.com/-CRgUeWpqlUE/W4eG4TWP9pI/AAAAAAAAeeA/ZTaoug-OJw0Q_b2KoCYHwl9X8r9vxUfvACLcBGAs/s400/Unknown.png`)
                            .setAuthor("Busqueda Hub", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                            .setColor("e60ad4")
                            
                            
                            .setDescription(`\n > **Busqueda:** \`${porn}\`\n > **Resultado:** [Click Aqui](https://es.pornhub.com/video/search?search=${porn})`)
                            
                            interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "bot"){
                const { usedMemMb } = await mem.info();

const embed = new Discord.MessageEmbed()
.setAuthor(`Bot info`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
.setDescription(` > **Nombre:** <@1044756126350196796>\n > **ID:** \`1044756126350196796\`\n > **Version:** \`1.0\`\n > **Creacion:** \`12/6/2022\`\n > **Developer:** <@1001880420138373191>\n > **Ram usada:** \`${usedMemMb} MB\`\n > **Cpu usado:** \`${await cpu.usage()} %\`\n > **Ping:** \`${client.ws.ping} ms\`\n > **Prefijo:** \`!\`\n > **Web:** [**Click Aqui**](https://docs.clubatticus.ml/)`)
.setColor("e60ad4")


interaction.reply({ embeds: [embed] }) 
            
        } else if (interaction.options.getSubcommand() === "by"){
                const embed = new Discord.MessageEmbed()
                .setAuthor(`Creditos`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                
                .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1065746146368180365/neko-koshki-devushka.jpg")
                .setDescription(`\n > **Fundador de** \`${interaction.guild.name}\`\n > [Mastoideo#6523](https://discord.com/users/1001880420138373191)`)
            
                interaction.reply({ embeds: [embed] })
                
            
        } else if (interaction.options.getSubcommand() === "confesion"){
                let e = new Discord.MessageEmbed()

const contenido = interaction.options.getString("contenido")
const anonimo = interaction.options.getBoolean("anonimo")

if(anonimo === false){
    const embed = new Discord.MessageEmbed()
    .setDescription(` > ${contenido}`)
    .setAuthor({name: `Confesion de ${interaction.user.username}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true})})
    .setColor("e60ad4")
    

    await client.channels.cache.get("1076251647501680760").send({embeds: [embed] })

}

if(anonimo === true){
    const embed1 = new Discord.MessageEmbed()
    .setDescription(` > ${contenido}`)
    .setAuthor({name: `Confesion Anonima`, iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setColor("e60ad4")
    

    await client.channels.cache.get("1076251647501680760").send({embeds: [embed1] })


}

await interaction.reply({ embeds: [e.setDescription(`[Confession](https://discord.com/channels/1067233169184657438/1076251647501680760) enviada correctamente`).setColor("e60ad4")], ephemeral: true })  
            
        } else if (interaction.options.getSubcommand() === "embed"){
                let e = new MessageEmbed()
                let e2 = new MessageEmbed()
        
                if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
        
                let canal = interaction.options.getChannel("canal")
                let t = interaction.options.getString("titulo")
                let d = interaction.options.getString("descripción")
                let th = interaction.options.getString("thumbnail")
                let img = interaction.options.getString("imagen")
                let tim = interaction.options.getString("timestamp")
                let f = interaction.options.getString("footer")
                let c = interaction.options.getString("color")
                let aut = interaction.options.getString("autor")
        
                if (t) {
                    e.setTitle(t)
                } else { }
        
                if (d) {
                    if (d.length > 2048) return interaction.reply({ embeds: [e2.setDescription("**La __Descripcion__ sobrepasa los 2048 caracteres**").setColor("e60ad4")], ephemeral: true })
                    e.setDescription(d)
                } else { }
        
                if (th) {
                    if (!th.startsWith("https://")) return interaction.reply({ embeds: [e2.setDescription("**Ingresa una URL valido, Miniatura**").setColor("e60ad4")], ephemeral: true })
                    e.setThumbnail(th)
                } else { }
        
                if (img) {
                    if (!img.startsWith("https://")) return interaction.reply({ embeds: [e2.setDescription("**Ingresa una URL valido, Imagen**").setColor("e60ad4")], ephemeral: true })
                    e.setImage(img)
                } else { }
        
                if (tim) {
                    if (tim === "s") {
                        e
                    } else if (tim === "n") { }
                } else { }
        
                if (aut) {
                    if (aut === "s") {
                        e.setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                    } else if (aut === "n") { }
                } else { }
        
                if (f) {
                    if (f.length > 256) return interaction.reply({ embeds: [e2.setDescription("**El _Footer__ sobrepasa los 256 caracteres!**").setColor("e60ad4")], ephemeral: true })
                    e.setFooter({ text: f })
                } 
        
                if (c) {
                    if (c === "#CCEEFF") { e.setColor("#CCEEFF") } else { }
                    if (c === "#000000") { e.setColor("#000000") } else { }
                    if (c === "#808080") { e.setColor("#808080") } else { }
                    if (c === "#800080") { e.setColor("#800080") } else { }
                    if (c === "#e60ad4") { e.setColor("#e60ad4") } else { }
                    if (c === "#00FF00") { e.setColor("#00FF00") } else { }
                    if (c === "#FFFF00") { e.setColor("#FFFF00") } else { }
                    if (c === "#0000FF") { e.setColor("#0000FF") } else { }
                    if (c === "#FF0000") { e.setColor("#FF0000") } else { }
                    if (c === "RANDOM") { e.setColor("RANDOM") } else { }
                } else { }
        
                let m = await canal.send({ embeds: [e] })
          
                interaction.reply({ embeds: [e2.setDescription("**Se envio correctamente el **" + `[embed](${m.url})`).setColor("e60ad4")], ephemeral: true })
            
        } else if (interaction.options.getSubcommand() === "encuesta"){
                let e = new Discord.MessageEmbed()

                if (!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**")
                    .setColor("e60ad4")
                  ], ephemeral: true})
                  if(!interaction.guild.me.permissions.has("MANAGE_GUILD"))return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_GUILD\` | <:fail:1083542064924479549>**")
                    .setColor("e60ad4")], ephemeral: true})
            
                const pregunta = interaction.options.getString("pregunta")
                const op1 = interaction.options.getString("opcion1")
                const op2 = interaction.options.getString("opcion2")
                const op3 = interaction.options.getString("opcion3")
                const op4 = interaction.options.getString("opcion4")
                const op5 = interaction.options.getString("opcion5")
                const op6 = interaction.options.getString("opcion6")
                const op7 = interaction.options.getString("opcion7")
                const op8 = interaction.options.getString("opcion8")
                const op9 = interaction.options.getString("opcion9")
                const op10 = interaction.options.getString("opcion10")
                const canal = interaction.options.getChannel("canal")
            
                let embed = new Discord.MessageEmbed()
                .setAuthor({name: 'Encuesta', iconURL: client.user.displayAvatarURL({dynamic: true})})
                .setDescription(`**${pregunta}**`)
                .setColor("e60ad4")
                .setTimestamp()
                
                
                if(op1) embed.addField(`ﾠ`, ` 1️⃣ ${op1}`)
                if(op2) embed.addField(`ﾠ`, ` 2️⃣ ${op2}`)
                if(op3) embed.addField(`ﾠ`, ` 3️⃣ ${op3}`)
                if(op4) embed.addField(`ﾠ`, ` 4️⃣ ${op4}`)
                if(op5) embed.addField(`ﾠ`, ` 5️⃣ ${op5}`)
                if(op6) embed.addField(`ﾠ`, ` 6️⃣ ${op6}`)
                if(op7) embed.addField(`ﾠ`, ` 7️⃣ ${op7}`)
                if(op8) embed.addField(`ﾠ`, ` 8️⃣ ${op8}`)
                if(op9) embed.addField(`ﾠ`, ` 9️⃣ ${op9}`)
                if(op10) embed.addField(`ﾠ`, `🔟 ${op10}`)
            
                let m = await canal.send({ embeds: [embed] })
            
                if(op1) m.react("1️⃣")
                if(op2) m.react("2️⃣")
                if(op3) m.react("3️⃣")
                if(op4) m.react("4️⃣")
                if(op5) m.react("5️⃣")
                if(op6) m.react("6️⃣")
                if(op7) m.react("7️⃣")
                if(op8) m.react("8️⃣")
                if(op9) m.react("9️⃣")
                if(op10) m.react("🔟")
            
                interaction.reply({ content: `Encuesta creada en ${canal}!`, ephemeral: true})
            
        } else if (interaction.options.getSubcommand() === "fecha"){
                const embed = new Discord.MessageEmbed()
                .setAuthor("Fecha", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setDescription(`\n > **Date:** <t:${Math.round(Date.now()/1000)}:d>\n > **Hora:** <t:${Math.round(Date.now()/1000)}:t>`) 
                  .setColor("e60ad4")
                  
                  
               interaction.reply({embeds: [embed]})  
            
        } else if (interaction.options.getSubcommand() === "invites"){
                const user = interaction.options.getMember("member") || interaction.member;
        
                let invites = await interaction.guild.invites.fetch();
                let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id);
            
                let i = 0;
                userInv.forEach(inv => i += inv.uses);
            
                const embed = new Discord.MessageEmbed()
                .setColor("e60ad4")
                .setAuthor({name: `Invites`, iconURL: user.displayAvatarURL({dynamic: true})})
                    .setDescription(`**${user.user.username}** tiene **${i}** invitaciones.`)
            
                await interaction.reply({ embeds: [embed]});
            
        } else if (interaction.options.getSubcommand() === "invite"){
                let selecion = interaction.options.getString("opciones")

                if (selecion) {
                    if (selecion === "1") {         
                        const embed = new MessageEmbed()
                        .setAuthor("Invite", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                        .setDescription(`**Invitacion del servidor** \`${interaction.guild.name}\`\n > **Link:** \`https://discord.gg/bvCV3pTrbQ\``)   
                        
                        .setColor("e60ad4")
                        .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1050916914777571469/clubatticus.png")
        
                        interaction.reply({embeds: [embed]}) } else { }
                    
                if (selecion === "2") { 
                    interaction.channel.createInvite({ maxAge: 0, MaxUses: 5 }).then(link => {        
                    const embed = new MessageEmbed()
                    .setAuthor("Invite", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setDescription(`**Invitacion del canal ** \`${interaction.channel.name}\`\n > **Link:** \`${link}\``)   
                    
                    .setColor("e60ad4")
                    .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1050916914777571469/clubatticus.png")
        
                    interaction.reply({embeds: [embed]}) })} }
            
        } else if (interaction.options.getSubcommand() === "jail"){
                let user = interaction.options.getUser("usuario") 
                const avatar = user.displayAvatarURL({ size: 2048, format: "png" });
            
                const embed= new Discord.MessageEmbed()
                        .setAuthor(`Jail`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                        .setDescription(`**${interaction.member} ha encarcelado a ${user}**`)
                        .setImage(`https://some-random-api.ml/canvas/jail?avatar=${avatar}`)
                        .setColor("e60ad4")
                        
                        
            
                    interaction.reply({embeds: [embed]})
            
        } else if (interaction.options.getSubcommand() === "ping"){
                interaction.reply({
                        embeds: [new MessageEmbed()
                          .setAuthor("Ping", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                          .setDescription(` > **Latencia:** \`${client.ws.ping} ms\``)
                          .setColor("e60ad4")
                          
                          
                        ]
                      })
            
        } else if (interaction.options.getSubcommand() === "presentacion"){
                let e = new Discord.MessageEmbed()

                const name = interaction.options.getString('nombre')
                const edad = interaction.options.getString('edad')
                const genero = interaction.options.getString('genero')
                const sexualidad = interaction.options.getString('sexualidad')
                const cumpleaños = interaction.options.getString('cumpleaños')
                const pais = interaction.options.getString('pais')
                const altura = interaction.options.getString('altura')
                const comida = interaction.options.getString('comida-favorita')
                const animal = interaction.options.getString('animal-favorito')
                const color = interaction.options.getString('color-favorito')
                const musica = interaction.options.getString('musica-favorita')
                const juego = interaction.options.getString('juego-favorito')
                const gusto = interaction.options.getString('tus-gustos')
                const md = interaction.options.getString('md')
            
                const embed = new Discord.MessageEmbed()
            .setAuthor({name: `Presentacion de ${interaction.user.username}\n`, iconURL: interaction.member.displayAvatarURL({ dynamic: true})})
            .setColor("e60ad4")
            .setThumbnail(interaction.member.displayAvatarURL({ dynamic: true}))
            .setDescription(`> ↬ ♡ **Nombre:** ${name}\n > ↬ ♡ **Edad:** ${edad}\n > ↬ ♡ **Genero:** ${genero}\n > ↬ ♡ **Sexualidad:** ${sexualidad}\n > ↬ ♡ **Cumpleaños:** ${cumpleaños}\n > ↬ ♡ **Pais:** ${pais}\n > ↬ ♡ **Altura:** ${altura}\n > ↬ ♡ **Comida Fav:** ${comida}\n > ↬ ♡ **Animal Fav:** ${animal}\n > ↬ ♡ **Color Fav:** ${color}\n > ↬ ♡ **Musica Fav:** ${musica}\n > ↬ ♡ **Juego Fav:** ${juego}\n > ↬ ♡ **Mis Gustos:** ${gusto}\n > ↬ ♡ **Md:** ${md}`)
             
            await client.channels.cache.get("1073808907467759777").send({ embeds: [embed] })
            await interaction.reply({ embeds: [e.setDescription(`[Presentacion](https://discord.com/channels/1067233169184657438/1073808907467759777) enviada correctamente`).setColor("e60ad4")], ephemeral: true })    
            
        } else if (interaction.options.getSubcommand() === "random"){
                try {

                        const memberid = await interaction.guild.members.fetch()
                            .then((usuariostotales) => {
                                return [
                                    `${usuariostotales.random().id}`
                                ].join('\n');
                            });
            
               const member = await interaction.guild.members.cache.find(m => m.id === `${memberid}`)
              const embed = new Discord.MessageEmbed()
            
                .setAuthor("Random User", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setThumbnail(member.user.displayAvatarURL({ size: 300, dynamic: true}))
                .setDescription(` > **Usuario:** ${member.user}\n > **ID:** \`${memberid}\`\n > **Union al Servidor:** <t:${(Number(member.joinedAt) / 1000).toFixed(0)}:D>`) 
                .setColor("e60ad4")
                
                
            
              await  interaction.reply({ embeds: [embed] })
            
                    } catch (e) {
                        console.log(e)
                    }
            
        } else if (interaction.options.getSubcommand() === "role"){
                if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
        let c = interaction.options.getString("selecciona")
        let Target = interaction.options.getMember('usuario')
        let role = interaction.options.getRole('role')
        let e = new Discord.MessageEmbed()

        
        if (c) {
            if (c === "1") { 
                if(interaction.member.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el del usuario.
                    return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedes agregarle este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                }
                if(interaction.guild.me.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el bot.
                    return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo agregarle este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                 }
                if(interaction.guild.me.roles.highest.comparePositionTo(role) <= 0){ // Si el rol no puee ser aregado.
                    return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo agregar este rol! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                 }
            Target.roles.add(role.id);
            return interaction.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Has añadido el rol ${role} al usuario ${Target} `).setColor("e60ad4")], ephemeral: true })
                
            
                           
                
             } else { }
            if (c === "2") {             
            Target.roles.remove(role.id)
            if(interaction.member.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el del usuario.
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedes remover este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
            }
            if(interaction.guild.me.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el bot.
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo remover este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
             }
            if(interaction.guild.me.roles.highest.comparePositionTo(role) <= 0){ // Si el rol no puee ser aregado.
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo remover este rol! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
             }
            return interaction.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Has removido el rol ${role} al usuario ${Target} `).setColor("e60ad4")], ephemeral: true })
                
            

                           
                
             } else { }
        } else { }
            
        } else if (interaction.options.getSubcommand() === "server"){
                const createsv = day(interaction.guild.createdAt).format("DD/MM/YY")//creacion del &{createsv}
 
  const start = new Discord.MessageEmbed()//embed Principal
  .setAuthor(`Informacion del Servidor`, client.user.avatarURL())//Author del embed
  .setColor("e60ad4")//color del embed
  //footer del embed
  .setDescription(`\n > **Nombre:** \`${interaction.guild.name}\`\n > **ID:** \`${interaction.guild.id}\`\n > **Owner:** ${await interaction.guild.fetchOwner()}\n > **Miembros:** \`${interaction.guild.memberCount}\`\n > **Roles:** \`${interaction.guild.roles.cache.size}\`\n > **Canales:** \`${interaction.guild.channels.cache.size}\`\n > **Boosts:** \`${interaction.guild.premiumSubscriptionCount.toString()}\`\n > **Emojis:** \`${interaction.guild.emojis.cache.size}\`\n > **Creacion:** \`${createsv}\`\n > **Invitacion:** [**Click Aqui**](https://discord.gg/qj2xmdZCS5)`)//descripcion del embed
  //La fecha en la que se envio el mensaje
 

    const row = new MessageActionRow()//Menu desplegable
    .addComponents(
        new MessageSelectMenu()
        .setPlaceholder(`Haz una selección`)
        .setCustomId("Select")
        .addOptions([
            {
                value: "Home",
                label: "Menu Principal",//primera opcion
                emoji: "🏡" 
            },
            {
               value: "Emojis",
               label: "Visualizar los Emojis",//segunda opcion
               emoji: "🎭"
            },
            {
              value: "Roles",
              label: "Visualizar los Roles",//tercera opcion
              emoji: "🌀"
           }
  
        ])
  
        
    )
  
  interaction.reply({ embeds: [start], components: [row] }).then(async(m) => {

    const collector = interaction.channel.createMessageComponentCollector({ filter: i => i.user.id === interaction.member.id});//el collector de los embeds del comando
    collector.on("collect", async(i) => {
        if(i.values[0] === "start"){
            i.update({ embeds: [start]})
        }
        if(i.values[0] === "Home"){
            i.update({ embeds: [Home]})
        }
        if(i.values[0] === "Emojis"){ 
            i.update({ embeds: [Emojis]})
        }
        if(i.values[0] === "Roles"){ 
          i.update({ embeds: [Roles]})
        }
        
    })
  
    const Home = new Discord.MessageEmbed()//embed de la primera opcion del menu desplegable
  .setAuthor(`Informacion del Servidor`, client.user.avatarURL())//Author del embed
  .setColor("e60ad4")
  
  .setDescription(`\n > **Nombre:** \`${interaction.guild.name}\`\n > **ID:** \`${interaction.guild.id}\`\n > **Owner:** ${await interaction.guild.fetchOwner()}\n > **Miembros:** \`${interaction.guild.memberCount}\`\n > **Roles:** \`${interaction.guild.roles.cache.size}\`\n > **Canales:** \`${interaction.guild.channels.cache.size}\`\n > **Boosts:** \`${interaction.guild.premiumSubscriptionCount.toString()}\`\n > **Emojis:** \`${interaction.guild.emojis.cache.size}\`\n > **Creacion:** \`${createsv}\`\n > **Invitacion:** [**Click Aqui**](https://discord.gg/qj2xmdZCS5)`)//descripcion del embed
   
 
    const Emojis = new Discord.MessageEmbed()//embed de la segunda opcion del menu desplegable
    .setAuthor(`Emojis del Servidor`, client.user.avatarURL())
    .setDescription(`${interaction.guild.emojis.cache.sort((a, b) => b.rawPosition - a.rawPosition).map(r => r.toString()).join(" ' ")}`)
    .setColor("e60ad4")
    
    

    const Roles = new Discord.MessageEmbed()//embed de la tercera opcion del menu desplegable
    .setAuthor(`Roles del Servidor`, client.user.avatarURL())
    .setDescription(`${interaction.guild.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition).map(r => r.toString()).join(" ' ")}`)
    .setColor("e60ad4")
    
    

    }).catch(err =>{
      interaction.reply({
          embeds: [new Discord.MessageEmbed()
              .setDescription("**<:fail:1083542064924479549> |  Ah ocurrido un error, Usa \`!report\` para Reportarlo! | <:fail:1083542064924479549>**")
              .setColor("e60ad4")
          ]
      })
      console.log(err)
  }) 
            
        } else if (interaction.options.getSubcommand() === "sugerencia"){
                let e = new Discord.MessageEmbed()
        
                const contenido = interaction.options.getString("contenido")
                const anonimo = interaction.options.getBoolean("anonimo")
                
                if(anonimo === false){
                    const embed = new Discord.MessageEmbed()
                    .setDescription(` > ${contenido}`)
                    .setAuthor(`Sugerencia de ${interaction.user.tag}`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setColor("e60ad4")
                    
                    
                
                    client.channels.cache.get("1083551554021380237").send({embeds: [embed] }).then(m =>{
                        m.react("👍")
                        m.react("🤷‍♂️")
                        m.react("👎")
                    }) 
                
                }
                
                if(anonimo === true){
                    const embed1 = new Discord.MessageEmbed()
                    .setDescription(` > ${contenido}`)
                    .setAuthor(`Sugerencia Anonima`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setColor("e60ad4")
                    
                    
                
                    client.channels.cache.get("1083551554021380237").send({embeds: [embed1] }).then(m =>{
                        m.react("👍")
                        m.react("🤷‍♂️")
                        m.react("👎")
                    }) 
                
                
                }
        
                     interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> |  Sugerencia enviada correctamente! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })
        } else if (interaction.options.getSubcommand() === "texthub"){
                const contenido = interaction.options.getString("contenido")  
          
                let autor = interaction.member;
                
                let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${interaction.member.displayAvatarURL()}&text=${contenido}&username=${autor.user.tag}&raw=1`,'logo.png')
                
                interaction.reply({files: [attachment] })  
            
        } else if (interaction.options.getSubcommand() === "uptime"){
                let dias = Math.floor(client.uptime / 86400000)
                let horas = Math.floor(client.uptime / 3600000) % 24
                let minutos = Math.floor(client.uptime / 60000) % 60
                let segundos = Math.floor(client.uptime / 1000) % 60
            
                const embed = new Discord.MessageEmbed()
                .setDescription(`Llevo prendido: \`${dias}\` dias \`${horas}\` horas \`${minutos}\` minutos y \`${segundos}\` segundos`)
                .setColor("e60ad4")
                
                
                interaction.reply({ embeds: [embed]})
        } else if (interaction.options.getSubcommand() === "user"){
                let user = interaction.options.getUser('usuario')


                const start = new Discord.MessageEmbed()//embed Principal
                .setAuthor("User Info", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")//color del embed
                //footer del embed
                .setDescription(` > **Nombre:** ${user} \n > **ID:** \`${user.id}\` \n > **Etiqueta:** #\`${user.discriminator}\``)
                //La fecha en la que se envio el mensaje
               
              
                  const row = new MessageActionRow()//Menu desplegable
                  .addComponents(
                      new MessageSelectMenu()
                      .setPlaceholder(`Haz una selección`)
                      .setCustomId("Select")
                      .addOptions([
                          {
                              value: "Home",
                              label: "Menu Principal",//primera opcion
                              emoji: "🏡" 
                          },
                          {
                             value: "Avatar",
                             label: "Visualizar el Avatar",//segunda opcion
                             emoji: "🤖"
                          },
                
                      ])
                
                      
                  )
                
                interaction.reply({ embeds: [start], components: [row] }).then(async(m) => {
              
                  const collector = interaction.channel.createMessageComponentCollector({ filter: i => i.user.id === interaction.member.id});//el collector de los embeds del comando
                  collector.on("collect", async(i) => {
                      if(i.values[0] === "start"){
                          i.update({ embeds: [start]})
                      }
                      if(i.values[0] === "Home"){
                          i.update({ embeds: [Home]})
                      }
                      if(i.values[0] === "Avatar"){ 
                          i.update({ embeds: [Avatar]})
                      }
                      
                  })
                
                  const Home = new Discord.MessageEmbed()//embed de la primera opcion del menu desplegable
                  .setAuthor("User Info", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                  .setColor("e60ad4")//color del embed
                  //footer del embed
                  .setDescription(` > **Nombre:** ${user} \n > **ID:** \`${user.id}\` \n > **Etiqueta:** #\`${user.discriminator}\``)
                  //La fecha en la que se envio el mensaje
                 
               
                  const Avatar = new Discord.MessageEmbed()//embed de la segunda opcion del menu desplegable
                  .setAuthor(`Avatar`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                  .setDescription(`**Avatar de ${user}**`)
                  .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                  .setColor("e60ad4")
                  
                  
                  const row = new MessageActionRow()//Menu desplegable
              
                  }).catch(err =>{
                      interaction.reply({
                          embeds: [new Discord.MessageEmbed()
                              .setDescription("**<:fail:1083542064924479549> |  Ah ocurrido un error, Usa \`!report\` para Reportarlo! | <:fail:1083542064924479549>**")
                              .setColor("e60ad4")
                          ]
                      })
                      console.log(err)
                  }) 
        
    } else if (interaction.options.getSubcommand() === "traductor"){
        let e = new MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
    
        let idiomas = interaction.options.getString("idioma")
        const es = interaction.options.getString('es')
        const en = interaction.options.getString('en')
        const fr = interaction.options.getString('fr')
        const rs = interaction.options.getString('rs')
        const tr = interaction.options.getString('tr')
        const texto = interaction.options.getString('texto')
    
        if (idiomas) {
            if (idiomas === "1") { translate(texto, {to: 'en'}).then(res => {
                const embed = new Discord.MessageEmbed()
                .setAuthor("Traductor En", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                .setDescription(` >  ${res} `)    
                interaction.reply({ embeds: [embed] })
            })     } else { }
            if (idiomas === "2") { translate(texto, {to: 'es'}).then(res => {
                const embed = new Discord.MessageEmbed()
                .setAuthor("Traductor Es", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                .setDescription(` >  ${res} `)    
                interaction.reply({ embeds: [embed] })
            })     } else { }
            if (idiomas === "3") { translate(texto, {to: 'fr'}).then(res => {
                const embed = new Discord.MessageEmbed()
                .setAuthor("Traductor Fr", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                .setDescription(` >  ${res} `)    
                interaction.reply({ embeds: [embed] })
            })     } else { }
            if (idiomas === "4") { translate(texto, {to: 'ru'}).then(res => {
                const embed = new Discord.MessageEmbed()
                .setAuthor("Traductor Rs", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                .setDescription(` >  ${res} `)    
                interaction.reply({ embeds: [embed] })
            }).catch(err =>{
                interaction.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setThumbnail("https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                        .setTitle("<:fail:1083542064924479549> | Error | <:fail:1083542064924479549>")
                        .setDescription("**Ah ocurrido un error\n > Usa:** \`!report\` para Reportarlo! ")
                        .setColor("e60ad4")
                    ]
                })
                console.log(err)
            })      } else { }
            if (idiomas === "5") { translate(texto, {to: 'tr'}).then(res => {
                const embed = new Discord.MessageEmbed()
                .setAuthor("Traductor Tr", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                .setDescription(` >  ${res} `)    
                interaction.reply({ embeds: [embed] })
            })     } else { }
      
        } else { }
    } 
    }
}