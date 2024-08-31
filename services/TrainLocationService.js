// services/TrainLocationService.js
const TrainLocationRepository = require('../repositories/TrainLocationRepository');
const TrainStationId = require('../domain/value-objects/TrainStationId');

class TrainLocationService {
  static async addLocation(trainId, stationId) {
    // Validate stationId using the TrainStationId value object
    const validatedStationId = new TrainStationId(stationId);

    // Create and save the train location using the repository
    const newLocation = {
      trainId,
      stationId: validatedStationId.stationId,
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