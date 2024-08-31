// domain/entities/TrainStation.js
class TrainStation {
    constructor(stationId, name) {
      if (!stationId || !name) {
        throw new Error("Invalid train station");
      }
      this.stationId = stationId;
      this.name = name;
    }
  
    static getStations() {
      // TODO: fetch this from the database
      return [
        new TrainStation('COL', 'Colombo Fort'),
        new TrainStation('KDU', 'Kandy'),
        new TrainStation('GAL', 'Galle'),
        new TrainStation('BAD', 'Badulla'),
      ];
    }
  
    static findById(stationId) {
      return this.getStations().find(station => station.stationId === stationId);
    }
  }
  
  module.exports = TrainStation;
  