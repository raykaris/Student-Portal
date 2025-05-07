import { getDB } from "../config/DBconnect.js";

// Enrollment controller
export const getAllEnrollments = async (req, res) => {
    const db = getDB();
    try {
      const [results] = await db.query('SELECT * FROM enrollments');
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
export const getEnrollmentById = async (req, res) => {
    const db = getDB();
    try {
      const [results] = await db.query('SELECT * FROM enrollments WHERE id = ?', [req.params.id]);
      if (results.length === 0) return res.status(404).json({ message: 'Enrollment not found' });
      res.json(results[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const createEnrollment = async (req, res) => {
    const db = getDB();
    const { student_id, course_id } = req.body;
    try {
      const [result] = await db.query(
        'INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)',
        [student_id, course_id]
      );
      res.json({ id: result.insertId, student_id, course_id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const updateEnrollment = async (req, res) => {
    const db = getDB();
    const { student_id, course_id } = req.body;
    try {
      await db.query(
        'UPDATE enrollments SET student_id = ?, course_id = ? WHERE id = ?',
        [student_id, course_id, req.params.id]
      );
      res.json({ id: req.params.id, student_id, course_id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const deleteEnrollment = async (req, res) => {
    const db = getDB();
    try {
      await db.query('DELETE FROM enrollments WHERE id = ?', [req.params.id]);
      res.json({ message: 'Enrollment deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};