// services/TrainLocationService.js
const TrainLocationRepository = require('../repositories/TrainLocationRepository');
const Coordinates = require('../domain/value-objects/Coordinates');

class TrainLocationService {
  static async addLocation(trainId, { latitude, longitude }) {
    // Encapsulate the coordinates logic in the Coordinates value object
    const coordinates = new Coordinates(latitude, longitude);

    // Create and save the train location using the repository
    const newLocation = {
      trainId,
      coordinates,
      timestamp: new Date(),
    };
    return await TrainLocationRepository.save(newLocation);
  }

  static async getLatestLocation(trainId) {
    return await TrainLocationRepository.findLatestByTrainId(trainId);
  }

  static async getLocationHistory(trainId) {
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
    return await TrainLocationRepository.findHistoryByTrainId(trainId, ninetyDaysAgo);
  }
}

module.exports = TrainLocationService;