import { getDB } from "../config/DBconnect.js";

export async function getAllStudents(req, res){
    const db = getDB();
    try {
      const [results] = await db.query('SELECT * FROM students');
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export async function getStudentById(req, res){
    const db = getDB();
    try {
      const [result] = await db.query('SELECT * FROM students WHERE id = ?', [req.params.id]);
      if (result.length === 0) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json(result[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export async function createStudent(req, res){
    const { name, email, course_id } = req.body;
    const db = getDB();
    try {
      const [result] = await db.query(
        'INSERT INTO students (name, email, course_id) VALUES (?, ?, ?)',
        [name, email, course_id]
      );
      res.status(201).json({ id: result.insertId, name, email, course_id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export async function updateStudent(req, res){
    const { name, email, course_id } = req.body;
    const db = getDB();
    try {
      await db.query(
        'UPDATE students SET name = ?, email = ?, course_id = ? WHERE id = ?',
        [name, email, course_id, req.params.id]
      );
      res.json({ id: req.params.id, name, email, course_id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export async function deleteStudent(req, res){
    const db = getDB();
    try {
      await db.query('DELETE FROM students WHERE id = ?', [req.params.id]);
      res.json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  