// const Discord = require("discord.js");
// const { MessageSelectMenu, MessageActionRow, MessageEmbed } = require("discord.js");

// module.exports = {

//     name: "ticket_menu",

//     async execute(client, interaction, args)  {

//         const e = new MessageEmbed()

//         if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")] })

//         interaction.delete();

//         let embed = new Discord.MessageEmbed()
//         .setColor("e60ad4")
//         .setDescription(`💎 • Su ticket sera eliminado por las siguientes razones:\n\n ୨ 🎫 ୧・┃Abrir Ticket y no responder.\n ୨ 🎫 ୧・┃Abrir Ticket sin Razón o para molestar al STAFF.\n ୨ 🎫 ୧・┃Equivocación.`)
//         .setImage("https://cdn.discordapp.com/attachments/1052343306538975282/1070863140843180113/Seista-Wallpaper.png")
//         .setAuthor({name: "Sistema de Tickets", iconURL: client.user.displayAvatarURL({dynamic: true})})
//         .setFooter({text: "♦ Abrir un ticket sin razón sera motivo de una sanción"})


//         let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
//         .setCustomId('menu')
//         .setPlaceholder('Haz una seleccion') // Mensagem estampada
//         .addOptions([
//                {
//                     label: 'Suporte Geral',
//                     description: '',
//                     emoji: '🙋‍♂️',
//                     value: 'geral',
//                },
//                {
//                 label: 'Denúncias',
//                 description: '',
//                 emoji: '⛔',
//                 value: 'denuncias',
//                },
//                {
//                 label: 'Erro no bot',
//                 description: '',
//                 emoji: '🤖',
//                 value: 'bot',
//                }
//             ])

//         );


//         interaction.channel.send({ embeds: [embed], components: [painel] }).then(msg => {


//             const filtro = (interaction) => 
//             interaction.isSelectMenu()
      
//           const coletor = msg.createMessageComponentCollector({
//             filtro
//           });
      

//           coletor.on('collect', async (collected) => {

//             let ticket = collected.values[0]
//             collected.deferUpdate()




//             if (ticket === "geral") {
//                 let embed_geral = new Discord.MessageEmbed()
//                 .setColor("RANDOM")
//                 .setDescription(`**🙋‍♂️ Olá ${collected.user}, seu ticket foi criado na categoria \`Suporte Geral\`.**`);
//                 const findchannel = interaction.guild.channels.cache.find(c => c.name === `ticket-1`);
//                 if(findchannel) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> |  Ya tienes un ticket creado! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
              
//                 interaction.guild.channels.create(`ticket-1`, {
//                     type : 'GUILD_TEXT',
//                     permissionOverwrites : [
//                         {
//                             id : interaction.guild.id,
//                             deny : ['VIEW_CHANNEL']
//                         },
//                         {
//                             id : collected.user.id,
//                             allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
//                         }
//                     ]
//                 }).then(async (chat_ferinha) => {
        
//                     chat_ferinha.send({ embeds: [embed_geral] }).then(msg => msg.pin() );
        
//                 });


//             }



//             if (ticket === "denuncias") {
//                 let embed_denuncias = new Discord.MessageEmbed()
//                 .setColor("RANDOM")
//                 .setDescription(`**⛔ Olá ${collected.user}, seu ticket foi criado na categoria \`Denúncias\`.**`);
//                 const findchannel = interaction.guild.channels.cache.find(c => c.name === `ticket-1`);
//                 if(findchannel) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> |  Ya tienes un ticket creado! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
              
//                 interaction.guild.channels.create(`ticket-1`, {
//                     type : 'GUILD_TEXT',
//                     permissionOverwrites : [
//                         {
//                             id : interaction.guild.id,
//                             deny : ['VIEW_CHANNEL']
//                         },
//                         {
//                             id : collected.user.id,
//                             allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
//                         }
//                     ]
//                 }).then(async (chat_ferinha) => {
        
//                     chat_ferinha.send({ embeds: [embed_denuncias] }).then(msg => msg.pin() );
        
//                 });
                
//             }



//             if (ticket === "bot") {
//                 let embed_bot = new Discord.MessageEmbed()
//                 .setColor("RANDOM")
//                 .setDescription(`**🤖 Olá ${collected.user}, seu ticket foi criado na categoria \`Erro no bot\`.**`);
//                 const findchannel = interaction.guild.channels.cache.find(c => c.name === `ticket-1`);
//                 if(findchannel) return interaction.reply({ content: "Ya tienes un ticket creado", ephemeral: true}) 
//                 interaction.guild.channels.create(`ticket-1`, {
//                     type : 'GUILD_TEXT',
//                     permissionOverwrites : [
//                         {
//                             id : interaction.guild.id,
//                             deny : ['VIEW_CHANNEL']
//                         },
//                         {
//                             id : collected.user.id,
//                             allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
//                         }
//                     ]
//                 }).then(async (chat_ferinha) => {
        
//                     chat_ferinha.send({ embeds: [embed_bot] }).then(msg => msg.pin() );
        
//                 });
                
//             }


//           })
                

//         });

        

//     }
// }