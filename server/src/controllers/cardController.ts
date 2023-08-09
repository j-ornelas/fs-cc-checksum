import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';

import { luhn } from '../utils';

const router = Router();
router.use(bodyParser.json());

interface IsValidRequest extends Request {
  body: {
    cardNumber: string;
  };
}
router.post('/is-valid', async (req: IsValidRequest, res: Response) => {
  const { cardNumber } = req.body;
  // Todo only check numbers, currently breaks with text strings
  res.send(luhn(cardNumber));
});

export const CardController = router;
