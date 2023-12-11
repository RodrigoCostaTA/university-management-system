import { Request, Response } from 'express';
import Department from '../entities/Department';

class DepartmentController {
  async getAllDepartments(req: Request, res: Response) {
    try {
      const departments = await Department.find();
      res.json(departments);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getDepartmentById(req: Request, res: Response) {
    const departmentId = req.params.id;

    try {
      const department = await Department.findById(departmentId);
      if (department) {
        res.json(department);
      } else {
        res.status(404).json({ message: 'Department not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async createDepartment(req: Request, res: Response) {
    const { name, description } = req.body;

    const newDepartment = new Department({
      name,
      description,
    });

    try {
      const savedDepartment = await newDepartment.save();
      res.json(savedDepartment);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateDepartment(req: Request, res: Response) {
    const departmentId = req.params.id;
    const { name, description } = req.body;

    try {
      const updatedDepartment = await Department.findByIdAndUpdate(
        departmentId,
        { name, description },
        { new: true }
      );

      if (updatedDepartment) {
        res.json(updatedDepartment);
      } else {
        res.status(404).json({ message: 'Department not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteDepartment(req: Request, res: Response) {
    const departmentId = req.params.id;

    try {
      const deletedDepartment = await Department.findByIdAndDelete(departmentId);

      if (deletedDepartment) {
        res.json(deletedDepartment);
      } else {
        res.status(404).json({ message: 'Department not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new DepartmentController();