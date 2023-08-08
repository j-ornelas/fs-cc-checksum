import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/info', (req, res) => {
  res.json({ info: 'info' });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening on port ${port}`);
});
