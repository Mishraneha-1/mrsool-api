'use strict';

var utils = require('../utils/writer.js');
var Fencing = require('../service/FencingService');

module.exports.apiV1MapFencingFencingsPOST = function apiV1MapFencingFencingsPOST (req, res, next, body, offset, limit) {
  Fencing.apiV1MapFencingFencingsPOST(body, offset, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1MapFencingRide_serviceable_categoriesPOST = function apiV1MapFencingRide_serviceable_categoriesPOST (req, res, next, body) {
  Fencing.apiV1MapFencingRide_serviceable_categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fencingCitiesGET = function fencingCitiesGET (req, res, next) {
  Fencing.fencingCitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fencingCreatePOST = function fencingCreatePOST (req, res, next, body) {
  Fencing.fencingCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fencingFetchGET = function fencingFetchGET (req, res, next, latitude, longitude) {
  Fencing.fencingFetchGET(latitude, longitude)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fencingIdIdGET = function fencingIdIdGET (req, res, next, id) {
  Fencing.fencingIdIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fencingIs_ride_serviceablePOST = function fencingIs_ride_serviceablePOST (req, res, next, body) {
  Fencing.fencingIs_ride_serviceablePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fencingUpdatePUT = function fencingUpdatePUT (req, res, next, body, id) {
  Fencing.fencingUpdatePUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
