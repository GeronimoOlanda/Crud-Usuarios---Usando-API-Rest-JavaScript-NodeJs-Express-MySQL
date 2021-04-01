import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/logginRequired';

const router = new Router();

router.post('/', UserController.store);
router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
