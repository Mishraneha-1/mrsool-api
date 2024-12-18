'use strict';

var utils = require('../utils/writer.js');
var ServiceableRegion = require('../service/ServiceableRegionService');

module.exports.apiV1MapServiceable_regionMappingsPOST = function apiV1MapServiceable_regionMappingsPOST (req, res, next, body, offset, limit) {
  ServiceableRegion.apiV1MapServiceable_regionMappingsPOST(body, offset, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceable_regionCreatePOST = function serviceable_regionCreatePOST (req, res, next, body) {
  ServiceableRegion.serviceable_regionCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceable_regionIdPUT = function serviceable_regionIdPUT (req, res, next, body, id) {
  ServiceableRegion.serviceable_regionIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceable_regionServiceablePOST = function serviceable_regionServiceablePOST (req, res, next, body) {
  ServiceableRegion.serviceable_regionServiceablePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
