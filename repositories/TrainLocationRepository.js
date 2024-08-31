// repositories/TrainLocationRepository.js
const TrainLocation = require('../models/TrainLocation');

class TrainLocationRepository {
  async save(location) {
    const newLocation = new TrainLocation(location);
    return await newLocation.save();
  }

  async findLatestByTrainId(trainId) {
    return await TrainLocation.findOne({ trainId }).sort({ timestamp: -1 });
  }

  async findHistoryByTrainId(trainId, sinceDate) {
    return await TrainLocation.find({ trainId, timestamp: { $gte: sinceDate } });
  }
}

module.exports = new TrainLocationRepository();