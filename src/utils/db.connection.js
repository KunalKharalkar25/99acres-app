const mongoose = require('mongoose'); //import mongoose


const connect = () => { //connecting database
    console.log('Initializing Database Connection');
    mongoose.connect('mongodb+srv://kunalkharalkar:Panda1999@99acres-app.e4fj81n.mongodb.net/99acres-app')
    .then(()=>{
        console.log('Database connected successfully.');
    })
    .catch((err)=>{
        console.log('Got some error while connecting to Database.', err);
    })
}

module.exports = { connect } //exporting connect function