import express from 'express';
import usersRoutes from './src/modules/users/users.routes';
import SwaggerParser from '@apidevtools/swagger-parser';
import swaggerUi from 'swagger-ui-express';

let swaggerDocument: any;

const app = express();
const initializeSwagger = async () => {
  try {
    swaggerDocument = await SwaggerParser.dereference('./swagger.yml');
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  } catch (error) {
    console.error('Error loading Swagger API:', error);
  }
};

initializeSwagger();

app.use(express.json());
app.use('/users', usersRoutes);

export default app;