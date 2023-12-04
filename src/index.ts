import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import courseRouter from './routes/courseRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.use('/api/courses', courseRouter);


// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Express server running');
});


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/tsPractice"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();