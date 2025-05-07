import { getDB } from "../config/DBconnect.js";

// Courses controller
export const getAllCourses = async (req, res) => {
  const db = getDB();
  try {
    const [results] = await db.query('SELECT * FROM courses');
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCourseById = async (req, res) => {
  const db = getDB();
  try {
    const [results] = await db.query('SELECT * FROM courses WHERE id = ?', [req.params.id]);
    if (results.length === 0) return res.status(404).json({ message: 'Course not found' });
    res.json(results[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCourse = async (req, res) => {
  const db = getDB();
  const { name, description } = req.body;
  try {
    const [result] = await db.query('INSERT INTO courses (name, description) VALUES (?, ?)', [name, description]);
    res.json({ id: result.insertId, name, description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCourse = async (req, res) => {
  const db = getDB();
  const { name, description } = req.body;
  try {
    await db.query('UPDATE courses SET name = ?, description = ? WHERE id = ?', [name, description, req.params.id]);
    res.json({ id: req.params.id, name, description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  const db = getDB();
  try {
    await db.query('DELETE FROM courses WHERE id = ?', [req.params.id]);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};