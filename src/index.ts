import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import courseRouter from './routes/courseRoutes';
import instructorRouter from './routes/instructorRoutes';
import studentRouter from './routes/studentRoutes';
import universityRouter from './routes/universityRoutes';
import departmentRouter from './routes/departmentRoutes';

const app: Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Express server running');
});

app.use('/api/courses', courseRouter);
app.use('/api/instructors', instructorRouter);
app.use('/api/students', studentRouter);
app.use('/api/university', universityRouter);
app.use('/api/departments', departmentRouter);

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/tsPractice");
    console.log('Connected to MongoDB');

    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error: any) {
    console.error('Error starting the server:', error);

    // specific MongoDB connection error
    if (error.name === 'MongoError') {
      console.error('MongoDB Connection Error:', error.message);
    }

    process.exit(1);
  }
};


start();