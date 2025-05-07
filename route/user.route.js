import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/user.controller.js';
import auth from '../middleware/auth.js';

const studentRouter = express.Router();

studentRouter.get('/',auth,getAllStudents);
studentRouter.get('/:id',getStudentById);
studentRouter.post('/',createStudent);
studentRouter.put('/:id',updateStudent);
studentRouter.delete('/:id',auth,deleteStudent);
  
export default studentRouter