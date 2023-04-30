const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "adds",


    async execute (client, interaction, args) {

        let user = interaction.member;

        let embed = new Discord.MessageEmbed()
        .setAuthor({name: "NOTIFICACIONES", iconURL: "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp"})
        .setImage('https://abrakadabra.fun/uploads/posts/2021-12/1640384385_2-abrakadabra-fun-p-banner-profilya-anime-2.jpg')
        .setColor("e60ad4")

        let ops = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("shopping")
                    .setPlaceholder(`Perzonaliza tus notificaciones`)
                    .addOptions([
                        {
                            label: 'Chat Life',
                            emoji: '🍥',
                            value: 'chat',
                        },
                        {
                            label: 'Ping',
                            emoji: '🎓',
                            value: 'ping',
                        },
                        {
                            label: 'Alianzas',
                            emoji: '🌸',
                            value: 'ally',
                        },
                        {
                            label: 'Disable',
                            emoji: '<:girl1:1016175590774161408>',
                            value: 'off',
                        },
                    ])
            );

        interaction.channel.send({ embeds: [embed], components: [ops] }).then(() => {

                let rol = c.values[0]

                if (rol === "chat") { 
                
                interaction.member.roles.add("1017975986379296799"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1017975986379296799>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "ping") { 

                interaction.member.roles.add("1017976329146212382"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1017976329146212382>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "ally") { 

                interaction.member.roles.add("1000970923312169000"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1000970923312169000>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })
        
        } else
                
                if (rol === "off") { 

                    interaction.member.roles.remove("1017975986379296799");
                    interaction.member.roles.remove("1017976329146212382");
                    interaction.member.roles.remove("1000970923312169000"); 
                    interaction.member.roles.add("1017976456745324554"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1017976456745324554>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

                }

            }
        )

    }
    }

