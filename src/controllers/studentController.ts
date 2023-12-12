import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Student from '../entities/Student';

class StudentController {
  async getAllStudents(req: Request, res: Response) {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getStudentById(req: Request, res: Response) {
    const studentId = req.params.id;

    try {
      const student = await Student.findById(studentId);
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async createStudent(req: Request, res: Response) {
    const { name, age, studentId } = req.body;
  
    if (!name || !age || !studentId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    const newStudent = new Student({
      name,
      age,
      studentId,
    });
  
    try {
      const savedStudent = await newStudent.save();
      res.json(savedStudent);
    } catch (error: any) {
      console.error(error);
  
      if (error instanceof mongoose.Error.ValidationError) {
        const validationErrors = Object.values(error.errors).map((err: any) => err.message);
        return res.status(400).json({ message: 'Validation Error', errors: validationErrors });
      }
  
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateStudent(req: Request, res: Response) {
    const studentId = req.params.id;
    const { name, age, studentId: newStudentId } = req.body;

    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        { name, age, studentId: newStudentId },
        { new: true }
      );

      if (updatedStudent) {
        res.json(updatedStudent);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteStudent(req: Request, res: Response) {
    const studentId = req.params.id;

    try {
      const deletedStudent = await Student.findByIdAndDelete(studentId);

      if (deletedStudent) {
        res.json(deletedStudent);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new StudentController();