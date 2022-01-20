import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions'

const specs = swaggerJSDoc(options)

import taskRoutes from './routes/tasks';

const app = express();

//Cualquier aplicacion de backend pueda conectarse
app.use(cors());
//Visualizar informacion de consultas hechas en la api
app.use(morgan('dev'));
//Expess entiende los formatos json
app.use(express.json());

app.use(taskRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app;