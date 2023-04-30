const Item = require('../../modelos/item');
const Discord = require('discord.js')
module.exports = {
  name: 'shop',
  alias: ['tienda'],
  description: 'Mira los items en venta de economia',
  uso: '!shop',
  permisos: ['SEND_MESSAGES'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  async execute(client, message, titulo = "Leaderboard de Usuarios") {
    const items = await Item.find({guildId: message.guild.id});
    if (items.length === 0) {
      return message.channel.send('No hay artículos disponibles en la tienda');
    }


  const texto = items.map(itemData => `**${itemData.name}** \`[ID: ${itemData.id}]\` - [**${itemData.price}**](https://www.clubatticus.ml) <:clubcoin:1075230099001069568>\n${itemData.description}.\n`);
  var elementos_por_pagina = 5
  var embeds = [];
  var dividido = elementos_por_pagina;
  for(let i = 0; i < texto.length; i+= dividido) {
      let desc = texto.slice(i, elementos_por_pagina);
      elementos_por_pagina+= dividido;
      //creamos un embed por cada pagina de los datos divididos
      let embed = new Discord.MessageEmbed()
      .setAuthor({name: `Tienda de Club Coins`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setDescription(`Bienvenidos a mi tiendita Uwu\nPuedes comprar un item escribiendo: \`!buy [ID]\`\n\n**Lista de items**\n  ${desc.join("\n")}`)
      .setColor("e60ad4")
      .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1065746146368180365/neko-koshki-devushka.jpg")
      embeds.push(embed)
  }

  let paginaActual = 0;
  //Si la cantidad de embeds es solo 1, envíamos el mensaje tal cual sin botones
  if (embeds.length === 1) return message.channel.send({ embeds: [embeds[0]] }).catch(() => { });
  //Si el numero de embeds es mayor 1, hacemos el resto || definimos los botones.
  
  const botones = new Discord.MessageActionRow().addComponents([
      new Discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Atrás").setEmoji("<:retroceder:1078750885175361556>"),
      new Discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Inicio").setEmoji("🍙"),
      new Discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Avanzar").setEmoji("<:avanzar:1078750882482630776>"),
      new Discord.MessageButton().setStyle(`LINK`).setLabel(`Web`).setURL("https://docs.clubatticus.ml/").setEmoji("<:atticus:1078753726044590190>"),
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
            .setAuthor({name: `Tienda de Club Coins`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setDescription(`Bienvenidos a mi tiendita Uwu\nPuedes comprar un item escribiendo: \`!buy [ID]\`\n\n**Lista de items**\n  ${desc.join("\n")}`)
            .setColor("e60ad4")
            .setImage("https://cdn.discordapp.com/attachments/1045427598009839626/1065746146368180365/neko-koshki-devushka.jpg")
        ], components: [new Discord.MessageActionRow().addComponents([
            new Discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Atrás").setEmoji("<:retroceder:1078750885175361556>"),
            new Discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Inicio").setEmoji("🍙"),
            new Discord.MessageButton().setStyle('PRIMARY').setLabel("").setCustomId("Avanzar").setEmoji("<:avanzar:1078750882482630776>"),
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Web`).setURL("https://docs.clubatticus.ml/").setEmoji("<:atticus:1078753726044590190>"),
            ])
        ], content: '**Menu Expirado** <:signal:1083529362541924383>'
    })
})
}
}


