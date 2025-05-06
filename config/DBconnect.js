import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config()

let db;

export async function connectDB() {
  try {
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: 'student_portal',
    });

    console.log('MySQL connected');
  } catch (error) {
    console.error('MySQL connection error:', error);
    process.exit(1);
  }
}

// This exports the db connection after it's initialized
export function getDB() {
  if (!db) {
    throw new Error('DB connection not initialized. Call connectDB() first.');
  }
  return db;
}