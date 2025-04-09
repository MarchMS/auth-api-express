import SwaggerParser from '@apidevtools/swagger-parser';
import swaggerUi from 'swagger-ui-express';

let swaggerDocument: any;

SwaggerParser.dereference('./swagger.yml')
  .then(api => {
    swaggerDocument = api;
  })
  .catch(console.error);

export { swaggerDocument, swaggerUi };