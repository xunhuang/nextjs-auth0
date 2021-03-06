import express from 'express';
import next from 'next';

const port = process.env.PORT || 3000;
const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  })
}).catch(err => {
  console.log('Error:::::', err);
});