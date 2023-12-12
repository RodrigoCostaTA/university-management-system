import express from 'express';
import instructorController from '../controllers/instructorController';
import basicAuthMiddleware from '../middlewares/basicAuthMiddleware';

const router = express.Router();

router.use(basicAuthMiddleware);

router.get('/', instructorController.getAllInstructors);
router.get('/:id', instructorController.getInstructorById);
router.post('/', instructorController.createInstructor);
router.put('/:id', instructorController.updateInstructor);
router.delete('/:id', instructorController.deleteInstructor);

export default router;