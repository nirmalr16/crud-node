var client = require('../db/connection');

module.exports.createUser = async function (details, callback) {
  const { name, email, address } = details;
  if (details) {
    let query = "INSERT INTO users (name,email,address) VALUES ($1, $2, $3) RETURNING id,name,email,address";
    let data = await client.query(query, [name, email, address]);
    let result = data.rows[0];
    callback(null, result);
  } else {
    let status = details.status;
    callback(null, status);
  }
};

module.exports.getUser = async function (details, callback) {
  let query = "SELECT id, name, email, address FROM users";
  let data = await client.query(query);
  let result = data.rows;
  callback(null, result);
};

module.exports.updateUser = async function (details, callback) {
  const { id, name, email, address } = details;
  if (details) {
    let query = "UPDATE users set name = $2, email = $3, address = $4 WHERE id = $1 RETURNING id,name,email,address";
    let data = await client.query(query, [id, name, email, address]);
    let result = data.rows[0];
    callback(null, result);
  } else {
    let status = details.status;
    callback(null, status);
  }
};


module.exports.deleteUser = async function (details, callback) {
  const { email } = details;
  let query = "DELETE FROM users WHERE email = $1  RETURNING id,name,email;"
  let data = await client.query(query, [email]);
  let result = data.rows[0];
  callback(null, result);
};


