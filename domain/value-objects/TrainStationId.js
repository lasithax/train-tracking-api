// domain/value-objects/TrainStationId.js
const TrainStation = require('../entities/TrainStation');

class TrainStationId {
  constructor(stationId) {
    const station = TrainStation.findById(stationId);
    if (!station) {
      throw new Error("Invalid train station ID");
    }
    this.stationId = stationId;
  }
}

module.exports = TrainStationId;