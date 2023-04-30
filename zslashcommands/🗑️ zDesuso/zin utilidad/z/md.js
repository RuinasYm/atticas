const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "md",


    async execute (client, interaction, args) {

        let user = interaction.member;

        let embed = new Discord.MessageEmbed()
        .setAuthor({name: "MENSAJES DIRECTOS", iconURL: "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp"})
        .setImage('https://twinfinite.net/wp-content/uploads/2022/10/Tower-of-Fantasy.jpg')
        .setColor("e60ad4")

        let ops = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("shopping")
                    .setPlaceholder(`¿Cuál es tu md?`)
                    .addOptions([
                        {
                            label: 'MD Abierto',
                            emoji: '<:coolgirl:1016176429693677618>',
                            value: 'open',
                        },
                        {
                            label: 'MD Solo chicas',
                            emoji: '<:presonaje6:1016175615772205076>',
                            value: 'girls',
                        },
                        {
                            label: 'MD Solo chicos',
                            emoji: '<:coolboy:1016176426514399304>',
                            value: 'boys',
                        },
                        {
                            label: 'MD Cerrado',
                            emoji: '<:boy1:1016175637972664330>',
                            value: 'closed',
                        },
                    ])
            );

            interaction.channel.send({ embeds: [embed], components: [ops] }).then(() => {

                let filtro = msg => msg.user === user.user
                let coletor = interaction.channel.createMessageComponentCollector({ filter: filtro});

            coletor.on("collect", (c) => {

                let rol = c.values[0]

                if (rol === "open") { 
                
                interaction.member.roles.remove("1017972736171184270");
                interaction.member.roles.remove("1017973179634954330");
                interaction.member.roles.remove("1017972461146492929");
                interaction.member.roles.remove("996538785930170388");
                interaction.member.roles.add("1017971771699376279"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1017971771699376279>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "girls") { 

                interaction.member.roles.remove("1017973179634954330");
                interaction.member.roles.remove("1017972461146492929");
                interaction.member.roles.remove("996538785930170388");
                interaction.member.roles.remove("1017971771699376279"); 
                interaction.member.roles.add("1017972736171184270"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1017972736171184270>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        } else
                
               if (rol === "boys") { 

                interaction.member.roles.remove("1017972736171184270");
                interaction.member.roles.remove("1017972461146492929");
                interaction.member.roles.remove("996538785930170388");
                interaction.member.roles.remove("1017971771699376279"); 
                interaction.member.roles.add("1017973179634954330"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1017973179634954330>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })
        
        } else
                
                if (rol === "closed") { 

                    interaction.member.roles.remove("1017972736171184270");
                    interaction.member.roles.remove("1017973179634954330");
                    interaction.member.roles.remove("996538785930170388");
                    interaction.member.roles.remove("1017971771699376279"); 
                    interaction.member.roles.add("1017972461146492929"); 
                c.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("<:girl2:1016175597027852358> Has seleccionado el rol <@&1017972461146492929>")
                        .setColor("e60ad4")
                    ]
                    , ephemeral: true })

        }

            }
        )

    }

    )}
}
