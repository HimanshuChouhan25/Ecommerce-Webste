// swagger/swagger.js
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const fs = require('fs');

// Load YAML files
const userDocs = YAML.load(path.join(__dirname, './user.swagger.yaml'));
const cartDocs = YAML.load(path.join(__dirname, './cart.swagger.yaml'));

// Merge YAML files
const mergedSwagger = {
  ...userDocs,
  paths: {
    ...userDocs.paths,
    ...cartDocs.paths,
  },
  components: {
    ...(userDocs.components || {}),
    ...(cartDocs.components || {}),
  },
};

const setupSwaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(mergedSwagger));
};

module.exports = setupSwaggerDocs;
