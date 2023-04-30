const ecoSchema = require("../../modelos/economia")
const discord = require('discord.js')

module.exports = {
  name: 'balance',
  alias: ['b', 'bal',],
  description: 'Mira tu balance de economia',
  uso: '!balance - !balance (user)',
  permisos: ['SEND_MESSAGES'],
  permisos_bot: ['ADMINISTRATOR'],
  valoracion: '⭐⭐⭐⭐⭐',
  async execute (client, message, args)  {
    const user = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member;
    if (!user) return message.reply("Usuario no encontrado <:coffe:1085588495172632638>")
    if(user.user.bot) return message.reply("<:coffe:1085588495172632638> Los bots no registran perfiles.");
    let userData = await ecoSchema.findOne({userID: user.id});
    if (!userData){
      let newdata = new ecoSchema({
        userID: user.id,

      }) 

      await newdata.save()
      userData = await ecoSchema.findOne({userID: user.id});
    }
    
    message.reply({
        embeds: [new discord.MessageEmbed()
            .setAuthor({name: `Balance de ${user.user.username}`, iconURL: user.displayAvatarURL({dynamic: true})})
            .setDescription(`<:clubcoin:1075230099001069568> **Global**\n**Coins:** ${userData.dinero} \n**Banco:** ${userData.banco}`)
            .setColor("e60ad4")
            .setThumbnail(message.member.displayAvatarURL({dynamic: true}))
        
        ] 

    })

   
    
  }
}