const ms = require("parse-ms");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("shop")
        .setDescription("💸 Compra algo en la tiendita"),

    async run(client, interaction, args){

        let user = interaction.member;

    
        let embed = new Discord.MessageEmbed()
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setAuthor(`Economia`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setColor("e60ad4")
            .setDescription(`Bienvenidos a mi tiendita uWu\n\n **Lista de Items**\n > 🏫 **Clase Alta** - \`[1000000]\` :coin: \n > Un rol arriba de clase media.\n\n > 🏫 **Clase Media** - \`[500000]\` :coin: \n > Un rol arriba de clase baja.\n\n > 🏫 **Clase Baja** - \`[10000]\` :coin: \n > Un rol arriba de todos los usuarios.`);

        let ops = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("shopping")
                    .setPlaceholder(`Haz una selección`)
                    .addOptions([
                        {
                            label: 'Clase Alta',
                            emoji: '🏫',
                            value: 'clasealta',
                        },
                        {
                            label: 'Clase Media',
                            emoji: '🏫',
                            value: 'clasemedia',
                        },
                        {
                            label: 'Clase Baja',
                            emoji: '🏫',
                            value: 'clasebaja',
                        }
                    ])
            );

        interaction.reply({ embeds: [embed], components: [ops] }).then(() => {


            let filtro = msg => msg.user === user.user
            let coletor = interaction.channel.createMessageComponentCollector({ filter: filtro, time: 180000 });

            coletor.on("collect", (c) => {

                let dinero = db.fetch(`money_${user.id}`)

                let valor = c.values[0]
                //c.deferUpdate()

                if (valor === "clasealta") {

                    if (dinero < 1000000) {
                        c.reply({
                            embeds: [new MessageEmbed()
                                .setDescription("<:girl2:1016175597027852358> No tienes suficientes coins para comprar esta clase.")
                                .setColor("e60ad4")
                            ]
                        })
                    } else {

                        interaction.member.roles.add("1050534479451656202"); 
                        c.reply({
                            embeds: [new MessageEmbed()
                                .setDescription("<:girl2:1016175597027852358> Has comprado la <@&1050534479451656202>")
                                .setColor("e60ad4")
                            ]
                        })
                        db.add(`clasealta_${user.user}`, 1);
                        db.subtract(`money_${user.id}`, 1000000)

                    }

                } else if (valor === "clasemedia") {

                    if (dinero < 500000) {
                        c.reply({
                            embeds: [new MessageEmbed()
                                .setDescription("<:girl2:1016175597027852358> No tienes suficientes coins para comprar esta clase.")
                                .setColor("e60ad4")
                            ]
                        })
                    } else {

                        interaction.member.roles.add("1050535334229848074"); 
                        c.reply({
                            embeds: [new MessageEmbed()
                                .setDescription("<:girl2:1016175597027852358> Has comprado la <@&1050535334229848074>")
                                .setColor("e60ad4")
                            ]
                        })
                        db.add(`clasemedia_${user.user}`, 1);
                        db.subtract(`money_${user.id}`, 500000)

                    }

                } else if (valor === "clasebaja") {

                    if (dinero < 10000) {
                        c.reply({
                            embeds: [new MessageEmbed()
                                .setDescription("<:girl2:1016175597027852358> No tienes suficientes coins para comprar esta clase.")
                                .setColor("e60ad4")
                            ]
                        })
                    } else {

                        interaction.member.roles.add("1050534804371804190"); 
                        c.reply({
                            embeds: [new MessageEmbed()
                                .setDescription("<:girl2:1016175597027852358> Has comprado la <@&1050534804371804190>")
                                .setColor("e60ad4")
                            ]
                        })
                        db.add(`clasebaja_${user.user}`, 1);
                        db.subtract(`money_${user.id}`, 10000)

                    }

                }
            })

        })


    }
}