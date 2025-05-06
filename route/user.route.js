import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/user.controller.js';

const studentRouter = express.Router();

studentRouter.get('/get-students', getAllStudents);
studentRouter.get('/get-students:id', getStudentById);
studentRouter.post('/create-student', createStudent);
studentRouter.put('/update-student:id', updateStudent);
studentRouter.delete('/delete-student:id', deleteStudent);
  
export default studentRouter