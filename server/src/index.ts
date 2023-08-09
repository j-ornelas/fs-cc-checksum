import { server } from './server';
const port = 3001;

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening on port ${port}`);
});
