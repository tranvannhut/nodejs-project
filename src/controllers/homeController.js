const e = require("express");
const connection = require(".././config/database");
const {
  getAllUser,
  getUserById,
  createUserService,
  updateUserService,
  deleteUserById,
} = require("../services/CRUDUserService");
const getHelloWorld = (req, res) => {
  let user = [];
  connection.query("SELECT * FROM USER u", function (err, result, fields) {
    user = result;
    console.log("User in callback :", user);
    res.send(JSON.stringify(user));
  });
  // res.send("Hello word!!");
};
const getTemplateEngine = (req, res) => {
  res.render("sample.ejs");
};
const getLogin = (req, res) => {
  res.send("Login success !!");
};

const homePage = async (req, res) => {
  // const [result, fields] = await connection.query(`SELECT * FROM USER`);
  // console.log(result);
  let result = await getAllUser();
  res.render("home.ejs", { listUser: result });
};

// handle CRUD for user
const getUser = (req, res) => {
  res.render("viewUser.ejs");
};

const viewUpdateUser = async (req, res) => {
  // let name = req.body.name;
  // let email = req.body.email;
  // let city = req.body.city;
  let { id } = req.query;

  let result = await getUserById(id);
  res.render("editUser.ejs", { viewEditUser: result });
};
const createUser = async (req, res) => {
  // let name = req.body.name;
  // let email = req.body.email;
  // let city = req.body.city;
  let { name, email, city } = req.body;
  let result = await createUserService(name, email, city);
  res.redirect("/");
};
const editUser = async (req, res) => {
  let { id, name, email, city } = req.body;
  console.log(id, name, email, city);
  let result = await updateUserService(name, email, city, id);
  res.redirect("/");
};
const deleteUser = async (req, res) => {
  let { id } = req.query; // # .param , #.body
  let result = await deleteUserById(id);
  if (!!deleteUserById) {
    res.redirect("/");
  } else {
    res.send("Delete not success");
  }
};
module.exports = {
  getHelloWorld,
  getTemplateEngine,
  getLogin,
  homePage,
  getUser,
  createUser,
  viewUpdateUser,
  editUser,
  deleteUser,
};
