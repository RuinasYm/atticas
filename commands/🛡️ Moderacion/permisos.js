const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'permisos',
    alias: ['verpermisos'],
    desc: "Sirve para ver los permisos de un usuario.",
    uso: "!permisos <user>",
    permisos: ["ADMINISTRATOR"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    async execute (client, message, [member = ''])  {
        if (!member.match(/\d{17,19}/)) {
            member = message.author.id;
        }
        member = await message.guild.members.fetch(member.match(/\d{17,19}/)[0]).catch(() => null);
        if (!member) {
            return message.reply({ content: `<:fail:1083542064924479549> Usuario no encontrado.` });
        }
        const sp = member.permissions.serialize();
        const cp = message.channel.permissionsFor(member).serialize();
        const embed = new MessageEmbed()

            .setColor("e60ad4")
            .setAuthor({name: `Permisos de ${member.displayName}`, iconURL: member.user.displayAvatarURL({ dynamic: true })})
            .setDescription(
                [
                    '\\🍨 - Servidor',
                    '\\🤹‍♂️ - Canal',
                    '```properties',
                    '🍨 | 🤹‍♂️ | Permisos',
                    '========================================',
                    `${Object.keys(sp)
                        .map(perm =>
                            [
                                sp[perm] ? '✅ |' : '❌ |',
                                cp[perm] ? '✅ |' : '❌ |',
                                perm
                                    .split('_')
                                    .map(x => x[0] + x.slice(1).toLowerCase())
                                    .join(' '),
                            ].join(' ')
                        )
                        .join('\n')}`,
                    '```',
                ].join('\n')
            );
        return message.channel.send({ embeds: [embed] });
    },
};
