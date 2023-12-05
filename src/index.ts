import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import courseRouter from './routes/courseRoutes';

const app: Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Express server running');
});

app.use('/api/courses', courseRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/tsPractice"
    );
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();