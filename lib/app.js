import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import { cistercianDecoder } from '../utils/cistercianDecoder.js';

const app = express();

app.use(express.json());

app.get('/api/v1/numbers/:number', (req, res, next) => {
  const decodedNumber = cistercianDecoder(req.params.number);
  res.send(decodedNumber);
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
