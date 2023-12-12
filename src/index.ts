// index.ts
import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path'; // Import the 'path' module
import courseRouter from './routes/courseRoutes';
import instructorRouter from './routes/instructorRoutes';
import studentRouter from './routes/studentRoutes';
import universityRouter from './routes/universityRoutes';
import enrollmentRouter from './routes/enrollmentRoutes';
import departmentRouter from './routes/departmentRoutes';
import router from './routes/routes';

const app: Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());

// Set the view engine to EJS and the views directory
app.set('view engine', 'ejs');
app.set('views', 'html');

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Express server running');
});

app.use('/', router)

app.use('/api/courses', courseRouter);
app.use('/api/instructors', instructorRouter);
app.use('/api/students', studentRouter);
app.use('/api/university', universityRouter);
app.use('/api/enrollments', enrollmentRouter);
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