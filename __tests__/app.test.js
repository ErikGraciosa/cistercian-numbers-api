import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  // beforeEach(() => {
  //   return setup(pool);
  // });

  it('returns anything', async() => {
    const res = await request(app)
      .get('/api/v1/numbers/1');
    
    console.log('stuuuuuuuuuuuuuuuuf', res.text);
    expect(res.text).toEqual('you have an endpoint');
    
  });
});

