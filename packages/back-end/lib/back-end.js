const express = require('express');
const loggingService = require('logging');
const paymentService = require('payment');

const app = express();

app.get('/', (req, res) => {
  loggingService.info('Backend server received a request');

  const paymentResult = paymentService.makePayment(100);
  loggingService.info('Payment result:', paymentResult);

  res.send('Backend Server: Running!');

});

const port = 3000;
const server = app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`)
});

module.exports = server;

