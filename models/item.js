const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Schema
const ItemSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: false,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = item = mongoose.model('item', ItemSchema);