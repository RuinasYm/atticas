const ecoSchema = require("../../modelos/economia")
const duration = require('humanize-duration');
const Discord = require('discord.js')

module.exports = {
    name: 'daily',
    alias: [],
    description: 'Sirve para recibir tu recompensa diaria',
    uso: '!daily',
    permisos: ['SEND_MESSAGES'],
    permisos_bot: ['ADMINISTRATOR'],
    valoracion: '⭐⭐⭐⭐⭐',
    async execute (client, message, args, prefix) {
        //leemos la economia el usuario
        let userData = await ecoSchema.findOne({userID: message.author.id})
        if (!userData){
            let newdata = new ecoSchema({
              userID: message.author.id,
      
            }) 
      
            await newdata.save()
            userData = await ecoSchema.findOne({userID: message.author.id});
          }
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms = 54000000
        //definimos la recompensa aleatoria de dinero, que será un máximo de 1000 monedas y un mínimo de 200
        let recompensa = 1500;
        //definimos el trabajo del usuario
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - userData.daily) > 0) {
            let tiempo_restante = duration(Date.now() - userData.daily - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply ({ embeds: [ 
                new Discord.MessageEmbed()
                .setAuthor({name: `Recompensa Diaria`, iconURL: message.author.displayAvatarURL({dynamic: true})})
                .setColor("e60ad4")
                .setDescription(`**${message.author.username}**, tu recompensa diaria estará disponible en \`${tiempo_restante}\`\n\nVisita nuestra ([Click aqui](https://docs.clubatticus.ml/)) <:coffe:1085588495172632638>`)
             
            ], components: [new Discord.MessageActionRow().addComponents(
                [
                    new Discord.MessageButton().setStyle(`LINK`).setLabel(`Visitar`).setURL('https://docs.clubatticus.ml/'),
                ]
                )]})
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            daily: Date.now()
        }) 
        return message.reply ({ embeds: [ 
            new Discord.MessageEmbed()
            .setAuthor({name: `Recompensa Diaria`, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")
            .setDescription(`<a:arrow:1075495100454555659> ${recompensa} <:clubcoin:1075230099001069568>\n\nVisita nuestra ([Click aqui](https://docs.clubatticus.ml/)) <:coffe:1085588495172632638>`)
         
        ], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`Visitar`).setURL('https://docs.clubatticus.ml/'),
            ]
            )]})
  

    }
}