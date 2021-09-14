const express = require('express');
const cors = require('cors');
const router = require('./route');
const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
