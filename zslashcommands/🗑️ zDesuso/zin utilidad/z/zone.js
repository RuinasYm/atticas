const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "zone",


    async execute (client, interaction, args) {

        let user = interaction.member;

        let embed = new Discord.MessageEmbed()
        .setAuthor({name: "Ubicación", iconURL: "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp"})
        .setImage('https://anmosugoi.com/wp-content/uploads/2021/10/tesla-note-banner.jpg')
        .setColor("e60ad4")

        let ops = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("shopping")
                    .setPlaceholder(`¿Dónde Vives?`)
                    .addOptions([
                        {
                            label: 'Norte América',
                            emoji: '🌎',
                            value: 'norte',
                        },
                        {
                            label: 'Centro América',
                            emoji: '🌎',
                            value: 'centro',
                        },
                        {
                            label: 'Sur América',
                            emoji: '🌎',
                            value: 'sur',
                        },
                        {
                            label: 'Europa',
                            emoji: '🌎',
                            value: 'europa',
                        },
                        {
                            label: 'Asia',
                            emoji: '🌎',
                            value: 'asia',
                        },
                        {
                            label: 'Oceanía',
                            emoji: '🌎',
                            value: 'oceania',
                        }
                    
                    ])
            );

            interaction.channel.send({ embeds: [embed], components: [ops] }).then(() => {


            let filtro = msg => msg.user === user.user
            let coletor = interaction.channel.createMessageComponentCollector({ filter: filtro});

            coletor.on("collect", (c) => {

                let rol = c.values[0]

                if (rol === "norte") { 
                interaction.member.roles.remove("1058157834841366528");
                interaction.member.roles.remove("1058157806613713016");
                interaction.member.roles.remove("1058157827186774037");
                interaction.member.roles.remove("1058157846069522492");
                interaction.member.roles.remove("1058157849445924965");
                interaction.member.roles.add("1058157801274347520"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1058157801274347520>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "centro") { 
                interaction.member.roles.remove("1058157834841366528");
                interaction.member.roles.remove("1058157827186774037");
                interaction.member.roles.remove("1058157846069522492");
                interaction.member.roles.remove("1058157849445924965");
                interaction.member.roles.remove("1058157801274347520"); 
                interaction.member.roles.add("1058157806613713016"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1058157806613713016>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "sur") { 
                interaction.member.roles.remove("1058157834841366528");
                interaction.member.roles.remove("1058157806613713016");
                interaction.member.roles.remove("1058157846069522492");
                interaction.member.roles.remove("1058157849445924965");
                interaction.member.roles.remove("1058157801274347520"); 
                interaction.member.roles.add("1058157827186774037"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1058157827186774037>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })
        
        } else
                
                if (rol === "europa") { 

                    interaction.member.roles.remove("1058157806613713016");
                    interaction.member.roles.remove("1058157827186774037");
                    interaction.member.roles.remove("1058157849445924965");
                    interaction.member.roles.remove("1058157801274347520"); 
                    interaction.member.roles.add("1058157834841366528"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1058157834841366528>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else

        if (rol === "asia") { 
            interaction.member.roles.remove("1058157834841366528");
            interaction.member.roles.remove("1058157806613713016");
            interaction.member.roles.remove("1058157827186774037");
            interaction.member.roles.remove("1058157849445924965");
            interaction.member.roles.remove("1058157801274347520"); 
            interaction.member.roles.add("1058157846069522492"); 
        c.reply({
            embeds: [new MessageEmbed()
                .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1058157846069522492>")
                .setColor("e60ad4")
            ]
            , ephemeral: true })

} else
                
                if (rol === "oceania") { 
                    interaction.member.roles.remove("1058157834841366528");
                    interaction.member.roles.remove("1058157806613713016");
                    interaction.member.roles.remove("1058157827186774037");
                    interaction.member.roles.remove("1058157846069522492");
                    interaction.member.roles.remove("1058157801274347520"); 
                    interaction.member.roles.add("1058157849445924965"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1058157849445924965>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

                }

            }
        )

    }

    )}
}
