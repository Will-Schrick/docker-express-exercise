const express = require('express');
//const router = express.Router();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from docker!')
  });
  

app.get('/testruta', (req, res) => {
  res.send('how does this get to Docker?!')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })