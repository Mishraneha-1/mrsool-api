'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.apiV1AdminLoginPOST = function apiV1AdminLoginPOST (req, res, next, body) {
  Admin.apiV1AdminLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1AdminTripTripsPOST = function apiV1AdminTripTripsPOST (req, res, next, body, offset, limit) {
  Admin.apiV1AdminTripTripsPOST(body, offset, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fetchTripDetails = function fetchTripDetails (req, res, next, id) {
  Admin.fetchTripDetails(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
