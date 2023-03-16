// import express
const express = require('express');
// application initiate
const app=express();


//import connect function from db.connection.js
const {connect} = require('./src/utils/db.connection.js');


// Server Create
app.listen(8000, () => {
    console.log('Application is running... ');
    connect();
})

