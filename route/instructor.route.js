import express from 'express'
import { createInstructor, deleteInstructor, getAllInstructors, getInstructorById, updateInstructor } from '../controllers/instructor.controller.js';

const instructorRouter = express.Router();

instructorRouter.get('/',getAllInstructors);
instructorRouter.get('/:id',getInstructorById);
instructorRouter.post('/',createInstructor);
instructorRouter.put('/:id',updateInstructor);
instructorRouter.delete('/:id',deleteInstructor);

export default instructorRouter