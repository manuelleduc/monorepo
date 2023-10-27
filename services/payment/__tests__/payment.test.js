const chai = require('chai');
const paymentService = require('../lib/payment');

const expect = chai.expect;

describe('Payment Service', () => {
  it('Should make a payment successfully', () => {
    const paymentResult = paymentService.makePayment(100);
    expect(paymentResult).to.equal('Payment of 100 processed successfully');
  })
})