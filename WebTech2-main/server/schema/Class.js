const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    }

});

const Class = mongoose.model('Class', ClassSchema);
module.exports = Class;