const { Schema, model } = require('mongoose')

const ecoSchema = new Schema({

    userID: {
        type: String,
        required: true,
        unique: true
    },
    dinero: {
        type: Number,
        default: 0
    },
    banco: {
        type: Number,
        default: 0

    },
    work: {
        type: String,

    },
    daily: {
        type: String,

    }
    ,
    beg: {
        type: String,

    },
    rob: {
        type: String,

    },
    crime: {
        type: String,

    }
    ,
    slut: {
        type: String,

    }
    ,
    weekly: {
        type: String,

    },
    inventario: {
        type: [String],
        default: []
      }      


  
});


module.exports = model('economia', ecoSchema)
