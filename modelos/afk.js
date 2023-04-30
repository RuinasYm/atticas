const { Schema, model } = require('mongoose')

const AFKchema = new Schema({
	UserID: {
        type: String,
        required: true
    },
	Reason: String,
    GuildID: String,

});

module.exports = model('Afk', AFKchema);