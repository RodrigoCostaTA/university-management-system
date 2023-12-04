import express, { Router, Request, Response } from 'express';
import Course from '../entities/Course';

const router: Router = express.Router();

// Get all courses
router.get('/', async (req: Request, res: Response) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Get a specific course by ID
router.get('/:id', async (req: Request, res: Response) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new course
router.post('/', async (req: Request, res: Response) => {
  const { code, title, credits, instructor} = req.body;

  const newCourse = new Course({
    code,
    title,
    credits,
    instructor,
  });

  try {
    const savedCourse = await newCourse.save();
    res.json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update a course by ID
router.put('/:id', async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const {code, title, credits, instructor} = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, {
      code,
      title,
      credits,
      instructor,
    }, { new: true });

    if (updatedCourse) {
      res.json(updatedCourse);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a course by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const courseId = req.params.id;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (deletedCourse) {
      res.json(deletedCourse);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
