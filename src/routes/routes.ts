import express, { Request, Response } from 'express';
import Student from '../entities/Student';
import Course from '../entities/Course';

const router = express.Router();

router.get('/courses', (req, res) => {
    res.render('courses');
});

router.get('/new-enrollment', async (req: Request, res: Response) => {
    try {
        const students = await Student.find({}, 'name');
        const courses = await Course.find({}, 'title');

        // Render the HTML template with the list of students and courses
        res.render('new-enrollment', { students, courses });
    } catch (error) {
        console.error('Error fetching students and courses:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;