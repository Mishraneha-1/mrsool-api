// 'use strict';

// const path = require('path');
// const http = require('http');
// const express = require('express');
// const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const fs = require('fs');
// const yaml = require('js-yaml');

// // Server Port
// const serverPort = 8080;

// // Load the OpenAPI specification using js-yaml
// let swaggerDocument;
// try {
//   swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname, './api/openapi.yaml'), 'utf8'));
// } catch (e) {
//   console.error('Error loading OpenAPI specification:', e);
//   process.exit(1); // Exit the server if there's an error loading the YAML
// }

// // Create an Express app instance
// const app = express();

// // Replace body-parser functionality
// app.use(express.json()); // Parses application/json
// app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

// // Enable CORS with custom configuration
// const allowedOrigins = [
//   'http://localhost:8080', // Swagger UI
//   'https://location-service-810707138380.asia-south1.run.app', // Your app's origin
//   'https://driver-service-810707138380.asia-south1.run.app'
// ];

// app.use(cors({
//   origin: (origin, callback) => {
//     // Allow requests with no origin (like mobile apps or curl)
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'x-api-key'], // Include custom headers here
//   credentials: true, // Allow credentials (cookies, etc.)
//   optionsSuccessStatus: 204,
// }));

// // Handle preflight requests explicitly
// app.options('*', (req, res) => {
//   const requestOrigin = req.headers.origin;
//   if (allowedOrigins.includes(requestOrigin)) {
//     res.setHeader('Access-Control-Allow-Origin', requestOrigin); // Echo the request origin
//   }
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-api-key',); // Add custom headers here
//   res.setHeader('Access-Control-Allow-Credentials', 'true'); // Support cookies/auth
//   res.status(204).send();
// });

// // Middleware to log requests
// app.use((req, res, next) => {
//   console.log(`Request Method: ${req.method}`);
//   console.log(`Request URL: ${req.url}`);
//   console.log('Request Headers:', req.headers);
//   console.log('Request Body:', req.body); // Be cautious logging sensitive data

//   // Proceed to the next middleware or route handler
//   next();
// });

// // Optional: Middleware to log response details
// app.use((req, res, next) => {
//   const originalSend = res.send;
//   res.send = function (data) {
//     console.log('Response Status:', res.statusCode);
//     console.log('Response Body:', data);
//     originalSend.apply(res, arguments);
//   };

//   next();
// });

// // Serve Swagger UI with your OpenAPI spec
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.get('/docs', (req, res) => {
//   res.sendFile(path.join(__dirname, 'node_modules/swagger-ui-dist/index.html'));
// });

// // Serve OpenAPI Specification directly (optional)
// app.get('/api-docs', (req, res) => {
//   res.sendFile(path.join(__dirname, './api/openapi.yaml'));
// });

// // Start the HTTP Server
// http.createServer(app).listen(serverPort, () => {
//   console.log(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`);
//   console.log(`Swagger UI is available on http://localhost:${serverPort}/docs`);
// });

// 'use strict';

// const path = require('path');
// const http = require('http');
// const express = require('express');
// const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const fs = require('fs');
// const yaml = require('js-yaml');

// // Server Port
// const serverPort = 8080;

// // Determine the API type (location or driver)
// const apiType = process.env.API_TYPE || 'location'; // Default to 'location'
// console.log('api type')
// // Load the appropriate OpenAPI specification
// let swaggerDocument;
// try {
//   const fileName = apiType === 'driver' ? './api/openapi-driver.yaml' : './api/openapi-location.yaml';

//   swaggerDocument = yaml.load(fs.readFileSync(path.join(__dirname, fileName), 'utf8'));
//   console.log(`Loaded OpenAPI spec for: ${apiType} API`);
// } catch (e) {
//   console.error('Error loading OpenAPI specification:', e.message);
//   process.exit(1); // Exit the server if there's an error loading the YAML
// }

// // Create an Express app instance
// const app = express();

// // Replace body-parser functionality
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Enable CORS with custom configuration
// app.use(cors({
//   origin: (origin, callback) => {
//     // Allow requests from all origins (modify as needed)
//     callback(null, true);
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'x-api-key', 'Authorization'],
// }));

// // Serve Swagger UI
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/location', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/driver', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// // Serve OpenAPI YAML directly (optional)
// app.get('/api-docs', (req, res) => {
//   console.log('Req',)
//   const apiType = req.query.apiType || 'location'; // Default to 'location'
//   const specFile = apiType === 'driver' ? 'openapi-driver.yaml' : 'openapi-location.yaml';
//   res.sendFile(path.join(__dirname, './api', specFile));
// });

// // Start the server
// http.createServer(app).listen(serverPort, () => {
//   console.log(`Server running on http://localhost:${serverPort}`);
//   console.log(`Swagger UI available at http://localhost:${serverPort}/docs`);
//   console.log(`Serving OpenAPI spec for: ${apiType} API`);
// });

'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

// Server Port
const serverPort = 8080;

// Load the OpenAPI specifications dynamically
const swaggerDocuments = {
  driver: yaml.load(fs.readFileSync(path.join(__dirname, './api/openapi-driver.yaml'), 'utf8')),
  location: yaml.load(fs.readFileSync(path.join(__dirname, './api/openapi-location.yaml'), 'utf8')),
  customer: yaml.load(fs.readFileSync(path.join(__dirname, './api/openapi-customer.yaml'), 'utf8')),
  admin: yaml.load(fs.readFileSync(path.join(__dirname,'./api/openapi-admin.yaml'),'utf8')),
};

// Create an Express app instance
const app = express();

// Replace body-parser functionality
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable CORS with custom configuration
const allowedOrigins = [
  'http://localhost:8080', // Swagger UI
  'https://location-service-810707138380.asia-south1.run.app', // Your app's origin
  'https://driver-service-810707138380.asia-south1.run.app'
];

app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'x-api-key'], // Include custom headers here
    credentials: true, // Allow credentials (cookies, etc.)
    optionsSuccessStatus: 204,
  }));

// Serve OpenAPI spec for 'location' API
app.use('/docs/location', swaggerUi.serve, (req, res, next) => {
  const spec = swaggerDocuments.location;
  if (spec) {
    return swaggerUi.setup(spec)(req, res, next);
  } else {
    res.status(404).send('Location API spec not found');
  }
});

// Serve OpenAPI spec for 'Customer' API
app.use('/docs/customer', swaggerUi.serve, (req, res, next) => {
  const spec = swaggerDocuments.customer;
  if (spec) {
    return swaggerUi.setup(spec)(req, res, next);
  } else {
    res.status(404).send('Customer API spec not found');
  }
});


// Serve OpenAPI spec for 'driver' API
app.use('/docs/driver', swaggerUi.serve, (req, res, next) => {
  const spec = swaggerDocuments.driver;
  if (spec) {
    return swaggerUi.setup(spec)(req, res, next);
  } else {
    res.status(404).send('Driver API spec not found');
  }
});
//Serve OpenAPI spec for  'admin' API
app.use('/docs/admin', swaggerUi.serve, (req, res, next) => {
  const spec = swaggerDocuments.admin;
  if (spec) {
    return swaggerUi.setup(spec)(req, res, next);
  } else {
    res.status(404).send('Admin API spec not found');
  }
});
// Start the server
http.createServer(app).listen(serverPort, () => {
  console.log(`Server running on http://localhost:${serverPort}/docs`);
  console.log(`Swagger UI for Location API available at http://localhost:${serverPort}/docs/location`);
  console.log(`Swagger UI for Driver API available at http://localhost:${serverPort}/docs/driver`);
  console.log(`Swagger UI for Customer API available at http://localhost:${serverPort}/docs/customer`);
  console.log(`Swagger UI for Admin API available at http://localhost:${serverPort}/docs/admin`);
});
