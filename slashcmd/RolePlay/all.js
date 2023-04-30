const { MessageActionRow, MessageSelectMenu} = require('discord.js')
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

var dancegif = [
        "https://nekocdn.com/images/wZFmoSzy.gif",
        "https://nekocdn.com/images/ptXrnhu9n.gif",
        "https://nekocdn.com/images/FGu2VFM5.gif",
        "https://nekocdn.com/images/ak5Y1XQb.gif",
        "https://nekocdn.com/images/wIBARQzm8.gif",
        "https://nekocdn.com/images/Jfi_KNP4-.gif",
        "https://nekocdn.com/images/eA5WyMA3.gif",
        "https://nekocdn.com/images/nMJVUeeq.gif",
        "https://nekocdn.com/images/tAKVExWd.gif",
        "https://nekocdn.com/images/rX6yArMaW.gif"
    ];

var killgif = [
    "https://nekocdn.com/images/fA_3CqGmB.gif",
    "https://nekocdn.com/images/HNnrdYke.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/512X1rBhh.gif",
    "https://nekocdn.com/images/GS63a0Pu.gif",
    "https://nekocdn.com/images/WA_K5JBL.gif",
    "https://nekocdn.com/images/NZ7EEI0MJ.gif",
    "https://nekocdn.com/images/GinvSokV.gif",
    "https://nekocdn.com/images/7Q9dBd_a.gif",
    "https://cdn.discordapp.com/attachments/935312383109369939/976615544251895808/unknown.png"

];

var sleepgif = [
        "https://nekocdn.com/images/Y4_zbL2j.gif",
        "https://nekocdn.com/images/bZO8JPuE.gif", 
        "https://nekocdn.com/images/UiHZmxit.gif",
        "https://i.pinimg.com/originals/f1/5e/3e/f15e3e84c6fc6ef01419fa7fab86b571.gif"
    ];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roleplay")
        .setDescription("Comandos de roleplay")
        .addSubcommand(subcommand =>
                subcommand
                .setName("dance")
                .setDescription("Baila o con un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )  
        .addSubcommand(subcommand =>
                subcommand
                .setName("feed")
                .setDescription("Alimentate o a un Usuario!")
                .addUserOption(option => option.setName("usuario").setDescription("Usuario que quieres alimentar").setRequired(false))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("hug")
                .setDescription("Abraza a un usuario!")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("kill")
                .setDescription("Mata a un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("kiss")
                .setDescription("Besa a un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("pat")
                .setDescription("Acaricia a un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("slap")
                .setDescription("Bofetea a un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )    
        .addSubcommand(subcommand =>
                subcommand
                .setName("sleep")
                .setDescription("Duerme o con un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )
        .addSubcommand(subcommand =>
                subcommand
                .setName("smug")
                .setDescription("Presume o a un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )   
        .addSubcommand(subcommand =>
                subcommand
                .setName("tickle")
                .setDescription("Cosquilleate o a un usuario")
                .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false))
                )
                .addSubcommand(subcommand =>
                    subcommand
                    .setName("ship")
                    .setDescription("💖 Calcula tu porsentaje amoroso con un usuario")
                    .addUserOption(option => option.setName("usuario_1").setDescription("Primer usuario").setRequired(true))
                    .addUserOption(option => option.setName("usuario_2").setDescription("Segundo usuario").setRequired(true))
                    ),          
        
    async run(client, interaction){
        if (interaction.options.getSubcommand() === "dance"){
                const usuario = interaction.options.getUser("usuario");
        let dance = dancegif[Math.floor(Math.random() * dancegif.length)];
 
        if (!usuario) {
            const embed = new MessageEmbed()//definimos embed
            .setAuthor({name: `${interaction.user.username} está bailando.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(dance)
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} está bailando.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(dance)]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} está bailando con ${usuario.username}. :D`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setColor("RANDOM")//color random
            .setImage(dance)
            
            interaction.reply({embeds: [embed2]});
        }
            
        } else if (interaction.options.getSubcommand() === "feed"){
                const usuario = interaction.options.getUser("usuario");
 
                if (!usuario) {
                    const embed = new MessageEmbed()
                        .setAuthor({name: `Ñaam ${interaction.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                        .setColor("RANDOM")
                        .setImage(await club.feed());
                    interaction.reply({embeds: [embed]});
                } else  { 
        
                    if (usuario.id === interaction.user.id) 
                        return interaction.reply({embeds: [new Discord.MessageEmbed()
                            .setAuthor({name: `Ñaam ${interaction.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                            .setColor("RANDOM")
                            .setImage(await club.feed())
                        ]})
                        
                    const embed2 = new MessageEmbed()
                        .setAuthor({name: `${interaction.user.username} le dio de comer a ${usuario.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                        .setColor("RANDOM")
                        .setImage(await club.feed());
                    interaction.reply({embeds: [embed2]});
                }
            
        } else if (interaction.options.getSubcommand() === "hug"){
                const usuario = interaction.options.getUser("usuario");
 
        if (!usuario) {
            const embed = new MessageEmbed()
        .setAuthor({name: `${interaction.user.username} abrazó a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        .setColor("RANDOM")//color random
        .setImage(await club.hug())
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} abrazó a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.hug())
                    ]})
                
                const embed2 = new MessageEmbed()//definimos embed
                .setAuthor({name: `${interaction.user.username} le dio un abrazo a ${usuario.username}. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                .setColor("RANDOM")//color random
                .setImage(await club.hug())
            interaction.reply({embeds: [embed2]});
        }
            
        } else if (interaction.options.getSubcommand() === "kill"){
                const usuario = interaction.options.getUser("usuario");
        let kill = killgif[Math.floor(Math.random() * killgif.length)];
 
        if (!usuario) {
            const embed = new Discord.MessageEmbed()
            .setAuthor({name: `${interaction.user.username} se acaba de suicidar`, iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("RANDOM")
            .setImage(`${kill}`)
            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} se acaba de suicidar`, iconURL: client.user.displayAvatarURL({dynamic: true})})
                    .setColor("RANDOM")
                    .setImage(`${kill}`)
            ]})
                
            const embed2 = new MessageEmbed()
            .setAuthor({name: `${interaction.user.username} acaba de matar a ${usuario.username}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("RANDOM")
            .setImage(`${kill}`)
            interaction.reply({embeds: [embed2]});
        }
            
        } else if (interaction.options.getSubcommand() === "kiss"){
                const usuario = interaction.options.getUser("usuario");
 
                if (!usuario) {
                    const embed= new MessageEmbed()
                          .setAuthor({name: `${interaction.user.username} beso a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                          .setColor("RANDOM")//color random
                          .setImage(await club.kiss())
                    interaction.reply({embeds: [embed]});
        
                } else  { 
        
                    if (usuario.id === interaction.user.id) 
                        return interaction.reply({embeds: [new Discord.MessageEmbed()
                            .setAuthor({name: `${interaction.user.username} beso a un ser imaginario. (つ≧▽≦)つ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                            .setColor("RANDOM")//color random
                            .setImage(await club.kiss())
                        ]})
                        
                    const embed2 = new MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} le dio un beso a ${usuario.username}. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.kiss())
                    interaction.reply({embeds: [embed2]});
                }
            
        } else if (interaction.options.getSubcommand() === "pat"){
                const usuario = interaction.options.getUser("usuario");
 
                if (!usuario) {
                    const embed = new MessageEmbed()//definimos embed
                    .setAuthor({name: `${interaction.user.username} acarició a un ser imaginario. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.pat())
                    interaction.reply({embeds: [embed]});
                } else  { 
        
                    if (usuario.id === interaction.user.id) 
                        return interaction.reply({embeds: [new Discord.MessageEmbed()
                            .setAuthor({name: `${interaction.user.username} acarició a un ser imaginario. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                            .setColor("RANDOM")//color random
                            .setImage(await club.pat())]})
                        
                    const embed2 = new MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} acarició a ${usuario.username}. <3`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.pat())
                    interaction.reply({embeds: [embed2]});
                }
            
        } else if (interaction.options.getSubcommand() === "slap"){
                const usuario = interaction.options.getUser("usuario");
 
                if (!usuario) {
                    const embed = new Discord.MessageEmbed()
                          .setAuthor({name: `${interaction.user.username} le dió una bofetada a un ser imaginario. o.o`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                          .setColor("RANDOM")//color random
                          .setImage(await club.slap())
                    interaction.reply({embeds: [embed]});
                } else  { 
        
                    if (usuario.id === interaction.user.id) 
                        return interaction.reply({embeds: [new Discord.MessageEmbed()
                            .setAuthor({name: `${interaction.user.username} le dió una bofetada a un ser imaginario. o.o`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                            .setColor("RANDOM")//color random
                            .setImage(await club.slap())
                        ]})
                        
                    const embed2 = new MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} le dio una bofetada a ${usuario.username}. D:`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.slap())
                    interaction.reply({embeds: [embed2]});
                }
            
        } else if (interaction.options.getSubcommand() === "sleep"){
                const usuario = interaction.options.getUser("usuario");
                let sleep = sleepgif[Math.floor(Math.random() * sleepgif.length)];
         
                if (!usuario) {
                    const embed = new MessageEmbed()//definimos embed
                    .setAuthor({name: `${interaction.user.username} se mimió o tiene sueño.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(sleep)
                    interaction.reply({embeds: [embed]});
                } else  { 
        
                    if (usuario.id === interaction.user.id) 
                        return interaction.reply({embeds: [new Discord.MessageEmbed()
                            .setAuthor({name: `${interaction.user.username} se mimió o tiene sueño.`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                            .setColor("RANDOM")//color random
                            .setImage(sleep)
                        ]})
                        
                    const embed2 = new MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} se fue a mimir con ${usuario.username}. (-, - )…zzzZZZ`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(sleep)
                    interaction.reply({embeds: [embed2]});
                }
            
        } else if (interaction.options.getSubcommand() === "smug"){
                const usuario = interaction.options.getUser("usuario");
 
                if (!usuario) {
                    const embed = new MessageEmbed()//definimos embed
                    .setAuthor({name: `${interaction.user.username} está presumiendo. >.>`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.smug())
                    interaction.reply({embeds: [embed]});
                } else  { 
        
                    if (usuario.id === interaction.user.id) 
                        return interaction.reply({embeds: [new Discord.MessageEmbed()
                            .setAuthor({name: `${interaction.user.username} está presumiendo. >.>`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                            .setColor("RANDOM")//color random
                            .setImage(await club.smug())
                        ]})
                        
                    const embed2 = new MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} está presumiendo a ${usuario.username}. >.>`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.smug())
                    interaction.reply({embeds: [embed2]});
                }
            
        } else if (interaction.options.getSubcommand() === "tickle"){
                const usuario = interaction.options.getUser("usuario");
 
                if (!usuario) {
                    const embed = new MessageEmbed()//definimos embed
                    .setAuthor({name: `Jejeje`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.tickle())
                    interaction.reply({embeds: [embed]});
                } else  { 
        
                    if (usuario.id === interaction.user.id) 
                        return interaction.reply({embeds: [new Discord.MessageEmbed()
                            .setAuthor({name: `Jejeje`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                            .setColor("RANDOM")//color random
                            .setImage(await club.tickle())]})
                        
                    const embed2 = new MessageEmbed()
                    .setAuthor({name: `${interaction.user.username} le hace cosquillas a ${usuario.username} :D`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setColor("RANDOM")//color random
                    .setImage(await club.tickle())
                    interaction.reply({embeds: [embed2]});
                }         
        } else if (interaction.options.getSubcommand() === "ship"){
            const block = "⬛";
            const heart = ":red_square:";
        
            
            const user1 = interaction.options.getUser("usuario_1");
            const user2 = interaction.options.getUser("usuario_2");
            
            const canvas = Canvas.createCanvas(610, 200);
            const ctx = canvas.getContext('2d');
            const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1086818873329852467/1090075562929836102/love.png');
            const avatar1 = await Canvas.loadImage(user1.displayAvatarURL({ format: 'png' }));
            const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: 'png' }));
            
            // Dibuja la imagen de fondo y los avatares
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.save();
            // Hace los avatares circulares y los dibuja en el canvas
            ctx.beginPath();
            const centerX1 = 488;
            const centerY1 = 100;
            const radius1 = 81;
            const gradient1 = ctx.createRadialGradient(centerX1, centerY1, 0, centerX1, centerY1, radius1);
            gradient1.addColorStop(0, '#fff');
            gradient1.addColorStop(1, '#000');
            ctx.arc(centerX1, centerY1, radius1, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(avatar2, centerX1 - radius1, centerY1 - radius1, radius1 * 2, radius1 * 2);
            ctx.restore();
    
            ctx.beginPath();
            const centerX2 = 125;
            const centerY2 = 100;
            const radius2 = 81;
            const gradient2 = ctx.createRadialGradient(centerX2, centerY2, 0, centerX2, centerY2, radius2);
            gradient2.addColorStop(0, '#fff');
            gradient2.addColorStop(1, '#000');
            ctx.arc(centerX2, centerY2, radius2, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(avatar1, centerX2 - radius2, centerY2 - radius2, radius2 * 2, radius2 * 2);
            ctx.restore();
            
            
            // Crea un archivo adjunto con la imagen y envía la respuesta
            const attachment = new MessageAttachment(canvas.toBuffer(), 'tweet.png');
            
    
                    const embed = new MessageEmbed()
                        .setColor('e60ad4')
                        .setAuthor({name: '💓 Tenemos una nueva pareja? 💓', iconURL: client.user.displayAvatarURL({dynamic: true})})
                        .setImage(`attachment://tweet.png`)
                        .addFields(
                            { name: `Usuario 1`, value: `****${user1}****`, inline: true },
                            { name: `Usuario 2`, value: `****${user2}****`, inline: true },
                            { name: `**Compatibilidad**`, value: ship() },
                            )
                    try {
                        return interaction.reply({embeds: [embed], files: [attachment]})
                    } catch (error) {
                        return interaction.Editreply({
                            embeds: [
                                new MessageEmbed()
                                .setDescription(`❌ | Ah ocurrido un error!`)
                                .setColor("RED")
                            ], ephemeral: true
                        })
                    }
                    function ship() {
                        const hearts = Math.floor(Math.random() * 105) + 0;
                        const hearte = (hearts / 10)
            
                        const str = `${heart.repeat(hearte)}${block.repeat(11 - hearte)} ${hearts}%`;
                        return str;
                    }
                    
    
            
        }
    

    }
}


/*
const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const CLUB = require("club-atticus");
const club = new CLUB();
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("")
        .setDescription("")
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un usuario").setRequired(false)),
        
    async run(client, interaction) {
        const usuario = interaction.options.getUser("usuario");
 
        if (!usuario) {

            interaction.reply({embeds: [embed]});
        } else  { 

            if (usuario.id === interaction.user.id) 
                return interaction.reply({embeds: [new Discord.MessageEmbed()]})
                
            const embed2 = new MessageEmbed()
            interaction.reply({embeds: [embed2]});
        }
   }
}*/

