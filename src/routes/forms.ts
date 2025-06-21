import { Router } from 'express';
import { createForm, getForm } from '../controllers/formController';

const router = Router();

router.post('/', createForm);
router.get('/:id', getForm);

export default router;