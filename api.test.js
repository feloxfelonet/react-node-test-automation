
const request = require('supertest');
const baseURL = 'http://localhost:3001';

describe('API Tests', () => {
  it('GET /items should return an array', async () => {
    const res = await request(baseURL).get('/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
