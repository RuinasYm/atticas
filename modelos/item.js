const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  guildId: {
    type: String, 
    required: true,
  },
  id: {
    type: Number,
    required: true,

  },
  name: { 
    type: String, 
    required: true,
  },
  price: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model('Item', itemSchema);
