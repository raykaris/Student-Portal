import express from 'express'
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from '../controllers/course.controller.js';


const courseRouter = express.Router();

courseRouter.get('/',getAllCourses);
courseRouter.get('/:id',getCourseById);
courseRouter.post('/',createCourse);
courseRouter.put('/:id',updateCourse);
courseRouter.delete('/:id',deleteCourse);

export default courseRouter