const connection = require("../config/database");
const getAllUser = async () => {
  let [result, fields] = await connection.query("SELECT * FROM USER");
  return result;
};
const getUserById = async (id) => {
  let [result, fields] = await connection.query(
    `SELECT * FROM USER WHERE ID = ? `,
    [id]
  );
  let user = result && result.length > 0 ? result[0] : result;
  return user;
};
const createUserService = async (name, email, city) => {
  const [result, fields] = await connection.query(
    `INSERT INTO USER (name, email, city) VALUES (? , ? , ?)`,
    [name, email, city]
  );
  return result;
};
const updateUserService = async (name, email, city, id) => {
  const [result, fields] = await connection.query(
    `UPDATE USER  SET NAME = ? , EMAIL =  ? , CITY =  ? WHERE ID = ? `,
    [name, email, city, id]
  );
  return result;
};
const deleteUserById = async (id) => {
  console.log(Number(id));
  const [result, fields] = await connection.query(
    `DELETE FROM USER  WHERE ID = ? `,
    [Number(id)]
  );
  return result;
};
module.exports = {
  getAllUser,
  getUserById,
  createUserService,
  updateUserService,
  deleteUserById,
};
