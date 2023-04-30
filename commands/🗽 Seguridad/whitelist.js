const Discord = require('discord.js');
const Setups = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
  name: 'whitelist',
  alias: ["setupwhitelist",],
  desc: "Sirve para añadir a un usuario o rol a la lista blanca",
  uso: "!whitelist <add> <remove> <user> <rol> <id>",
  permisos: ["MANAGE_GUILD"],
  permisos_bot: ["MANAGE_MESSAGES"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message, args, prefix) {
    const setup = await Setups.findOne({ guildID: message.guild.id });

    if (!setup) {
      return;
    }

    const action = args[0];
    const type = args[1];
    const id = args[2];

    if (!action || !type || !id) {
        return message.reply({
            embeds: [new Discord.MessageEmbed()
            .setColor("e60ad4")
            .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}whitelist\` \`<add>\` \`<remove\` \`<user>\` \`<role>\` \`<id>\`! | <:fail:1083542064924479549>`)
            ]
        });
    }

    if (action !== 'add' && action !== 'remove') {
        return message.reply({
            embeds: [new Discord.MessageEmbed()
            .setColor("e60ad4")
            .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}whitelist\` \`<add>\` \`<remove\` \`<user>\` \`<role>\` \`<id>\`! | <:fail:1083542064924479549>`)
            ]
        });
    }

    if (type !== 'user' && type !== 'role') {
        return message.reply({
            embeds: [new Discord.MessageEmbed()
            .setColor("e60ad4")
            .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`${prefix}whitelist\` \`<add>\` \`<remove\` \`<user>\` \`<role>\` \`<id>\`! | <:fail:1083542064924479549>`)
            ]
        });
    }

    if (type === 'user') {
      const user = await message.client.users.fetch(id);
      if (!user) {
        return message.reply(`**<:fail:1083542064924479549> |  Especifica una id correcta!.**`);
      }

      if (action === 'add') {
        if (setup.allowedUsers.includes(id)) {
            return message.reply(`<:fail:1083542064924479549> Este usuario ya esta en la **whitelist**!.`);
        }
        setup.allowedUsers.push(id);
        await setup.save();
        return message.reply('<:sucess:1083547524717101056> Usuario añadido a la **whitelist**.')
      } else {
        const index = setup.allowedUsers.indexOf(id);
        if (index === -1) {
            return message.reply(`<:fail:1083542064924479549> Este usuario no esta en la **whitelist**!.`);
        }
        setup.allowedUsers.splice(index, 1);
        await setup.save();
        return message.reply(`<:sucess:1083547524717101056> Usuario eliminado de la **whitelist**.`);
      }
    } else if (type === 'role') {
      const role = message.guild.roles.cache.get(id);
      if (!role) {
        return message.reply(`**<:fail:1083542064924479549> |  Especifica una id correcta!.**`);
      }

      if (action === 'add') {
        if (setup.allowedRoles.includes(id)) {
            return message.reply(`<:fail:1083542064924479549> Este rol ya esta en la **whitelist**!.`);
        }
        setup.allowedRoles.push(id);
        await setup.save();
        return message.reply('<:sucess:1083547524717101056> Rol añadido a la **whitelist**.')
      } else {
        const index = setup.allowedRoles.indexOf(id);
        if (index === -1) {
            return message.reply(`<:fail:1083542064924479549> Este rol no esta en la **whitelist**!.**`);
        }
        setup.allowedRoles.splice(index, 1);
        await setup.save();
        return message.reply('<:sucess:1083547524717101056> rol eliminado de la **whitelist**.')
      }
    }
  }
};
