const mongoose = require('mongoose'); //import mongoose

const propertySchema = new mongoose.Schema({
    propertyOwner: {
        type: String,
        required: [true, 'Please add name of the owner']
      },
      dayOfListing: {
        type: Date,
        default: Date.now
      },
      status: {
        type: String,
        required: true,
        enum: [
          'For Sale',
          'For Rent',
          'Sold',
          'Rented'
        ]
      },
      propertyType: {
        type: String,
        enum: [
          'Land',
          'Apartment',
          'House'
        ]
      },
      apartmentType: {
        type: String,
        required: true
      },
      price: {
        type: Number
      },
      location: {
        address: {
          type: String
        },
        city: {
          type: String
        },
        state: {
          type: String
        },
        country: {
          type: String
        },
        PIN: {
          type: Number
        }
      }

});

const propertyModel = mongoose.model('properties',propertySchema);

module.exports = {propertyModel}
