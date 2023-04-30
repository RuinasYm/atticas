const ecoSchema = require("../../modelos/economia")
const discord = require('discord.js')

module.exports = {
  name: 'deposit',
  alias: ['d', 'dep', 'depositar'],
  description: 'Sirve para depositar tus coins en el banco',
  uso: '!deposit (cantidad) - !deposit (all)',
  permisos: ['SEND_MESSAGES'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  async execute (client, message, args)  {
        //leemos la economia el usuario
        let userData = await ecoSchema.findOne({userID: message.author.id})
        if (!userData){
            let newdata = new ecoSchema({
              userID: message.author.id,
      
            }) 
      
            await newdata.save()
            userData = await ecoSchema.findOne({userID: message.author.id});
          }
        let cantidad = args[0];
        //comprobaciones previas
        if(["todo", "all-in", "all"].includes(args[0])) {
            cantidad = userData.dinero
        } else {
            if(isNaN(cantidad) || cantidad <= 0 || cantidad % 1 != 0) return message.reply("<:coffe:1085588495172632638> ¿Cuantas <:clubcoin:1075230099001069568> estás intentando depositar?");
            if(cantidad > userData.dinero) return message.reply(`<:coffe:1085588495172632638> No puedes depositar más de lo que tienes en tu billetera (**${userData.dinero}** <:clubcoin:1075230099001069568>).`);
        }
       await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
           $inc: {
               dinero: -cantidad,
               banco: cantidad
           }
       });
       return message.reply(`Has depositado **${cantidad}** <:clubcoin:1075230099001069568>`);
    }
}
