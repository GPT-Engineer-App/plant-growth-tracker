import { openDatabase } from 'sqlite';
import sqlite3 from 'sqlite3';

async function initializeDB() {
  const db = await openDatabase({
    filename: './nursery_management.db',
    driver: sqlite3.Database
  });

  await db.exec(`CREATE TABLE IF NOT EXISTS plant_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    status TEXT,
    planted_date TEXT,
    time TEXT,
    species TEXT,
    family TEXT,
    image TEXT
  )`);

  return db;
}

export default initializeDB;