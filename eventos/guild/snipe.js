const discord = require('discord.js')
const snipe = require("../../modelos/snipe")

module.exports = {
    name: 'messageDelete',
    async run(client, message) {
    
    let data = await snipe.findOne({ channelId: message.channel.id })

    if(!data){

      let newdata = new snipe({
        channelId: message.channel.id,
        message: message.content,
        author: message.author.tag,
        time: Math.floor(Date.now() / 1000)
      })

      return await newdata.save()

    }

    await snipe.findOneAndUpdate({
      channelId: message.channel.id,
      message: message.content,
      author: message.author.tag,
      time: Math.floor(Date.now() / 1000)
    })
    
  }
}