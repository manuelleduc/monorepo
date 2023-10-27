const loggingService = require('logging');

const paymentService = {
  makePayment: (amount) => {
    loggingService.info('Payment processing initiated');
    // TODO...
    loggingService.info('Payment processed successfully');
    return `Payment of ${amount} processed successfully`;
  }
}

module.exports = paymentService;