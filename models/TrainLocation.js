// models/TrainLocation.js
const mongoose = require('mongoose');

const trainLocationSchema = new mongoose.Schema({
  trainId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  stationId: { type: String, required: true }
});

module.exports = mongoose.model('TrainLocation', trainLocationSchema);