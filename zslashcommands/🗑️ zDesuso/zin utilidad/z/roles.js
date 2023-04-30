const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "genero",


    async execute (client, interaction, args) {

        let user = interaction.member;

        let embed = new Discord.MessageEmbed()
        .setAuthor({name: "GENERO", iconURL: "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp"})
        .setImage('https://somoskudasai.com/wp-content/uploads/2021/08/portada_tesla-note-3.jpg')
        .setColor("e60ad4")

        let ops = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("shopping")
                    .setPlaceholder(`¿Cuál es tu genero?`)
                    .addOptions([
                        {
                            label: 'Chico',
                            emoji: '🧞‍♂️',
                            value: 'chico',
                        },
                        {
                            label: 'Chica',
                            emoji: '🧞‍♀️',
                            value: 'chica',
                        },
                        {
                            label: 'Transgenero',
                            emoji: '<:trans:998294956508709027>',
                            value: 'transgenero',
                        },
                        {
                            label: 'Femboy',
                            emoji: '<:21:998306438298488883>',
                            value: 'femboy',
                        },
                        {
                            label: 'No Binario',
                            emoji: '<:fem:998294999609381014>',
                            value: 'nobinario',
                        }
                    ])
            );

            interaction.channel.send({ embeds: [embed], components: [ops] }).then(() => {


                let filtro = msg => msg.user === user.user
                let coletor = interaction.channel.createMessageComponentCollector({ filter: filtro});

            coletor.on("collect", (c) => {

                let rol = c.values[0]

                if (rol === "chico") { 
                
                interaction.member.roles.remove("996538795061162066");
                interaction.member.roles.remove("997271572010238032");
                interaction.member.roles.remove("997272424028590100");
                interaction.member.roles.remove("996538785930170388");
                interaction.member.roles.add("996538800417296474"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&996538800417296474>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "chica") { 

                interaction.member.roles.remove("997271572010238032");
                interaction.member.roles.remove("997272424028590100");
                interaction.member.roles.remove("996538785930170388");
                interaction.member.roles.remove("996538800417296474"); 
                interaction.member.roles.add("996538795061162066"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&996538795061162066>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "transgenero") { 

                interaction.member.roles.remove("996538795061162066");
                interaction.member.roles.remove("997272424028590100");
                interaction.member.roles.remove("996538785930170388");
                interaction.member.roles.remove("996538800417296474"); 
                interaction.member.roles.add("997271572010238032"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&997271572010238032>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })
        
        } else
                
                if (rol === "femboy") { 

                    interaction.member.roles.remove("996538795061162066");
                    interaction.member.roles.remove("997271572010238032");
                    interaction.member.roles.remove("996538785930170388");
                    interaction.member.roles.remove("996538800417296474"); 
                    interaction.member.roles.add("997272424028590100"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&997272424028590100>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
                if (rol === "nobinario") { 

                    interaction.member.roles.remove("996538795061162066");
                    interaction.member.roles.remove("997271572010238032");
                    interaction.member.roles.remove("997272424028590100");
                    interaction.member.roles.remove("996538800417296474"); 
                    interaction.member.roles.add("996538785930170388"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&996538785930170388>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

                }

            }
        )

    }

    )}
}
