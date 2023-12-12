import express from 'express';
import enrollmentController from '../controllers/enrollmentController';
import basicAuthMiddleware from '../middlewares/basicAuthMiddleware';

const router = express.Router();

router.use(basicAuthMiddleware);

router.get('/', enrollmentController.getAllEnrollments);
router.get('/:id', enrollmentController.getEnrollmentById);
router.post('/', enrollmentController.createEnrollment);
router.put('/:id', enrollmentController.updateEnrollment);
router.delete('/:id', enrollmentController.deleteEnrollment);

export default router;