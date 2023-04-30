const ecoSchema = require("../../modelos/economia")
const duration = require('humanize-duration');
const Discord = require('discord.js')

module.exports = {
    name: "rob",
    aliases: ["trabajar"],
    desc: "Sirve para trabajar y conseguir monedas cada 3h",
    async execute (client, message, args, prefix) {
        if (!args.length) return message.reply("La forma correcta es: \`!rob <user>\` <:coffe:1085588495172632638>")
        const usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
        if (!usuario) return message.reply("Usuario no encontrado <:coffe:1085588495172632638>")
        if(usuario.user.bot) return message.reply("<:coffe:1085588495172632638> Los bots no registran perfiles.");
        if (usuario.id === message.author.id) return message.reply(`¿Te robarias a ti mismo/a **${message.author.username}**? <:coffe:1085588495172632638>`)
        //aseguramos la economia del usuario a robar
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({ userID: message.author.id });
        if (!data){
            let newdata = new ecoSchema({
              userID: usuario.id,
      
            }) 
            data = await ecoSchema.findOne({userID: usuario.id});
            await newdata.save()
        }
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms = 5 * 60 * 1000; // 5 minutos
        //comprobaciones previas
        if (tiempo_ms - (Date.now() - data.rob) > 0) {
            let tiempo_restante = duration(Date.now() - data.rob - tiempo_ms,
                {
                    language: "es",
                    units: ["h", "m", "s"],
                    round: true,
                })
                return message.reply({embeds: [new Discord.MessageEmbed()
                    .setAuthor({name: `${message.author.username}`, iconURL: message.member.displayAvatarURL({dynamic: true})})
                    .setDescription(`<a:time:1075236156029030420> Podrás regresar a robar en \`${tiempo_restante}\``)
                    .setColor("e60ad4")
                    
                ]})
            }
        let data_usuario = await ecoSchema.findOne({ userID: usuario.id });
        if (!data_usuario){
            let newdata_usuario = new ecoSchema({
              userID: usuario.id,
      
            }) 
            data_usuario = await ecoSchema.findOne({userID: usuario.id});
            await newdata_usuario.save()
        }
        if (data_usuario.dinero < 500) return message.reply("<:coffe:1085588495172632638> No puedes robar a alguien con menos de 500 <:clubcoin:1075230099001069568>.")
        let porcentaje = Math.max(0.1, Math.min(1, data_usuario.dinero / 999999999));
        let cantidad = Math.floor(Math.random() * 999999999 * porcentaje) + 100;
        //comprobaciones previas
        if (cantidad > data_usuario.dinero) return message.reply("Este usuario no tiene suficientes <:clubcoin:1075230099001069568>")
        //le quitamos las monedas al usuario DE SU CARTERA y las introducimos en la nuestra, añadiendo la fecha de cuando se ha ejecutado el comando "rob"
        await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
            $inc: {
                dinero: cantidad
            },
            rob: Date.now()
        })
        //le quitamos las monedas al usuario de SU CARTERA
        await ecoSchema.findOneAndUpdate({ userID: usuario.id }, {
            $inc: {
                dinero: -cantidad
            },
        })
        return message.reply(`Has robado **${cantidad}** <:clubcoin:1075230099001069568> a **${usuario.user.username}**`)
    }
}

