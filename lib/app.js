import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

const app = express();

app.use(express.json());

app.get('/api/v1/numbers/1', (req, res, next) => {
  res.send('you have an endpoint');
});


app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
