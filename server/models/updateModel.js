const mongoose = require('mongoose')
const Schema = mongoose.Schema

const updateSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    updateName: {
        type: String,
        required: true
    },
    updateDescription:{
        type: String,
        required: true
    },
    updateDate:{
        type: String,
        required: true
    }
})

const Updates = mongoose.model('updates', updateSchema);
module.exports = Updates;