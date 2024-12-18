'use strict';

var utils = require('../utils/writer.js');
var ServiceAccount = require('../service/ServiceAccountService');

module.exports.apiV1Service_accountBlacklist_accountIdPUT = function apiV1Service_accountBlacklist_accountIdPUT (req, res, next, id) {
  ServiceAccount.apiV1Service_accountBlacklist_accountIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceAccountResetPut = function serviceAccountResetPut (req, res, next, id) {
  ServiceAccount.serviceAccountResetPut(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceCreatePost = function serviceCreatePost (req, res, next, body) {
  ServiceAccount.serviceCreatePost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceDelete = function serviceDelete (req, res, next, id) {
  ServiceAccount.serviceDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceGet = function serviceGet (req, res, next, id) {
  ServiceAccount.serviceGet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicePost = function servicePost (req, res, next, offset, limit) {
  ServiceAccount.servicePost(offset, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
