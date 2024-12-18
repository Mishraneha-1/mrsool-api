'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.fetchtripsPost = function fetchtripsPost (req, res, next, offset, limit) {
  Customer.fetchtripsPost(offset, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getcustomerprofile = function getcustomerprofile (req, res, next) {
  Customer.getcustomerprofile()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getcustomertrips = function getcustomertrips (req, res, next, id) {
  Customer.getcustomertrips(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
