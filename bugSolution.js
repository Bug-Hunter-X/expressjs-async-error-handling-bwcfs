const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Database query failed'));
    }
  });
}