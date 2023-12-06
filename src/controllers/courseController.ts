import { Request, Response } from 'express';
import Course from '../entities/Course';

class CourseController {
  async getAllCourses(req: Request, res: Response) {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getCourseById(req: Request, res: Response) {
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
  }

  async createCourse(req: Request, res: Response) {
    const { code, title, credits, instructor } = req.body;

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
  }

  async updateCourse(req: Request, res: Response) {
    const courseId = req.params.id;
    const { code, title, credits, instructor } = req.body;

    try {
      const updatedCourse = await Course.findByIdAndUpdate(
        courseId,
        { code, title, credits, instructor },
        { new: true }
      );

      if (updatedCourse) {
        res.json(updatedCourse);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteCourse(req: Request, res: Response) {
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
  }
}

export default new CourseController();