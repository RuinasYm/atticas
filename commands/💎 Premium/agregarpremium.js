const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "premiumadd",
    alias: ["agregarpremium"],
    desc: "Sirve para agregar premium a un usuario",
    uso: "!premium (usuario)",
    permisos: ["ADMINISTRATOR"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute(client, message, args)  {

        if(message.author.id !== "1001880420138373191") return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })
        const user = message.mentions.users.first() || client.users.cache.get(args[0]);

        if (!user) return  message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar un Usuario! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

        db.set(`premium_${user.id}`, true)
        const embed = new Discord.MessageEmbed()
        .setAuthor("Premium", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setColor("e60ad4")
        
        .setDescription(` > **Nuevo usuario Premium! \n > Usuario:** ${user}`)
        
        message.reply({embeds: [embed]})

                
            }
        }
        