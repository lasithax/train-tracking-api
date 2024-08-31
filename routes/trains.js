// routes/trains.js
const express = require('express');
const router = express.Router();
const TrainLocationService = require('../services/TrainLocationService');

// POST /api/trains/location - Add a new train location
router.post('/location', async (req, res) => {
  try {
    const { trainId, latitude, longitude } = req.body;
    const location = await TrainLocationService.addLocation(trainId, { latitude, longitude });
    res.status(201).json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/trains/location/:trainId - Get the latest location of a train
router.get('/location/:trainId', async (req, res) => {
  try {
    const { trainId } = req.params;
    const latestLocation = await TrainLocationService.getLatestLocation(trainId);
    if (!latestLocation) return res.status(404).json({ message: 'Location not found' });
    res.json(latestLocation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/trains/location/:trainId/history - Get location history for the last 90 days
router.get('/location/:trainId/history', async (req, res) => {
  try {
    const { trainId } = req.params;
    const history = await TrainLocationService.getLocationHistory(trainId);
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;