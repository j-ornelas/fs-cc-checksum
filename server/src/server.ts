import express from 'express';

export const server = express();

/* ******** CONTROLLERS ******** */
import { RootController } from './controllers/rootController';
import { CardController } from './controllers/cardController';
/* ********** ROUTES *********** */
server.use('/', RootController);
server.use('/card', CardController);
