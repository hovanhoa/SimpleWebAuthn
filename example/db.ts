const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'webauthn'
});

module.exports = {
  query: (text: string, params: string) => pool.query(text, params)
};