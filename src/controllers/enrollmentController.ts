import { Request, Response } from 'express';
import Enrollment from '../entities/Enrollment';
import Course from '../entities/Course';

class EnrollmentController {
  async getAllEnrollments(req: Request, res: Response) {
    try {
      const enrollments = await Enrollment.find();
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getEnrollmentById(req: Request, res: Response) {
    const enrollmentId = req.params.id;

    try {
      const enrollment = await Enrollment.findById(enrollmentId);
      if (enrollment) {
        res.json(enrollment);
      } else {
        res.status(404).json({ message: 'Enrollment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async createEnrollment(req: Request, res: Response) {
    const { studentId, courseId } = req.body;
  
    // Ensure both studentId and courseId are provided
    if (!studentId || !courseId) {
      return res.status(400).json({ message: 'Both studentId and courseId are required' });
    }
  
    const newEnrollment = new Enrollment({
      student: studentId,
      course: courseId,
    });
  
    try {
      const savedEnrollment = await newEnrollment.save();

      // Update the Course model's students array
      const course = await Course.findByIdAndUpdate(
        courseId,
        { $push: { students: studentId } },
        { new: true }
      );
      
      res.json(savedEnrollment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateEnrollment(req: Request, res: Response) {
    const enrollmentId = req.params.id;
    const { studentId, courseId } = req.body;

    try {
      const updatedEnrollment = await Enrollment.findByIdAndUpdate(
        enrollmentId,
        { student: studentId, course: courseId },
        { new: true }
      );

      if (updatedEnrollment) {
        res.json(updatedEnrollment);
      } else {
        res.status(404).json({ message: 'Enrollment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteEnrollment(req: Request, res: Response) {
    const enrollmentId = req.params.id;

    try {
      const deletedEnrollment = await Enrollment.findByIdAndDelete(enrollmentId);

      if (deletedEnrollment) {
        res.json(deletedEnrollment);
      } else {
        res.status(404).json({ message: 'Enrollment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new EnrollmentController();