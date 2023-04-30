const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
const votosSchema = require(`${process.cwd()}/modelos/sugerenciasvotos.js`);
const Discord = require('discord.js');
module.exports = { 
    name: 'interactionCreate',
  async run(client, interaction) {
    try {
        //comprobaciones previas
        if (!interaction.guild || !interaction.channel || !interaction.message || !interaction.user) return;
        //aseguramos la base de datos
        //buscamos los datos en la base de datos
        let setup_data = await setupSchema.findOne({ guildID: interaction.guild.id });
        //buscamos la base de datos del mensaje de la sugerencia
        let msg_data = await votosSchema.findOne({ messageID: interaction.message.id });
        //comprobaciones previas
        if (!msg_data || !setup_data || !setup_data.sugerenciasChannel || interaction.channelId !== setup_data.sugerenciasChannel) return;
        switch (interaction.customId) {
            case "votar_si": {
                //si el votante ya ha votado en el mismo voto hacemos return;
                if (msg_data.si.includes(interaction.user.id)) return interaction.reply({ embeds: [new Discord.MessageEmbed()
                    .setDescription(`Oye!, Ya has votado **Si** en la sugerencia de <@${msg_data.autor}> <:coffe:1085588495172632638>.`)
                    .setColor("e60ad4")
                ], ephemeral: true});
                //modificamos la DB
                if (msg_data.no.includes(interaction.user.id)) msg_data.no.splice(msg_data.no.indexOf(interaction.user.id), 1)
                msg_data.si.push(interaction.user.id);
                msg_data.save();

                //modificamos el embed
                interaction.message.embeds[0].fields[0].value = `${msg_data.si.length} votos`;
                interaction.message.embeds[0].fields[1].value = `${msg_data.no.length} votos`;

                //modificamos los botones con el valor de los votos
                interaction.message.components[0].components[0].label = msg_data.si.length.toString();
                interaction.message.components[0].components[1].label = msg_data.no.length.toString();

                //editamos el mensaje
                await interaction.message.edit({ embeds: [interaction.message.embeds[0]], components: [interaction.message.components[0]] });
                interaction.deferUpdate();
            }
                break;

            case "votar_no": {
                //si el votante ya ha votado en el mismo voto hacemos return;
                if (msg_data.no.includes(interaction.user.id)) return interaction.reply({ embeds: [new Discord.MessageEmbed()
                .setDescription(`Oye!, Ya has votado **No** en la sugerencia de <@${msg_data.autor}> <:coffe:1085588495172632638>.`)
                .setColor("e60ad4")
            ], ephemeral: true});
                //modificamos la DB
                if (msg_data.si.includes(interaction.user.id)) msg_data.si.splice(msg_data.si.indexOf(interaction.user.id), 1)
                msg_data.no.push(interaction.user.id);
                msg_data.save();

                //modificamos el embed
                interaction.message.embeds[0].fields[0].value = `${msg_data.si.length} votos`;
                interaction.message.embeds[0].fields[1].value = `${msg_data.no.length} votos`;

                //modificamos los botones con el valor de los votos
                interaction.message.components[0].components[0].label = msg_data.si.length.toString();
                interaction.message.components[0].components[1].label = msg_data.no.length.toString();

                //editamos el mensaje
                await interaction.message.edit({ embeds: [interaction.message.embeds[0]], components: [interaction.message.components[0]] });
                interaction.deferUpdate();

            }
                break;
                
            case "ver_votos": {
                interaction.reply({
                    embeds: [new Discord.MessageEmbed()
                    .setTitle(`Votos de la sugerencia`)
                    .addField(`<:sucess:1083547524717101056> Votos positivos`, msg_data.si.length >= 1 ? msg_data.si.map(u => `<@${u}>\n`).toString() : "No hay votos", true)
                    .addField(`<:fail:1083542064924479549> Votos negativos`, msg_data.no.length >= 1 ? msg_data.no.map(u => `<@${u}>\n`).toString() : "No hay votos", true)
                    .setColor("e60ad4")
                    ],
                    ephemeral: true,
                })
            }
                break;

            default:
                break;
        }
    } catch (e) { console.log(e) }
}
}