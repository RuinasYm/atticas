const ecoSchema = require("../../modelos/economia")
const duration = require('humanize-duration');
const Discord = require('discord.js')
const db = require("quick.db");
module.exports = {
    name: 'weekly',
    alias: [],
    description: 'Sirve para recibir tu recompensa semanal',
    uso: '!weekly',
    permisos: ['PREMIUM'],
    permisos_bot: ['ADMINISTRATOR'],
    valoracion: '⭐⭐⭐⭐⭐',
    async execute (client, message, args, prefix) {


        const nopremium = db.get(`premium_${message.author.id}`);

        if (nopremium !== true) {

            message.reply({
                embeds: [new Discord.MessageEmbed()
            .setAuthor({name: `Premium`, iconURL: client.user.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")
            .setDescription(`Este comando solo esta disponible para **Donadores/Boosters** <:coffe:1085588495172632638>.\nBoostea este servidor o donanos en [**Patreon**](https://www.patreon.com/clubatticus) para obtener acceso a los comandos [**Premium**](https://www.patreon.com/clubatticus).`)
                ]
            })

        } else {

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
        let tiempo_ms = 604800000
        //definimos la recompensa aleatoria de dinero, que será un máximo de 1000 monedas y un mínimo de 200
        let recompensa = 10500;
        //definimos el trabajo del usuario
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - userData.weekly) > 0) {
            let tiempo_restante = duration(Date.now() - userData.weekly - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply ({ embeds: [ 
                new Discord.MessageEmbed()
                .setAuthor({name: `Recompensa Semanal`, iconURL: message.author.displayAvatarURL({dynamic: true})})
                .setColor("e60ad4")
                .setDescription(`**${message.author.username}**, tu recompensa semanal estará disponible en \`${tiempo_restante}\`\n\nVisita nuestra ([Click aqui](https://docs.clubatticus.ml/)) <:coffe:1085588495172632638>`)
             
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
            weekly: Date.now()
        }) 
        return message.reply ({ embeds: [ 
            new Discord.MessageEmbed()
            .setAuthor({name: `Recompensa Semanal`, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")
            .setDescription(`<a:arrow:1075495100454555659> ${recompensa} <:clubcoin:1075230099001069568>\n\nVisita nuestra ([Click aqui](https://docs.clubatticus.ml/)) <:coffe:1085588495172632638>`)
         
        ], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`Visitar`).setURL('https://docs.clubatticus.ml/'),
            ]
            )]})
  

        }
    }
}