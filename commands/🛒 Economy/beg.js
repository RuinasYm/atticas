const ecoSchema = require("../../modelos/economia")
const duration = require('humanize-duration');
const Discord = require('discord.js')
var horas = [
    "1 hora",
    "2 horar",
    "1 hora y 30 minutos",
    "2 hora y 30 minutos"
];
module.exports = {
    name: 'beg',
    alias: ['mendigar'],
    description: 'Sirve para mendigar y ganar algo de coins',
    uso: '!beg',
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
        let hora = horas[Math.floor(Math.random() * horas.length)];
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - userData.beg) > 0) {
            let tiempo_restante = duration(Date.now() - userData.beg - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply({embeds: [new Discord.MessageEmbed()
                .setAuthor({name: `${message.author.username}`, iconURL: message.member.displayAvatarURL({dynamic: true})})
                .setDescription(`<a:time:1075236156029030420> Podrás regresar a mendigar en \`${tiempo_restante}\``)
                .setColor("e60ad4")
                
            ]})
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            beg: Date.now()
        }) 
        return message.reply ({ embeds: [ 
            new Discord.MessageEmbed()
            .setAuthor({name: `${message.author.username}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setColor("e60ad4")
            .setDescription(`Mendigaste por ${hora} y ganaste **${recompensa}** <:clubcoin:1075230099001069568>.`)
         
        ]})
  

    }
}