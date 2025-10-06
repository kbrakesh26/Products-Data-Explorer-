import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const dataDir = path.resolve(process.cwd(), 'data');
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
// Ensure database file exists (touch)
const dbFile = path.resolve(process.cwd(), process.env.SQLITE_FILE ?? 'data/database.sqlite');
if (!existsSync(dbFile)) {
  // create an empty file
  require('fs').writeFileSync(dbFile, '');
}

console.log('Prestart: data directory ensured at', dataDir);
