const mongoose = require('mongoose'); //import mongoose

const dbConfig = require('../configs/db.config.js'); //import dbConfig


const connect = () => { //connecting database
    console.log('Initializing Database Connection');
    mongoose.connect(dbConfig.prod)
    .then(()=>{
        console.log('Database connected successfully.');
    })
    .catch((err)=>{
        console.log('Got some error while connecting to Database.', err);
    })
}

module.exports = { connect } //exporting connect function