const Discord = require('discord.js');
const { MessageEmbed, MessageButton } = require('discord.js');
const Setups = require('../../modelos/setups');

module.exports = {
    name: 'guildMemberAdd',
    async run(client, member) {  

        const setup = await Setups.findOne({ guildID: member.guild.id });
        if (!setup || !setup.welcomeEnabled || !setup.welcomeChannel) return;

        const Mensaje = setup.welcomeMensaje.replace(/{user}/g, member.toString())
            .replace(/{user\.tag}/g, member.user.tag)
            .replace(/{user\.username}/g, member.user.username)
            .replace(/{user\.id}/g, member.id);

        await client.channels.cache.get(`${setup.welcomeChannel}`).send({ content: `${Mensaje}` }).then(msg => {
            setTimeout(() => msg.delete(), setup.welcomeTime);
        });

    }
}
