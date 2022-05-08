const request = require('supertest');

const createApp = require('../src/app');

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('Shold return list books', () => request(app)
      .get('/api/v1/books')
      .expect(200)
      .then((body) => {
        console.log(body);
        expect(body.length).toEqual(1);
      }));
  });
});
