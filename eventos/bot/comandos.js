const Discord = require('discord.js')
const config = require('../../config/config.json')
const mongo = require('../../modelos/servidor.js')

module.exports = {
	name: `messageCreate`,
	async run(client, message) {  
    
    ///returns
    if (!message.guild || message.channel.type === 'dm' || message.author.bot) {
      return;
    }
    ///base de datos
    let data = await mongo.findOne({ guildID: message.guild.id });
  if(!data) {
    let server = new mongo({
      prefijo: "!",
      guildID: message.guild.id,
    });
    await server.save();

    data = await mongo.findOne({ guildID: message.guild.id });
  }
  //Escribiendo...

  /////Mention
  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(RegMention)) return message.reply({
      embeds: [new Discord.MessageEmbed()
        .setAuthor(({name: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true})}))
        .setColor("e60ad4")
        .setImage('https://cdn.discordapp.com/attachments/1045427598009839626/1065746146368180365/neko-koshki-devushka.jpg')
        .setDescription(`Hola soy ${client.user.username}, un bot multiusos en Desarrollo <:cofee:1070895818460102656>.\n\n > Mi prefix es: \`${data.prefijo}\`\n> Para ver el menu de comandos usa: \`${data.prefijo} Help\`\n\n**OFICIAL:**\n[Website](https://clubatticus.ml/) | [Wiki](https://docs.clubatticus.ml/_/) | [Soporte](https://discord.com/invite/uAbu8sbPRM)`)], components: [new Discord.MessageActionRow().addComponents(
          [
              new Discord.MessageButton().setStyle(`LINK`).setLabel(`WebSite`).setURL("https://clubatticus.ml/").setEmoji("🎆"),
          ],
          [
              new Discord.MessageButton().setStyle('LINK').setLabel('Server').setURL("https://discord.gg/3HkXZt8rjn").setEmoji("🎇"),
          ]
      )]})
  /////Prefix
  if (!message.content.startsWith(data.prefijo) && !message.content.startsWith(config.prefix)) return;  

  const prefijo = message.content.startsWith(data.prefijo) ? data.prefijo : config.prefix;
  const args = message.content.slice(prefijo.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if (cmd) {
      try {
        cmd.execute(client, message, args, data.prefijo);
      } catch (error) {
        console.error(error);
        message.channel.send({
          embeds: [
            new Discord.MessageEmbed()
              .setDescription(`Ha ocurrido un error al ejecutar el comando \`${command}\`.\n\n\`${error.message}\``)
              .setAuthor({name: "Error", iconURL: client.user.displayAvatarURL({dynamic: true})})
              .setColor("e60ad4")
          ]
        });
      }
    } else {
      message.channel.send({
        embeds: [new Discord.MessageEmbed()
          .setDescription(`\n > **Comando:** \`${command}\`\n > **Usa:** \`club Help\` para ver la lista de Commandos!`)
          .setAuthor({name: "Comando no encontrado", iconURL: client.user.displayAvatarURL({dynamic: true})})
          .setColor("e60ad4")
        ]
      });

    }
  }
}
      
