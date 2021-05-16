import express from 'express';
import cors from 'cors';

const app = express();

const [host, port] = ['0.0.0.0', 7001];

const API_PATH = '/api/v1';

app.get(`${API_PATH}/meta`, cors(), (req, res) => {
  res.json({
      author: 'Nilarnab',
      server: 'Node',
      port,
      isDocker: true,  
  });
});

app.get(`${API_PATH}/cats`, cors(), (req, res) => {
  const cats = [
    'Willy',
    'Wonka',
    'Grumpy',
    'Fatso',
    'Dexter',
    'Peepee',
    'Poopoo'
  ];

  res.json(cats);
});

app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`)
});