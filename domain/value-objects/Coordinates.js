// domain/value-objects/Coordinates.js
class Coordinates {
  constructor(latitude, longitude) {
    if (
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      throw new Error("Invalid coordinates");
    }
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

module.exports = Coordinates;
