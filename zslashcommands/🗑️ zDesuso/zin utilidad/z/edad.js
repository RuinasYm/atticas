const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "edad",


    async execute (client, interaction, args) {

        let user = interaction.member;

        let embed = new Discord.MessageEmbed()
        .setAuthor({name: "EDAD", iconURL: "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp"})
        .setImage('https://areajugones.sport.es/wp-content/uploads/2021/10/tokyo-24th-ward-1080x609.jpg.webp')
        .setColor("e60ad4")

        let ops = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("shopping")
                    .setPlaceholder(`¿Cuál es tu edad?`)
                    .addOptions([
                        {
                            label: '13 - 15 Años',
                            emoji: '<:13:998306448805220362>',
                            value: '13',
                        },
                        {
                            label: '15 - 18 Años',
                            emoji: '<:15:998306446720630834>',
                            value: '15',
                        },
                        {
                            label: '18 - 21 Años',
                            emoji: '<:18:998306444518621196>',
                            value: '18',
                        },
                        {
                            label: '+21 Años',
                            emoji: '<:carita:1016176424765358191>',
                            value: '21',
                        },

                    ])
            );

        interaction.channel.send({ embeds: [embed], components: [ops] }).then(() => {

            let coletor = interaction.channel.createMessageComponentCollector();

            coletor.on("collect", (c) => {

                let rol = c.values[0]

                if (rol === "13") { 
                
                interaction.member.roles.remove("997278394737766461");
                interaction.member.roles.remove("997278397841539184");
                interaction.member.roles.remove("997278401020837948");
                interaction.member.roles.add("997278387439673374"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&997278387439673374>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "15") { 

                interaction.member.roles.remove("997278397841539184");
                interaction.member.roles.remove("997278401020837948");
                interaction.member.roles.remove("997278387439673374"); 
                interaction.member.roles.add("997278394737766461"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&997278394737766461>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "18") { 

                interaction.member.roles.remove("997278394737766461");
                interaction.member.roles.remove("997278401020837948");
                interaction.member.roles.remove("997278387439673374"); 
                interaction.member.roles.add("997278397841539184"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&997278397841539184>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })
        
        } else
                
                if (rol === "21") { 

                    interaction.member.roles.remove("997278394737766461");
                    interaction.member.roles.remove("997278397841539184");
                    interaction.member.roles.remove("997278387439673374"); 
                    interaction.member.roles.add("997278401020837948"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&997278401020837948>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        }

            }
        )

    }

    )}
}
