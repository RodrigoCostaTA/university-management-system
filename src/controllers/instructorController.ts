import { Request, Response } from 'express';
import Instructor from '../entities/Instructor';

class InstructorController {
  async getAllInstructors(req: Request, res: Response) {
    try {
      const instructors = await Instructor.find();
      res.json(instructors);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getInstructorById(req: Request, res: Response) {
    const instructorId = req.params.id;

    try {
      const instructor = await Instructor.findById(instructorId);
      if (instructor) {
        res.json(instructor);
      } else {
        res.status(404).json({ message: 'Instructor not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async createInstructor(req: Request, res: Response) {
    const { name, email, courses, instructorId } = req.body;

    const newInstructor = new Instructor({
      name,
      email,
      courses,
      instructorId,
    });

    try {
      const savedInstructor = await newInstructor.save();
      res.json(savedInstructor);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateInstructor(req: Request, res: Response) {
    const instructorId = req.params.id;
    const { name, email, courses, instructorId: newInstructorId } = req.body;

    try {
      const updatedInstructor = await Instructor.findByIdAndUpdate(
        instructorId,
        { name, email, courses, instructorId: newInstructorId },
        { new: true }
      );

      if (updatedInstructor) {
        res.json(updatedInstructor);
      } else {
        res.status(404).json({ message: 'Instructor not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteInstructor(req: Request, res: Response) {
    const instructorId = req.params.id;

    try {
      const deletedInstructor = await Instructor.findByIdAndDelete(instructorId);

      if (deletedInstructor) {
        res.json(deletedInstructor);
      } else {
        res.status(404).json({ message: 'Instructor not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new InstructorController();