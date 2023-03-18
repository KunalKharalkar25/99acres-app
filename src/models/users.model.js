const mongoose = require('mongoose'); //import mongoose

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: [true, 'Please Enter Your First Name!']
    },
    lastName: {
        type:String,
        required: [true, 'Please Enter Your Last Name!']
    },
    email: {
        type:String,
        required: [true, 'Please Enter Your Email ID!']
    },
    phoneNumber: {
        type:Number,
        required: [true, 'Please Enter Your Phone Number!']
    },
    password: {
        type:String,
        required: [true, 'Please Enter Your Password!']
    },
    OwnPropertyType: {
        type: String,
        enum:[
            'Rent',
            'Own',
            'None'
        ],
        default: 'None'
    },
    registeredDate:{
        type: Date,
        default: Date.now
    }

});

const userModel = mongoose.model('users',userSchema);

module.exports = {userModel}
