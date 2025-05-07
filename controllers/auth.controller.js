import bcryptjs from 'bcrypt';
import { getDB } from '../config/DBconnect.js';

export async function registerEmployee(req, res) {
  const db = getDB();
  const { emp_number, password } = req.body;

  try {
    const [existing] = await db.query('SELECT * FROM employees WHERE emp_number = ?', [emp_number]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Employee already exists' });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    await db.query('INSERT INTO employees (emp_number, password) VALUES (?, ?)', [emp_number, hashedPassword]);
    res.status(201).json({ message: 'Employee registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function loginEmployee(req, res) {
  const db = getDB();
  const { emp_number, password } = req.body;

  try {
    const [users] = await db.query('SELECT * FROM employees WHERE emp_number = ?', [emp_number]);
    if (users.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const user = users[0];
    const match = await bcryptjs.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', redirect: '/index.html' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

