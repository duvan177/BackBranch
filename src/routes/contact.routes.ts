import { Router } from 'express';
import { getContacts, createContact } from '../controllers/contact.controller';
const router = Router();

router.route('/')
    .get(getContacts)
    .post(createContact)

export default router