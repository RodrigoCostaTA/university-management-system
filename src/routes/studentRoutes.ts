import express from 'express';
import studentController from '../controllers/studentController';
import basicAuthMiddleware from '../middlewares/basicAuthMiddleware';

const router = express.Router();

router.use(basicAuthMiddleware);

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

export default router;