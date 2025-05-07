import { getDB } from "../config/DBconnect.js";

// Instructor controller
export const getAllInstructors = async (req, res) => {
    const db = getDB();
    try {
      const [results] = await db.query('SELECT * FROM instructors');
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const getInstructorById = async (req, res) => {
    const db = getDB();
    try {
      const [results] = await db.query('SELECT * FROM instructors WHERE id = ?', [req.params.id]);
      if (results.length === 0) return res.status(404).json({ message: 'Instructor not found' });
      res.json(results[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const createInstructor = async (req, res) => {
    const db = getDB();
    const { name, email } = req.body;
    try {
      const [result] = await db.query('INSERT INTO instructors (name, email) VALUES (?, ?)', [name, email]);
      res.json({ id: result.insertId, name, email });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const updateInstructor = async (req, res) => {
    const db = getDB();
    const { name, email } = req.body;
    try {
      await db.query('UPDATE instructors SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id]);
      res.json({ id: req.params.id, name, email });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
export const deleteInstructor = async (req, res) => {
    const db = getDB();
    try {
      await db.query('DELETE FROM instructors WHERE id = ?', [req.params.id]);
      res.json({ message: 'Instructor deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};