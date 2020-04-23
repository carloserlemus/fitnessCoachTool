const mongoose = require('mongoose');

let clientInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

//export

let clientInfo = module.exports = mongoose.model('clientInfo', clientInfoSchema);