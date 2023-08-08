import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';

import { luhn } from '../utils';

const router = Router();
router.use(bodyParser.json());

router.post('/is-valid', async (req: Request, res: Response) => {
  const { cardNumber } = req.body; // todo make explicit type
  // Todo only check numbers, currently breaks with text strings
  res.send(luhn(cardNumber));
});

export const CardController = router;
