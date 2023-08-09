import request from 'supertest';

import { server } from '../server';

describe('Card is-valid returns proper boolean response', () => {
  test('returns true for valid card numbers', (done) => {
    request(server)
      .post('/card/is-valid')
      .send({ cardNumber: '371449635398431' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBe(true);
        return done();
      });
  });
  test('returns false for invalid card numbers', (done) => {
    request(server)
      .post('/card/is-valid')
      .send({ cardNumber: '1111111111111' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBe(false);
        return done();
      });
  });
});
