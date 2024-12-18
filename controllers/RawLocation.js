'use strict';

var utils = require('../utils/writer.js');
var RawLocation = require('../service/RawLocationService');

module.exports.fetchTripLocations = function fetchTripLocations (req, res, next, tripId) {
  RawLocation.fetchTripLocations(tripId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
