import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  // development/demo util to verify the server is ruhning
  res.send('Server is live');
});

export const RootController = router;
