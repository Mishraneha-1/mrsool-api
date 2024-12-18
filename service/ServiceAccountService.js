'use strict';


/**
 * Blacklist a Service Account
 * Blacklists the specified service account, preventing it from accessing the system.
 *
 * id String Unique identifier for the service account
 * no response value expected for this operation
 **/
exports.apiV1Service_accountBlacklist_accountIdPUT = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Reset Token for a Service Account
 * Resets the token for the specified service account.
 *
 * id String Unique identifier for the service account
 * no response value expected for this operation
 **/
exports.serviceAccountResetPut = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create service account
 * Create a new service account
 *
 * body ServiceAccountRequest 
 * no response value expected for this operation
 **/
exports.serviceCreatePost = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a service account
 * Deletes a service account by its unique identifier.
 *
 * id String The unique identifier of the service account.
 * no response value expected for this operation
 **/
exports.serviceDelete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch service account
 * Fetch list of service account
 *
 * id String Unique identifier of the service account.
 * no response value expected for this operation
 **/
exports.serviceGet = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of service accounts
 * Retrieves a paginated list of service accounts based on query parameters.
 *
 * offset Integer The number of records to skip before starting to return results. (optional)
 * limit Integer The maximum number of records to return. (optional)
 * no response value expected for this operation
 **/
exports.servicePost = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

