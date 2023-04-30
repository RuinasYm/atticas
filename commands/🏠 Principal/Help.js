const { readdirSync } = require('fs');
const Discord = require('discord.js');
module.exports = {
    name: "info",
    alias: ["help", "ayuda"],
    desc: "Sirve para ver la información del Bot",
    uso: "!Help",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args, prefix) {
//embed
let e = new Discord.MessageEmbed()
        //TIME ON///////
        let horas = Math.floor(client.uptime / 3600000) % 24
        let minutos = Math.floor(client.uptime / 60000) % 60
        let segundos = Math.floor(client.uptime / 1000) % 60
        //definimos las categorias del bot leyendo la ruta ./commands
        const categorias = readdirSync('./commands');
        if (args[0]) {
            const comando = client.commands.get(args[0].toLowerCase()) || client.commands.find(c => c.alias && c.alias.includes(args[0].toLowerCase()));
            const categoria = categorias.find(categoria => categoria.toLowerCase().endsWith(args[0].toLowerCase()));
            if (comando) {
                let embed = new Discord.MessageEmbed()
                .setAuthor({name: `Comando ${comando.name} `, iconURL: client.user.displayAvatarURL({dynamic: true})})
                    .setColor("e60ad4")
                //condicionales
                if (comando.desc) embed.addField(` > Descripción:`, `\`\`\`${comando.desc}\`\`\``);
                if (comando.uso) embed.addField(` > Uso:`, `\`\`\`${comando.uso}\`\`\``);
                if (comando.alias && comando.alias.length >= 1) embed.addField(` > Alias:`, `\`\`\`${comando.alias}\`\`\``);
                if (comando.permisos) embed.addField(` > Permisos requeridos del usuario`, `\`\`\`${comando.permisos}\`\`\``);
                if (comando.permisos_bot) embed.addField(` > Permisos requeridos del bot:`, `\`\`\`${comando.permisos_bot}\`\`\``);
                if (comando.valoracion) embed.addField(` > Valoracion:`, `\`\`\`${comando.valoracion}\`\`\``);
                return message.reply({ embeds: [embed] })
            } else if (categoria) {
                const commands_de_categoria = readdirSync(`./commands/${categoria}`).filter(archivo => archivo.endsWith('.js'));
                return message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setAuthor({name: `${categoria.split(" ")[0]} ${categoria.split(" ")[1]} ${categoria.split(" ")[0]}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
                        .setDescription(`Para mas informacion sobre un comando usa \`${prefix}info (comando)\``)
                        .setColor("e60ad4")
                        .addField("**Comandos**:", commands_de_categoria.length >= 1 ? `>>> *${commands_de_categoria.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" \n ")}*` : `>>> *\`\`\`Comandos en implementación...\`\`\`*`)
                        
                    ]
                })
            } else {
                return message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setDescription(` > **Usa:**\`${prefix}Help\` para ver la lista de Commandos!`)
                        .setAuthor({name: `Comando no Encontrado`, iconURL:"https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png"})
                        .setColor("e60ad4")
                  
                    ]
                  })
            }
        } else {
            var paginaActual = 0;

            //definimos el embed principal
            let ayuda_embed = new Discord.MessageEmbed()
            .setAuthor({name: "HELP", iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setDescription(`Puedes reportar un error usando: \`${prefix}reporte\`.`)
            .setColor("e60ad4")
            .addField("**UTILIDAD**:", `\`\`\`• Categoria: ${prefix}help <categoria>
• Comando: ${prefix}help <comando>\`\`\``)
            .addField("**ESTADISTICAS**:", `\`\`\`• ${client.commands.size} comandos\n• ${categorias.length} categorias\`\`\`\n**OFICIAL:**\n[Website](https://docs.clubatticus.ml/) | [Wiki](https://docs.clubatticus.ml/_/) | [Soporte](https://discord.com/invite/uAbu8sbPRM)`)
            .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1065746146368180365/neko-koshki-devushka.jpg")
            .setFooter({ text: `Página 1 / ${categorias.length+1}`, iconURL: `https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png` })
            let embeds_pages = [ayuda_embed];

            //por cada categoria, creamos un embed y lo empujamos en embeds_pages
            categorias.map((categoria, index) => {
                const commands_de_categoria = readdirSync(`./commands/${categoria}`).filter(archivo => archivo.endsWith('.js'));
                let embed = new Discord.MessageEmbed()
                    .setAuthor({name: "Mis Comandos", iconURL: client.user.displayAvatarURL({dynamic: true})})
                    .setDescription(`**${categoria.split(" ")[0]} ${categoria.split(" ")[1]}**\nPara más información sobre un comando usa \`${prefix}info <comando>\`\nInformacion detallada en [WikiClub](https://docs.clubatticus.ml/_/)`)
                    .setColor("e60ad4");
                let counter = 0; // contador para cada 10 comandos
                let field_text = "";
                let first_column = true; // variable booleana para indicar si es la primera columna
                commands_de_categoria.forEach((comando) => {
                    counter++;
                    if (counter === 6) {
                    field_text += `!${comando.replace(/.js/, "")}`; // agrega el comando actual a la columna de la derecha
                        if (first_column) {
                      embed.addField("📖 Comandos", `\`\`\`${field_text}\`\`\``, true); // agrega una nueva columna al embed con el título
                            first_column = false; // establece la variable booleana en falso para las siguientes columnas
                        } else {
                      embed.addField('\u200B', `\`\`\`${field_text}\`\`\``, true); // agrega una nueva columna al embed sin título
                        }
                        field_text = ""; // reinicia el texto de la columna de la derecha
                        counter = 0; // reinicia el contador
                    } else {
                    field_text += `!${comando.replace(/.js/, "")}\n`; // agrega el comando actual a la columna de la izquierda
                    }
                });
                if (field_text !== "") {
                    if (first_column) {
                    embed.addField("📖 Comandos", `\`\`\`${field_text}\`\`\``, true); // agrega la última columna con el título si es la primera columna
                    } else {
                    embed.addField('\u200B', `\`\`\`${field_text}\`\`\``, true); // agrega la última columna sin título si no es la primera columna
                    }
                }
                embed.setFooter({ text: `Página ${index+2} / ${categorias.length+1}`, iconURL: `https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png` });
                embeds_pages.push(embed);
            });
            
            
            
            //definimos la selección de categoría
            const seleccion = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu()
                .setCustomId(`SelecciónMenuAyuda`)
                .setMaxValues(5)
                .setMinValues(1)
                .addOptions(categorias.map(categoria => {
                    //definimos el objeto, que será una opción a elegir
                    let objeto = {
                        label: categoria.split(" ")[1].substring(0, 50),
                        value: categoria,
                        description: `Comandos de ${categoria.split(" ")[1].substring(0, 50)}`,
                        emoji: categoria.split(" ")[0],
                    }
                    //devolvemos el objeto creado y lo añadimos como una opción más
                    return objeto;
                }))
            )

            const botones = new Discord.MessageActionRow().addComponents([
                new Discord.MessageButton().setStyle('SECONDARY').setLabel("").setCustomId("Atrás").setEmoji("<:arrowleft:1083518668530532403>"),
                new Discord.MessageButton().setStyle('SECONDARY').setLabel("").setCustomId("Inicio").setEmoji("<:home:1083518663405088818>"),
                new Discord.MessageButton().setStyle('SECONDARY').setLabel("").setCustomId("Avanzar").setEmoji("<:arrowright:1083518666802483242>"),
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`WebSite`).setURL("https://docs.clubatticus.ml/").setEmoji("<:atticus:1078753726044590190>"),
            ])

            let mensaje_ayuda = await message.channel.send({ embeds: [ayuda_embed], components: [seleccion, botones] });

            const collector = mensaje_ayuda.createMessageComponentCollector({ filter: i => i.isButton() || i.isSelectMenu() && i.user && i.message.author.id == client.user.id, time: 180e3 });

            collector.on("collect", async (interaccion) => {
                if (interaccion.isButton()) {
                    if(interaccion.user.id !== message.author.id) return interaccion.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Esta interaccion ya esta en uso! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                    switch (interaccion.customId) {
                        case "Atrás": {
                            //Resetemamos el tiempo del collector
                            collector.resetTimer();
                            //Si la pagina a retroceder no es igual a la primera pagina entonces retrocedemos
                            if (paginaActual !== 0) {
                                //Resetemamos el valor de pagina actual -1
                                paginaActual -= 1
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            } else {
                                //Reseteamos al cantidad de embeds - 1
                                paginaActual = embeds_pages.length - 1
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            }
                        }
                            break;
    
                        case "Inicio": {
                            //Resetemamos el tiempo del collector
                            collector.resetTimer();
                            //Si la pagina a retroceder no es igual a la primera pagina entonces retrocedemos
                            paginaActual = 0;
                            await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                            await interaccion?.deferUpdate();
                        }
                            break;
    
                        case "Avanzar": {
                            //Resetemamos el tiempo del collector
                            collector.resetTimer();
                            //Si la pagina a avanzar no es la ultima, entonces avanzamos una página
                            if (paginaActual < embeds_pages.length - 1) {
                                //Aumentamos el valor de pagina actual +1
                                paginaActual++
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            //En caso de que sea la ultima, volvemos a la primera
                            } else {
                                //Reseteamos al cantidad de embeds - 1
                                paginaActual = 0
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            }
                        }
                            break;
    
                        default:
                            break;
                    }
                } else {
                    let embeds = [];
                    for (const seleccionado of interaccion.values) {
                        //definimos los commands leyendo la ruta del valor seleccionado del menú
                        const commands_de_categoria = readdirSync(`./commands/${seleccionado}`).filter(archivo => archivo.endsWith('.js'));
                        let embed = new Discord.MessageEmbed()
                            .setAuthor({name: "Mis Comandos", iconURL: client.user.displayAvatarURL({dynamic: true})})
                            .setDescription(`**${seleccionado.split(" ")[0]} ${seleccionado.split(" ")[1]}**\nPara más información sobre un comando usa \`${prefix} info <comando>\`\nInformacion detallada en [WikiClub](https://docs.clubatticus.ml/_/)`)
                            .setColor("e60ad4")
                        let counter = 0; // contador para cada 10 comandos
                        let field_text = "";
                        let first_column = true; // variable booleana para indicar si es la primera columna
                        commands_de_categoria.forEach((comando) => {
                            counter++;
                            if (counter === 6) {
                            field_text += `!${comando.replace(/.js/, "")}`; // agrega el comando actual a la columna de la derecha
                                if (first_column) {
                              embed.addField("📖 Comandos", `\`\`\`${field_text}\`\`\``, true); // agrega una nueva columna al embed con el título
                                    first_column = false; // establece la variable booleana en falso para las siguientes columnas
                                } else {
                              embed.addField('\u200B', `\`\`\`${field_text}\`\`\``, true); // agrega una nueva columna al embed sin título
                                }
                                field_text = ""; // reinicia el texto de la columna de la derecha
                                counter = 0; // reinicia el contador
                            } else {
                            field_text += `!${comando.replace(/.js/, "")}\n`; // agrega el comando actual a la columna de la izquierda
                            }
                        });
                        if (field_text !== "") {
                            if (first_column) {
                            embed.addField("📖 Comandos", `\`\`\`${field_text}\`\`\``, true); // agrega la última columna con el título si es la primera columna
                            } else {
                            embed.addField('\u200B', `\`\`\`${field_text}\`\`\``, true); // agrega la última columna sin título si no es la primera columna
                            }
                        }
                        embeds.push(embed);
                    }
                    interaccion.reply({ embeds, ephemeral: true })
                }

            });

           collector.on("end", () => {
                mensaje_ayuda.edit({
                    embeds: [new Discord.MessageEmbed()
                        .setAuthor({name: "HELP", iconURL: client.user.displayAvatarURL({dynamic: true})})
                        .setDescription(`Puedes reportar un error usando: \`${prefix}reporte\`.`)
                        .setColor("e60ad4")
                        .addField("**UTILIDAD**:", `\`\`\`• Categoria: !help <categoria>
• Comando: !help <comando>\`\`\``)
                        .addField("**ESTADISTICAS**:", `\`\`\`• ${client.commands.size} comandos\n• ${categorias.length} categorias\`\`\`\n**OFICIAL:**\n[Website](https://docs.clubatticus.ml/) | [Wiki](https://docs.clubatticus.ml/_/) | [Soporte](https://discord.com/invite/uAbu8sbPRM)`)
                        .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1065746146368180365/neko-koshki-devushka.jpg")
                    ], components: [new Discord.MessageActionRow().addComponents([
                            new Discord.MessageButton().setStyle('SECONDARY').setLabel("").setCustomId("Atrás").setEmoji("<:arrowleft:1083518668530532403>").setDisabled(true),
                            new Discord.MessageButton().setStyle('SECONDARY').setLabel("").setCustomId("Inicio").setEmoji("<:home:1083518663405088818>").setDisabled(true),
                            new Discord.MessageButton().setStyle('SECONDARY').setLabel("").setCustomId("Avanzar").setEmoji("<:arrowright:1083518666802483242>").setDisabled(true),
                            new Discord.MessageButton().setStyle(`LINK`).setLabel(`WebSite`).setURL("https://docs.clubatticus.ml/").setEmoji("<:atticus:1078753726044590190>"),
                        ])
                    ], content: '**Menu Expirado** <:signal:1083529362541924383>'
                })
            })
        }
    }
}
