import dotenv from 'dotenv';
import { resolve } from 'path';

console.log('NODE_ENV', process.env.NODE_ENV);

dotenv.config();
dotenv.config({
  path: resolve(
    __dirname,
    '..',
    '..',
    'config',
    process.env.NODE_ENV !== 'dev' ? '.local.env' : '.dev.env',
  ),
});

process.env.CONNECTION_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGO_TEST
    : process.env.MONGO_URI;

console.log('BASE_URL', process.env.BASE_URL);
// console.log('CONNECTION_URI', process.env.CONNECTION_URI);

export const { PORT, BASE_URL, CONNECTION_URI } = process.env;
