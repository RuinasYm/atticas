const Item = require('../../modelos/item');
const ecoSchema = require('../../modelos/economia');
const discord = require('discord.js');

module.exports = {
  name: 'inventario',
  alias: ['inventory', 'mochila', 'backpack'],
  description: 'Muestra los artículos en tu inventario',
  uso: '!inventario - !inventario (user)',
  permisos: ['SEND_MESSAGES'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  

  async execute (client, message, args)  {
    const user = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member;
    if (!user) return message.reply("Usuario no encontrado <:cofee:1070895818460102656>")
    let userData = await ecoSchema.findOne({ userID: user.id });
    if (!userData) {
      let newdata = new ecoSchema({
        userID: user.id,
        inventario: []
      });

      await newdata.save();
      userData = await ecoSchema.findOne({ userID: user.id });
    }

    const items = await Item.find();
    const userItems = {};
    for (const item of items) {
        const count = userData.inventario.filter(itemId => itemId === item._id.toString()).length;
        if (count > 0) {
            const guildId = item.guildId;
            const guild = client.guilds.cache.get(guildId);
        const guildName = guild ? guild.name : 'Desconocido'; // Si el servidor no se encuentra en el caché del cliente, se mostrará "Desconocido" como nombre
            
            userItems[item._id.toString()] = {
              name: item.name,
              description: item.description,
              count,
              guildName,
              price: item.price
            };
        }
    }            

    if (Object.keys(userItems).length === 0) {
      return message.reply('Inventario sin items <:coffe:1085588495172632638>.')
    }
    
    const texto = Object.entries(userItems).map(([itemId, itemData], index) => {
      let description = `> **Nombre:** ${itemData.name}\n> **Valor:** ${itemData.price} <:clubcoin:1075230099001069568>\n> **Cantidad:** (x${itemData.count})\n> **Server:** ${itemData.guildName}`;
      const roleMention = /<@&\d+>/g;
      const userMention = /<@!\d+>/g;
      const roleIdMatch = description.match(roleMention);
      const userIdMatch = description.match(userMention);
      if (roleIdMatch) {
        for (const match of roleIdMatch) {
          const roleId = match.substring(3, match.length - 1);
          const role = message.guild.roles.cache.get(roleId);
          const roleName = role ? role.name : 'Desconocido';
          description = description.replace(match, `${roleName}`);
        }
      }
      if (userIdMatch) {
        for (const match of userIdMatch) {
          const userId = match.substring(3, match.length - 1);
          const user = message.guild.members.cache.get(userId);
          const username = user ? user.displayName : 'Desconocido';
          description = description.replace(match, `${username}`);
        }
      }
      return `\`🌸${index + 1}\`\n${description}`;
    });
    var elementos_por_pagina = 3
    var embeds = [];
    var dividido = elementos_por_pagina;
    for(let i = 0; i < texto.length; i+= dividido) {
        let desc = texto.slice(i, elementos_por_pagina);
        elementos_por_pagina+= dividido;
        //creamos un embed por cada pagina de los datos divididos
        const embed = new discord.MessageEmbed()
        .setAuthor({name: `Mochila de ${user.user.username}`, iconURL: user.displayAvatarURL({ dynamic: true })})
        .setDescription(`Puedes comprar un item escribiendo: \`!shop\`\n\n<:atticus:1078753726044590190> **GLOBAL**\n  ${desc.join('\n')}`)
        .setColor("e60ad4")
        .setThumbnail(message.member.displayAvatarURL({dynamic: true}))
        embeds.push(embed)
    }
  
    let paginaActual = 0;
    //Si la cantidad de embeds es solo 1, envíamos el mensaje tal cual sin botones
    if (embeds.length === 1) return message.channel.send({ embeds: [embeds[0]] }).catch(() => { });
    //Si el numero de embeds es mayor 1, hacemos el resto || definimos los botones.
    
    const botones = new discord.MessageActionRow().addComponents([
        new discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Atrás").setEmoji("<:retroceder:1078750885175361556>"),
        new discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Inicio").setEmoji("🍙"),
        new discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Avanzar").setEmoji("<:avanzar:1078750882482630776>"),
        new discord.MessageButton().setStyle(`LINK`).setLabel(`Web`).setURL("https://docs.clubatticus.ml/").setEmoji("<:atticus:1078753726044590190>"),
    ])
    //Enviamos el mensaje embed con los botones
    let embedpaginas = await message.channel.send({ content: `Pagina **${paginaActual + 1}** de **${embeds.length}**`, embeds: [embeds[0]], components: [botones] });
  
    //Creamos un collector y filtramos que la persona que haga click al botón, sea la misma que ha puesto el comando, y que el autor del mensaje de las páginas, sea el cliente
    const collector = embedpaginas.createMessageComponentCollector({ filter: i => i?.isButton() && i?.user && i?.user.id == message.author.id && i?.message.author.id == client.user.id, time: 180e3 });
    //Escuchamos los eventos del collector
    collector.on("collect", async b => {
        //Si el usuario que hace clic a el botón no es el mismo que ha escrito el comando, le respondemos que solo la persona que ha escrito >>queue puede cambiar de páginas
        if (b?.user.id !== message.author.id) return b?.reply({embeds: [new Discord.MessageEmbed()
          .setDescription('**<:fail:1083542064924479549> |  Oye!, tu no puedes hacer esto! | <:fail:1083542064924479549>**')
          .setColor('e60ad4')] })
  
        switch (b?.customId) {
            case "Atrás": {
                //Resetemamos el tiempo del collector
                collector.resetTimer();
                //Si la pagina a retroceder no es igual a la primera pagina entonces retrocedemos
                if (paginaActual !== 0) {
                    //Resetemamos el valor de pagina actual -1
                    paginaActual -= 1
                    //Editamos el embeds
                    await embedpaginas.edit({ embeds: [embeds[paginaActual]], content: `Pagina **${paginaActual + 1}** de **${embeds.length}**` , components: [embedpaginas.components[0]] }).catch(() => { });
                    await b?.deferUpdate();
                } else {
                    //Reseteamos al cantidad de embeds - 1
                    paginaActual = embeds.length - 1
                    //Editamos el embeds
                    await embedpaginas.edit({ embeds: [embeds[paginaActual]], content: `Pagina **${paginaActual + 1}** de **${embeds.length}**` , components: [embedpaginas.components[0]] }).catch(() => { });
                    await b?.deferUpdate();
                }
            }
                break;
  
            case "Inicio": {
                //Resetemamos el tiempo del collector
                collector.resetTimer();
                //Si la pagina a retroceder no es igual a la primera pagina entonces retrocedemos
                paginaActual = 0;
                await embedpaginas.edit({ embeds: [embeds[paginaActual]], content: `Pagina **${paginaActual + 1}** de **${embeds.length}**` , components: [embedpaginas.components[0]] }).catch(() => { });
                await b?.deferUpdate();
            }
                break;
  
            case "Avanzar": {
                //Resetemamos el tiempo del collector
                collector.resetTimer();
                //Si la pagina a avanzar no es la ultima, entonces avanzamos una página
                if (paginaActual < embeds.length - 1) {
                    //Aumentamos el valor de pagina actual +1
                    paginaActual++
                    //Editamos el embeds
                    await embedpaginas.edit({ embeds: [embeds[paginaActual]], content: `Pagina **${paginaActual + 1}** de **${embeds.length}**` , components: [embedpaginas.components[0]] }).catch(() => { });
                    await b?.deferUpdate();
                    //En caso de que sea la ultima, volvemos a la primera
                } else {
                    //Reseteamos al cantidad de embeds - 1
                    paginaActual = 0
                    //Editamos el embeds
                    await embedpaginas.edit({ embeds: [embeds[paginaActual]], content: `Pagina **${paginaActual + 1}** de **${embeds.length}**` , components: [embedpaginas.components[0]] }).catch(() => { });
                    await b?.deferUpdate();
                }
            }
                break;
  
            default:
                break;
        }
    });
    collector.on("end", () => {
      embedpaginas.edit({
          embeds: [new Discord.MessageEmbed()
            .setAuthor({name: `Mochila de ${user.user.username}`, iconURL: user.displayAvatarURL({ dynamic: true })})
            .setDescription(`Puedes comprar un item escribiendo: \`!shop\`\n\n<:atticus:1078753726044590190> **GLOBAL**\n  ${desc.join('\n')}`)
            .setColor("e60ad4")
            .setThumbnail(message.member.displayAvatarURL({dynamic: true}))
          ], components: [new discord.MessageActionRow().addComponents([
            new discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Atrás").setEmoji("<:retroceder:1078750885175361556>"),
            new discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Inicio").setEmoji("🍙"),
            new discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Avanzar").setEmoji("<:avanzar:1078750882482630776>"),
            new discord.MessageButton().setStyle(`LINK`).setLabel(`Web`).setURL("https://docs.clubatticus.ml/").setEmoji("<:atticus:1078753726044590190>"),
              ])
          ], content: '**Menu Expirado** <:signal:1083529362541924383>'
      })
  })
  }
  }
  
  