const { Schema, model } = require('mongoose')

const NivelesSchema = new Schema({

    niveles: {
        type: Object, 
        default: {canal: "", mensaje: ""}
    },
});

module.exports = model('Niveles', NivelesSchema);
