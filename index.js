const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const app = express();
const port = process.env.PORT || 3000;

// Mongo Connection Status and Errors
mongoose.connect('mongodb+srv://carloslemus:Pencil1986!@cerl-newbx.mongodb.net/test?retryWrites=true&w=majority')
let db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
});

db.once('open', function() {
    console.log('Connected to MongoDB')
});

// Model Import
let clientInfo = require('./models/clientinfo')

// Middleware
app.set('view engine', 'pug')
app.use(express.static('public'))

// Modules
const home = require('./routes/home')
const client_list = require('./routes/client_list.js')
const exercises = require('./routes/exercises.js')
const user_profile = require('./routes/user_profile.js')

app.get('/', home)
app.get('/exercises', exercises)
app.get('/clientlist', client_list)
app.get('/userprofile', user_profile)

app.listen(port, (err)=>{
    if (err){
        console.log('Error connecting to port: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})