'use strict';

var utils = require('../utils/writer.js');
var Driver = require('../service/DriverService');

module.exports.apiV1DriverGo_offlinePOST = function apiV1DriverGo_offlinePOST (req, res, next) {
  Driver.apiV1DriverGo_offlinePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1DriverGo_onlinePOST = function apiV1DriverGo_onlinePOST (req, res, next) {
  Driver.apiV1DriverGo_onlinePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1DriverLogoutPOST = function apiV1DriverLogoutPOST (req, res, next, body) {
  Driver.apiV1DriverLogoutPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1DriverOtpSendPOST = function apiV1DriverOtpSendPOST (req, res, next, body) {
  Driver.apiV1DriverOtpSendPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1DriverShift_statusGET = function apiV1DriverShift_statusGET (req, res, next) {
  Driver.apiV1DriverShift_statusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fetchTrips = function fetchTrips (req, res, next) {
  Driver.fetchTrips()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getdriverprofile = function getdriverprofile (req, res, next) {
  Driver.getdriverprofile()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getdrivertrips = function getdrivertrips (req, res, next, id) {
  Driver.getdrivertrips(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingDriverLocation = function pingDriverLocation (req, res, next, authorization) {
  Driver.pingDriverLocation(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifyOtp = function verifyOtp (req, res, next, body) {
  Driver.verifyOtp(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
