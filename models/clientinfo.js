const mongoose = require('mongoose');

// Schema 

let Schema = mongoose.Schema;

let clientInfoSchema = new mongoose.Schema({
    name: String,
    weightStart: Number,
    img: String
})

// Model

let clientInfo = mongoose.model('clientinfo', clientInfoSchema)

// Saving Data to MongoDB
// This is an example of creating a new document in Mongo DB

/*
let newClientInfo = new clientInfo({
    name: 'Gorgon',
    weightStart: 300
})

newClientInfo.save((err)=>{
    if (err){
        console.log(err)
    } else {
        console.log('Data saved...')
    }
})
*/

// .save() will save our data to mongodb

module.exports = clientInfo;