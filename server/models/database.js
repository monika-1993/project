/**
 * Created by monika on 21/1/17.
 */
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/ereignis';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE items(id SERIAL PRIMARY KEY, description VARCHAR(40) not null)');
query.on('end', () => { client.end(); });