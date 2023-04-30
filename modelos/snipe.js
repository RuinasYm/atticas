const { Schema, model } = require("mongoose")

const snipe = new Schema({
  channelId: {
    type: String,

  },

  message: {
    type: String,

  },

  author: {
    type: String,

  },

  time: {
    type: Number,

  }
})

module.exports = model('Snipe', snipe);