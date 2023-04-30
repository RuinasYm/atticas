const { Schema, model } = require('mongoose')

const gestoSchema = new Schema({

    userID: {
        type: String,
        required: true,
        unique: true
    },
    bonk: {
        type: Number,
    },
});


module.exports = model('gestos', gestoSchema)
