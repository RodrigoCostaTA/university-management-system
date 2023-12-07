import { Request, Response } from 'express';
import University from '../entities/University';

class UniversityController {
  async getAllUniversities(req: Request, res: Response) {
    try {
      const universities = await University.find();
      res.json(universities);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getUniversityById(req: Request, res: Response) {
    const universityId = req.params.id;

    try {
      const university = await University.findById(universityId);
      if (university) {
        res.json(university);
      } else {
        res.status(404).json({ message: 'University not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async createUniversity(req: Request, res: Response) {
    const { name, location, coursesOffered } = req.body;

    const newUniversity = new University({
      name,
      location,
      coursesOffered
    });

    try {
      const savedUniversity = await newUniversity.save();
      res.json(savedUniversity);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateUniversity(req: Request, res: Response) {
    const universityId = req.params.id;
    const { name, location, coursesOffered } = req.body;

    try {
      const updatedUniversity = await University.findByIdAndUpdate(
        universityId,
        { name, location, coursesOffered },
        { new: true }
      );

      if (updatedUniversity) {
        res.json(updatedUniversity);
      } else {
        res.status(404).json({ message: 'University not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteUniversity(req: Request, res: Response) {
    const universityId = req.params.id;

    try {
      const deletedUniversity = await University.findByIdAndDelete(universityId);

      if (deletedUniversity) {
        res.json(deletedUniversity);
      } else {
        res.status(404).json({ message: 'University not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new UniversityController();