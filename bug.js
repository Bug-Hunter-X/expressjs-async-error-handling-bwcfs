const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query) that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling is missing here
    console.error('Error:', error);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  // Simulates an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Database query failed'));
    }
  });
}