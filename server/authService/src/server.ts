import express from 'express';
import { json } from 'body-parser';
import authRouter from './authRouter'

const app = express();
app.use(json())
const port = 5001;

app.use('/api/user', authRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});