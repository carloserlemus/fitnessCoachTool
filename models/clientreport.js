const mongoose = require('mongoose');

// Schema 

let Schema = mongoose.Schema;

let clientReportSchema = new mongoose.Schema({
    steps: Number,
    hoursSleep: Number,
    workOutYN: Boolean,
    notes: String,
    dateReport: {
        type: Date,
        default: Date.now
    },
    clientId: {
        type: Number,
        default: 1
    }
})

// Model

let clientReport = mongoose.model('clientreport', clientReportSchema)

module.exports = clientReport;