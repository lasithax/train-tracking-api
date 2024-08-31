// models/TrainLocation.js
const mongoose = require('mongoose');

const trainLocationSchema = new mongoose.Schema({
  trainId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  }
});

module.exports = mongoose.model('TrainLocation', trainLocationSchema);