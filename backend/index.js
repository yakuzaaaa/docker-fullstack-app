const express = require('express');
const app = express();

const [host, port] = ['0.0.0.0', 7000];

app.get('/', (req, res) => {
  res.json({
      author: 'Nilarnab',
      server: 'Node',
      port,
      isDocker: false,  
  });
});

app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`)
});