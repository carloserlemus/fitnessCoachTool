const express = require('express');
const pug = require('pug');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'pug')
app.use(express.static('public'))

// Modules
const home = require('./routes/home')
const client_list = require('./routes/client_list.js')
const exercises = require('./routes/exercises.js')

app.get('/', home)
app.get('/exercises', exercises)
app.get('/clientlist', client_list)

app.listen(port, (err)=>{
    if (err){
        console.log('Error connecting to port: ', port)
    } else {
        console.log('Connected to port: ', port)
    }
})