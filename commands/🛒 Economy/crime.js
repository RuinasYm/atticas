const ecoSchema = require("../../modelos/economia")
const duration = require('humanize-duration');
const Discord = require('discord.js')

var asaltos = [
    "banco",
    "hospital",
    "avión",
    "taxi",
    "bar",
]
var mafias = [
    "un mafioso",
    "una mafiosa",
]
var hacks = [
    "pagina web",
    "empresa",
    "computadora",
    "tablet",
    "aplicación",
]
module.exports = {
    name: 'crime',
    alias: ['crimen'],
    description: 'Sirve para realizar un crimen y ganar algo de coins',
    uso: '!crime',
    permisos: ['SEND_MESSAGES'],
    permisos_bot: ['ADMINISTRATOR'],
    valoracion: '⭐⭐⭐⭐⭐',
    async execute (client, message, args, prefix) {
        //asaltos randoms
        let asalto = asaltos[Math.floor(Math.random() * asaltos.length)]
        //asaltos randoms
        let mafia = mafias[Math.floor(Math.random() * mafias.length)]
        //hacks randoms
        let hack = hacks[Math.floor(Math.random() * hacks.length)]
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
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - userData.crime) > 0) {
            let tiempo_restante = duration(Date.now() - userData.crime - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply({embeds: [new Discord.MessageEmbed()
                .setAuthor({name: `${message.author.username}`, iconURL: message.member.displayAvatarURL({dynamic: true})})
                .setDescription(`<a:time:1075236156029030420> Podrás realizar un crimen en \`${tiempo_restante}\``)
                .setColor("e60ad4")
                
            ]})
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            crime: Date.now()
        }) 
        let embed = new Discord.MessageEmbed()
            .setAuthor({name: `¿Qué crimen cometerás?`, iconURL: message.author.displayAvatarURL({dynamic: true})})
            .setDescription(`<:inspeccion:1070871951641411715> ¿Un asalto?\n<:emoji_50:1075270071447990276> ¿Mafia?\n<:emoji_46:1075269987297660959> tal vez... ¿Hack?`)
            .setColor("e60ad4")
         
        const m = await message.channel.send({embeds: [embed], components: [new Discord.MessageActionRow().addComponents([
            new Discord.MessageButton().setStyle('PRIMARY').setLabel("Asalto").setCustomId("Asalto"),
            new Discord.MessageButton().setStyle('PRIMARY').setLabel("Mafia").setCustomId("Mafia"),
            new Discord.MessageButton().setStyle('PRIMARY').setLabel("Hack").setCustomId("Hack")])] })


        const collector = m.createMessageComponentCollector({ filter: i => i.user.id == message.author.id, time: 180e3 })

        collector.on("collect", async i => {
            if(i.customId === "Asalto"){
                await i.deferUpdate()
                i.editReply ({ embeds: [ 
                    new Discord.MessageEmbed()
                    .setAuthor({name: `Resultado`, iconURL: message.author.displayAvatarURL({dynamic: true})})
                    .setColor("e60ad4")
                    .setDescription(`Asaltaste un ${asalto} y obtuviste **${recompensa}** <:clubcoin:1075230099001069568> por ello.`)
                 
                ], components: []})
            };
            if(i.customId === "Mafia"){
                await i.deferUpdate()
                i.editReply ({ embeds: [ 
                    new Discord.MessageEmbed()
                    .setAuthor({name: `Resultado`, iconURL: message.author.displayAvatarURL({dynamic: true})})
                    .setColor("e60ad4")
                    .setDescription(`Trabajaste para ${mafia} y obtuviste **${recompensa}** <:clubcoin:1075230099001069568> por ello.`)
                 
                ], components: []})
            };
            if(i.customId === "Hack"){
                await i.deferUpdate()
                i.editReply ({ embeds: [ 
                    new Discord.MessageEmbed()
                    .setAuthor({name: `Resultado`, iconURL: message.author.displayAvatarURL({dynamic: true})})
                    .setColor("e60ad4")
                    .setDescription(`Hackeaste una ${hack} y obtuviste **${recompensa}** <:clubcoin:1075230099001069568> por ello.`)
                 
                ], components: []})
            }
        })
        

    }
}