const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

// Body - Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Modules
const user_profile = require('./routes/user_profile.js')

app.get('/', (req, res)=>{
    clientInfo.find({ }, (err, clientInfo)=>{
        res.render('home', {
            clientinfo: clientInfo
        })
    })
})

// =============== Exercises ===============
app.get('/exercises', (req, res) => {
    res.render('exercises')
})

app.get('/exercises/add', (req, res)=>{
    res.render('exercises_add')
})

// ==========================================


//============ Client List Pages ============
app.get('/clientlist', (req, res)=>{
    clientInfo.find({}, (err, clientinfo)=>{
        res.render('client_list', {
            clientinfo: clientinfo
        })
    })
})

app.get('/client/add', (req, res)=>{
    res.render('client_add')
})

app.post('/client/add', (req, res)=>{
    let newClientInfo = new clientInfo()
    newClientInfo.name = req.body.name;
    newClientInfo.weightStart = req.body.weightStart;
    newClientInfo.img = req.body.img;

    newClientInfo.save((err)=>{
        if(err){
            console.log(err)
        } else {
            console.log('Saved information to mongo DB.')
            res.redirect('/clientlist')
        }
    })

})

//===========================================

app.get('/userprofile', user_profile)

app.listen(port, (err)=>{
    if (err){
        console.log('Error connecting to port: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})