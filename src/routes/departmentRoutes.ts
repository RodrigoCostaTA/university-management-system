import express from 'express';
import departmentController from '../controllers/departmentController';
import basicAuthMiddleware from '../middlewares/basicAuthMiddleware';

const router = express.Router();

router.use(basicAuthMiddleware);

router.get('/', departmentController.getAllDepartments);
router.get('/:id', departmentController.getDepartmentById);
router.post('/', departmentController.createDepartment);
router.put('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

export default router;