const ms = require('ms');
const Discord = require('discord.js')
module.exports = {
    name: "giveaway",
    alias: ["sorteo", "sorteos", "giveaways"],
    desc: "Sirve administrar/crear un sistema de sorteos",
    permisos: ["MANAGE_CHANNELS"],
    permisos_bot: ["ADMINISTRATOR"],
    async execute (client, message, args, prefix)  {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tienes los permisos suficientes: \`MANAGE_CHANNELS\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
          ]})
          if(!message.guild.me.permissions.has("MANAGE_CHANNELS"))return message.reply({embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  No tengo los permisos: \`MANAGE_CHANNELS\` | <:fail:1083542064924479549>**")
            .setColor("e60ad4")]})
        //definimos los metodos del sorteos
        let metodos = ["start", "reroll", "end"];
        if(!args || !metodos.includes(args[0])) return message.reply({
            embeds: [new Discord.MessageEmbed()
            .setColor("e60ad4")
            .setDescription(`<:fail:1083542064924479549> |  Uso correcto: ${metodos.map(metodo => `\`${metodo}\``).join(", ")}! | <:fail:1083542064924479549>`)
            ]
        });

        switch (args[0]) {
            case "start":{
                let embed = new Discord.MessageEmbed()
                .setDescription(`<:fail:1083542064924479549> |  Uso correcto: \`!sorteo\` \`<#canal>\` \`<duración>\` \`<ganadores>\` \`<premio>\`! | <:fail:1083542064924479549>`)
                .setColor("e60ad4");

                let canal = message.guild.channels.cache.get(args[1]) || message.mentions.channels.first();
                if(!canal) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un canal valido! | <:fail:1083542064924479549>`)]
                })
                let tiempo = args[2];
                if(!tiempo) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar una duracion valida! | <:fail:1083542064924479549>`)]
                })
                let tiempo_en_ms = ms(args[2]);
                if(!tiempo_en_ms || isNaN(tiempo_en_ms) || tiempo_en_ms < 0 || tiempo_en_ms % 1 != 0) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar una duracion valida! | <:fail:1083542064924479549>`)]
                })
                let ganadores = Number(args[3]);
                if(!ganadores || isNaN(ganadores) || ganadores < 0 || ganadores % 1 != 0) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar una cantidad de ganadares valida! | <:fail:1083542064924479549>`)]
                })
                let premio = args.slice(4).join(" ");
                if(!premio) return message.reply({
                    embeds: [embed.setDescription(`<:fail:1083542064924479549> |  Tienes que ingresar un premio valido! | <:fail:1083542064924479549>`)]
                });
          

                client.giveawaysManager.start(canal, {
                    duration: tiempo_en_ms,
                    winnerCount: Number(ganadores),
                    prize: `${premio}`,
                    hostedBy: message.author,
                    messages: {
                        giveaway: "🎊 **Giveaway** 🎊",
                        giveawayEnded: "<a:time:1075236156029030420> **Giveaway End** <a:time:1075236156029030420>",
                        inviteToParticipate: "React with 🎊 to participate!",
                        winMessage: "🎊 Congratulations, {winners} Winner **{this.prize}**",
                        winners: "Winners:",
                        hostedBy: "Hosted by {this.hostedBy}",
                        endedAt: "Ended:",
                        drawing: "Ended: <t:{Math.round(this.endAt / 1000)}:R>",
                        noWinner: 'No winners',
                    }

                }).then(() => {
                    return message.reply({content: `El sorteo se ah iniciado en el canal: ${canal.toString()} <:coffe:1085588495172632638>.`})
                })
            }

                
                break;
        
            default:
                break;
        }
    }
}

