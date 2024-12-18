'use strict';


/**
 * Set Driver Offline
 * Mark the driver as offline and  not ready to accept rides.
 *
 * no response value expected for this operation
 **/
exports.apiV1DriverGo_offlinePOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set Driver Online
 * Mark the driver as online and ready to accept rides.
 *
 * no response value expected for this operation
 **/
exports.apiV1DriverGo_onlinePOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Logout the driver
 * Logs out the driver by invalidating the provided refresh token.
 *
 * body LogoutRequest The refresh token required to log out the driver.
 * no response value expected for this operation
 **/
exports.apiV1DriverLogoutPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Send OTP to Driver
 * Send a one-time password (OTP) to a driver's phone number.
 *
 * body SendOTPRequest 
 * no response value expected for this operation
 **/
exports.apiV1DriverOtpSendPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Driver Shift Status
 * Retrieve the current shift status of the driver.
 *
 * no response value expected for this operation
 **/
exports.apiV1DriverShift_statusGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch trips for a driver
 * Fetch a list of trips associated with a driver.
 *
 * returns Trip
 **/
exports.fetchTrips = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endDate" : "2000-01-23",
  "name" : "name",
  "id" : "id",
  "startDate" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Driver Profile
 * Retrieves the profile information of a driver.
 *
 * no response value expected for this operation
 **/
exports.getdriverprofile = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch trips for a driver by id
 * Fetch a list of trips associated with a driver using id.
 *
 * id String 
 * no response value expected for this operation
 **/
exports.getdrivertrips = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Ping driver location
 * Send a ping to update the driver's current location.
 *
 * authorization String Bearer token for authentication
 * returns DriverLocationPingRequest
 **/
exports.pingDriverLocation = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "payload" : [ {
    "altitude" : 10,
    "rawLocation" : {
      "coordinates" : {
        "latitude" : 123.4196,
        "longitude" : -37.7749
      },
      "type" : "Point"
    },
    "customerId" : "customer456",
    "accuracy" : 5,
    "source" : "mobile",
    "rideId" : "rideId",
    "floor" : 1,
    "speed" : 30.5,
    "speedAccuracy" : 0.5,
    "timestamp" : 1728627526627
  }, {
    "altitude" : 10,
    "rawLocation" : {
      "coordinates" : {
        "latitude" : 123.4196,
        "longitude" : -37.7749
      },
      "type" : "Point"
    },
    "customerId" : "customer456",
    "accuracy" : 5,
    "source" : "mobile",
    "rideId" : "rideId",
    "floor" : 1,
    "speed" : 30.5,
    "speedAccuracy" : 0.5,
    "timestamp" : 1728627526627
  } ],
  "command" : "driverLocation"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Verify OTP
 * Verifies the OTP sent to the driver.
 *
 * body VerifyOTPRequest 
 * no response value expected for this operation
 **/
exports.verifyOtp = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

