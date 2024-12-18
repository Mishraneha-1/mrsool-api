'use strict';


/**
 * Fetch fencings
 * Retrieve fencing data with pagination.
 *
 * body Fencing_fencings_body 
 * offset Integer Pagination offset (optional)
 * limit Integer Pagination limit (optional)
 * returns inline_response_200
 **/
exports.apiV1MapFencingFencingsPOST = function(body,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "fencing_details" : {
      "boundary" : {
        "coordinates" : [ [ [ 28.646745, 77.220406 ], [ 28.631986, 77.179992 ], [ 28.61089, 77.213834 ], [ 28.640273, 77.243035 ] ] ],
        "type" : "Polygon"
      },
      "country" : [ {
        "langName" : "English",
        "value" : "India"
      }, {
        "langName" : "English",
        "value" : "India"
      } ],
      "city" : [ {
        "langName" : "English",
        "value" : "South Delhi"
      }, {
        "langName" : "English",
        "value" : "South Delhi"
      } ],
      "postalCode" : "210001",
      "dropoff" : [ {
        "name" : [ {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        }, {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        } ],
        "coordinates" : [ 28.625, 77.245 ],
        "type" : "Point"
      }, {
        "name" : [ {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        }, {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        } ],
        "coordinates" : [ 28.625, 77.245 ],
        "type" : "Point"
      } ],
      "houseNumber" : [ {
        "langName" : "English",
        "value" : "123"
      }, {
        "langName" : "English",
        "value" : "123"
      } ],
      "boundarySubTypeValue" : "Riyadh",
      "pickup" : [ {
        "name" : [ {
          "langName" : "English",
          "value" : "Pickup Point 1"
        }, {
          "langName" : "English",
          "value" : "Pickup Point 1"
        } ],
        "coordinates" : [ 28.615, 77.235 ],
        "type" : "Point"
      }, {
        "name" : [ {
          "langName" : "English",
          "value" : "Pickup Point 1"
        }, {
          "langName" : "English",
          "value" : "Pickup Point 1"
        } ],
        "coordinates" : [ 28.615, 77.235 ],
        "type" : "Point"
      } ],
      "zoomHeight" : 500,
      "boundaryType" : "REGION",
      "street" : [ {
        "langName" : "English",
        "value" : "Main Street"
      }, {
        "langName" : "English",
        "value" : "Main Street"
      } ],
      "district" : [ {
        "langName" : "English",
        "value" : "Central"
      }, {
        "langName" : "English",
        "value" : "Central"
      } ],
      "name" : [ {
        "langName" : "English",
        "value" : "Riyadh"
      }, {
        "langName" : "English",
        "value" : "Riyadh"
      } ],
      "boundarySubType" : "City",
      "state" : [ {
        "langName" : "English",
        "value" : "Uttar Pradesh"
      }, {
        "langName" : "English",
        "value" : "Uttar Pradesh"
      } ]
    }
  }, {
    "fencing_details" : {
      "boundary" : {
        "coordinates" : [ [ [ 28.646745, 77.220406 ], [ 28.631986, 77.179992 ], [ 28.61089, 77.213834 ], [ 28.640273, 77.243035 ] ] ],
        "type" : "Polygon"
      },
      "country" : [ {
        "langName" : "English",
        "value" : "India"
      }, {
        "langName" : "English",
        "value" : "India"
      } ],
      "city" : [ {
        "langName" : "English",
        "value" : "South Delhi"
      }, {
        "langName" : "English",
        "value" : "South Delhi"
      } ],
      "postalCode" : "210001",
      "dropoff" : [ {
        "name" : [ {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        }, {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        } ],
        "coordinates" : [ 28.625, 77.245 ],
        "type" : "Point"
      }, {
        "name" : [ {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        }, {
          "langName" : "English",
          "value" : "Dropoff Point 1"
        } ],
        "coordinates" : [ 28.625, 77.245 ],
        "type" : "Point"
      } ],
      "houseNumber" : [ {
        "langName" : "English",
        "value" : "123"
      }, {
        "langName" : "English",
        "value" : "123"
      } ],
      "boundarySubTypeValue" : "Riyadh",
      "pickup" : [ {
        "name" : [ {
          "langName" : "English",
          "value" : "Pickup Point 1"
        }, {
          "langName" : "English",
          "value" : "Pickup Point 1"
        } ],
        "coordinates" : [ 28.615, 77.235 ],
        "type" : "Point"
      }, {
        "name" : [ {
          "langName" : "English",
          "value" : "Pickup Point 1"
        }, {
          "langName" : "English",
          "value" : "Pickup Point 1"
        } ],
        "coordinates" : [ 28.615, 77.235 ],
        "type" : "Point"
      } ],
      "zoomHeight" : 500,
      "boundaryType" : "REGION",
      "street" : [ {
        "langName" : "English",
        "value" : "Main Street"
      }, {
        "langName" : "English",
        "value" : "Main Street"
      } ],
      "district" : [ {
        "langName" : "English",
        "value" : "Central"
      }, {
        "langName" : "English",
        "value" : "Central"
      } ],
      "name" : [ {
        "langName" : "English",
        "value" : "Riyadh"
      }, {
        "langName" : "English",
        "value" : "Riyadh"
      } ],
      "boundarySubType" : "City",
      "state" : [ {
        "langName" : "English",
        "value" : "Uttar Pradesh"
      }, {
        "langName" : "English",
        "value" : "Uttar Pradesh"
      } ]
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get serviceable categories
 * Retrieve serviceable categories based on pickup and drop-off points.
 *
 * body Fencing_ride_serviceable_categories_body 
 * no response value expected for this operation
 **/
exports.apiV1MapFencingRide_serviceable_categoriesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch Cities
 * Retrieve the list of cities.
 *
 * returns List
 **/
exports.fencingCitiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "langName" : "English",
  "value" : "South Delhi"
}, {
  "langName" : "English",
  "value" : "South Delhi"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Fencing
 * Creates a new fencing area with boundaries and related information.
 *
 * body CreateFencingRequest 
 * no response value expected for this operation
 **/
exports.fencingCreatePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch Fencing
 * Fetch list of fencing
 *
 * latitude BigDecimal 
 * longitude BigDecimal 
 * no response value expected for this operation
 **/
exports.fencingFetchGET = function(latitude,longitude) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fencing by ID
 * Retrieves fencing details by ID.
 *
 * id String 
 * no response value expected for this operation
 **/
exports.fencingIdIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Check if ride is serviceable
 * Verifies if a ride can be serviced between two points.
 *
 * body CheckRideServiceableRequest 
 * no response value expected for this operation
 **/
exports.fencingIs_ride_serviceablePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update fencing information
 * Updates details about the specified fencing area, including boundary coordinates, pickup, and dropoff points.
 *
 * body CreateFencingRequest The updated fencing details to be applied.
 * id String Unique identifier for the fencing record.
 * no response value expected for this operation
 **/
exports.fencingUpdatePUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

