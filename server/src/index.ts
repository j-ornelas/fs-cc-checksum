import express from 'express';

export const app = express();
const port = 3001;

/* ******** CONTROLLERS ******** */
import { RootController } from './controllers/rootController';
import { CardController } from './controllers/cardController';
/* ********** ROUTES *********** */
app.use('/', RootController);
app.use('/card', CardController);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening on port ${port}`);
});
