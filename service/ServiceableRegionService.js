'use strict';


/**
 * Fetch serviceable region mappings
 * Retrieve mappings for serviceable regions with optional pagination.
 *
 * body Serviceable_region_mappings_body 
 * offset Integer Offset for pagination. (optional)
 * limit Integer Number of records to retrieve. (optional)
 * returns List
 **/
exports.apiV1MapServiceable_regionMappingsPOST = function(body,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "fencing_details" : [ {
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
  }, {
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
  } ],
  "operational" : true,
  "categories" : [ {
    "id" : 1,
    "name" : "Standard"
  }, {
    "id" : 2,
    "name" : "Premium"
  } ],
  "fencingIds" : [ "07c7483d-3310-494c-aa8b-b9f5df67385b", "07c7483d-3310-494c-aa8b-b9f5df67385b" ]
}, {
  "fencing_details" : [ {
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
  }, {
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
  } ],
  "operational" : true,
  "categories" : [ {
    "id" : 1,
    "name" : "Standard"
  }, {
    "id" : 2,
    "name" : "Premium"
  } ],
  "fencingIds" : [ "07c7483d-3310-494c-aa8b-b9f5df67385b", "07c7483d-3310-494c-aa8b-b9f5df67385b" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Region Mapping
 * Maps fencing regions to serviceable categories.
 *
 * body CreateRegionMappingRequest 
 * no response value expected for this operation
 **/
exports.serviceable_regionCreatePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Serviceable Region
 * Updates a serviceable region's details.
 *
 * body UpdateServiceableRegionRequest 
 * id String 
 * no response value expected for this operation
 **/
exports.serviceable_regionIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Check if two regions are serviceable
 * Verifies serviceability between two fencing regions.
 *
 * body CheckRegionsServiceableRequest 
 * no response value expected for this operation
 **/
exports.serviceable_regionServiceablePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

