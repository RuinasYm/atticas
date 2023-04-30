const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
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
            if (!setup_data || !setup_data.confesionesChannel || !message.guild.channels.cache.get(setup_data.confesionesChannel) || message.channel.id !== setup_data.confesionesChannel) return;
            //eliminamos la sugerencia enviada por el autor y lo convertimos en sugerencia con botones
            message.delete().catch(() => { });
            //enviamos el mensaje con los botones
            await message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor({ name: "¡Confesión recibida!", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
                        .setDescription(`>>> ${message.content}`)
                        .setColor("e60ad4")
                        .setFooter({ text: "Para confesar algo, Escribe en este canal.", iconURL: "https://cdn.discordapp.com/attachments/1078750371117289607/1087070615074246767/info.png" })
                ]
            })
        } catch (e) { console.log(e) }
    }
}