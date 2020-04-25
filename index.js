const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const app = express();
const port = process.env.PORT || 3000;

// Mongo Connection Status and Errors
mongoose.connect('mongodb+srv://carloslemus:Pencil1986!@cerl-newbx.mongodb.net/RorAlexander?retryWrites=true&w=majority')
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
const exercises = require('./routes/exercises.js')
const user_profile = require('./routes/user_profile.js')

app.get('/', (req, res)=>{
    clientInfo.find({ }, (err, clientInfo)=>{
        res.render('home', {
            clientinfo: clientInfo
        })
    })
})

// Exercises Page
app.get('/exercises', exercises)

// Client List Page
app.get('/clientlist', (req, res)=>{
    clientInfo.find({ }, (err, clientinfo)=>{
        res.render('client_list', {
            clientinfo: clientinfo
        })
    })
})
app.get('/userprofile', user_profile)

app.listen(port, (err)=>{
    if (err){
        console.log('Error connecting to port: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})