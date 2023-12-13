import { Request, Response } from 'express';
import Course from '../entities/Course';
import Instructor from '../entities/Instructor';

class CourseController {
  async getAllCourses(req: Request, res: Response) {
    try {
      const courses = await Course.find().populate('instructor');
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

    const { code, title, credits, instructorId } = req.body;

  
    // Validate instructorId exists
    const instructor = await Instructor.findById(instructorId);
    if (!instructor) {
      return res.status(400).json({ message: 'Instructor not found' });
    }
  
    const newCourse = new Course({
      code,
      title,
      credits,
      instructor: instructor._id, // Set the instructor ObjectId
    });
  
    try {
      const savedCourse = await newCourse.save();
      // Update the instructor's courses array
      instructor.courses.push(savedCourse._id);
      await instructor.save();
  
      res.json(savedCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateCourse(req: Request, res: Response) {
    const courseId = req.params.id;
    const { code, title, credits, instructorId } = req.body;
  
    try {
      // Validate instructorId exists
      const instructor = await Instructor.findById(instructorId);
      if (!instructor) {
        return res.status(400).json({ message: 'Instructor not found' });
      }
  
      // Update the course
      const updatedCourse = await Course.findByIdAndUpdate(
        courseId,
        { code, title, credits, instructor: instructor._id },
        { new: true }
      );
  
      if (updatedCourse) {
        // Update the instructor's courses array
        instructor.courses.push(updatedCourse._id);
        await instructor.save();
  
        res.json(updatedCourse);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error(error);
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