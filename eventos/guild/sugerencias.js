const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
const votosSchema = require(`${process.cwd()}/modelos/sugerenciasvotos.js`);
const Discord = require('discord.js');

module.exports = {
	name: `messageCreate`,
	async run(client, message) {  
        try {
            //comprobaciones previas
            if (!message.guild || !message.channel || message.author.bot) return;
            //buscamos los datos de la DB
            let setup_data = await setupSchema.findOne({ guildID: message.guild.id });
            //comprobaciones previas
            if (!setup_data || !setup_data.sugerenciasChannel || !message.guild.channels.cache.get(setup_data.sugerenciasChannel) || message.channel.id !== setup_data.sugerenciasChannel) return;
            //eliminamos la sugerencia enviada por el autor y lo convertimos en sugerencia con botones
            message.delete().catch(() => { });
            //definimos los botones
            let botones = new Discord.MessageActionRow().addComponents([
                //votar si
                new Discord.MessageButton().setStyle("SECONDARY").setLabel("0").setEmoji("<:sucess:1083547524717101056>").setCustomId("votar_si"),
                //votar no
                new Discord.MessageButton().setStyle("SECONDARY").setLabel("0").setEmoji("<:fail:1083542064924479549>").setCustomId("votar_no"),
                //ver votanes
                new Discord.MessageButton().setStyle("PRIMARY").setLabel("¿Quién ha votado?").setEmoji("<:__:1087069326428885152>").setCustomId("ver_votos"),
            ])
            //enviamos el mensaje con los botones
            let msg = await message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor({ name: "Sugerencia de " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setDescription(`>>> ${message.content}`)
                        .addField(`<:sucess:1083547524717101056> Votos positivos |`, "0 votos", true)
                        .addField(`<:fail:1083542064924479549> Votos negativos |`, "0 votos", true)
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setColor("e60ad4")
                        .setFooter({ text: "Para sugerir algo, Escribe en este canal.", iconURL: "https://cdn.discordapp.com/attachments/1078750371117289607/1087070615074246767/info.png" })
                ],
                components: [botones]
            })
            let data_msg = new votosSchema({
                messageID: msg.id,
                autor: message.author.id,
            })
            data_msg.save();
        } catch (e) { console.log(e) }
    }
}