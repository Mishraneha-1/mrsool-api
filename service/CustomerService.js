'use strict';


/**
 * Fetch trips
 * Fetches a list of trips based on the provided search criteria, with pagination support.
 *
 * offset Integer The number of items to skip before starting to collect the result set.
 * limit Integer The number of items to return.
 * no response value expected for this operation
 **/
exports.fetchtripsPost = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Customer Profile
 * Retrieves the profile information of a customer.
 *
 * no response value expected for this operation
 **/
exports.getcustomerprofile = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch trips for a customer by id
 * Fetch a list of trips associated with a customer using id.
 *
 * id String 
 * no response value expected for this operation
 **/
exports.getcustomertrips = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

