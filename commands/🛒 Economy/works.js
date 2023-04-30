const ecoSchema = require("../../modelos/economia")
const duration = require('humanize-duration');
const Discord = require('discord.js')
var trabajos = [
    "Camionero",
    "desarrollador",
    "Mecánico",
    "Taxista"
];
module.exports = {
    name: 'work',
    alias: ['trabajar'],
    description: 'Sirve para trabajar y ganar algo de coins',
    uso: '!work',
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
        let tiempo_ms = 30000
        //definimos la recompensa aleatoria de dinero, que será un máximo de 1000 monedas y un mínimo de 200
        let recompensa = Math.floor(Math.random() * 500) + 200;
        //definimos el trabajo del usuario
        let trabajo = trabajos[Math.floor(Math.random() * trabajos.length)];
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - userData.work) > 0) {
            let tiempo_restante = duration(Date.now() - userData.work - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply({embeds: [new Discord.MessageEmbed()
                .setAuthor({name: `${message.author.username}`, iconURL: message.member.displayAvatarURL({dynamic: true})})
                .setDescription(`<a:time:1075236156029030420> Podrás regresar a trabajar en \`${tiempo_restante}\``)
                .setColor("e60ad4")
                
            ]})
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            work: Date.now()
        }) 
        return message.reply ({ embeds: [ 
            new Discord.MessageEmbed()
            .setAuthor({name: `${message.author.username}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")
            .setDescription(`Trabajaste como ${trabajo} y te han pagado ${recompensa} <:clubcoin:1075230099001069568> por ello.`)
         
        ]})
  

    }
}