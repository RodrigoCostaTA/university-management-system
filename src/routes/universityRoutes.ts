import express from 'express';
import universityController from '../controllers/universityController';
import basicAuthMiddleware from '../middlewares/basicAuthMiddleware';

const router = express.Router();

router.use(basicAuthMiddleware);

router.get('/', universityController.getAllUniversities);
router.get('/:id', universityController.getUniversityById);
router.post('/', universityController.createUniversity);
router.put('/:id', universityController.updateUniversity);
router.delete('/:id', universityController.deleteUniversity);

export default router;