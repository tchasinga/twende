import { neon } from '@neondatabase/serverless'

const sql = neon(`${process.env.DATABASE_URL}`);

const posts =  sql('SELECT * FROM posts');

 