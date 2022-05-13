const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    organizer: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },


    date: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    info: {
        type: String,
        required: false,
        trim: true
    }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event }
