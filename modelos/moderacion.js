const mongoose = require('mongoose');

const modSchema = new mongoose.Schema({
    guildID: String,
    warns: Number, 
    userwarn: String
      
})

const model = mongoose.model("moderacion", modSchema);

module.exports = model;

