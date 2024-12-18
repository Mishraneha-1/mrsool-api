'use strict';


/**
 * Admin Login
 * Allows an admin to log in to the system.
 *
 * body LoginRequest 
 * no response value expected for this operation
 **/
exports.apiV1AdminLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch trips
 * Fetches a list of trips based on the provided search criteria, with pagination support.
 *
 * body FetchTripsRequest 
 * offset Integer The number of items to skip before starting to collect the result set.
 * limit Integer The number of items to return.
 * no response value expected for this operation
 **/
exports.apiV1AdminTripTripsPOST = function(body,offset,limit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch trip details
 * Retrieve details of a specific trip using its unique identifier.
 *
 * id String The unique identifier of the trip
 * no response value expected for this operation
 **/
exports.fetchTripDetails = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

