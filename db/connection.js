
const Pool = require("pg").Pool;
require("dotenv").config();
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
// const connectionString = process.env.DATABASE_URL;

const client = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

console.log("welcome")

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "users",
//   password: "postgres",
//   port: 5432,
// });

client.connect();

const query = `
CREATE TABLE IF NOT EXISTS users (
    id serial,
    name varchar,
    email varchar,
    address varchar
);
`;

client
  .query(query)
  .then(result => console.log('users table created successfully')) // your callback here
  .catch(e => console.error('db connection error', e.stack)) // your callback here
// .then(() => client.end());


module.exports = client;