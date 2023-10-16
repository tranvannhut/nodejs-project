const express = require("express");
const router = express.Router();

const {
  getHelloWorld,
  getTemplateEngine,
  getLogin,
  homePage,
  getUser,
  createUser,
  editUser,
  deleteUser,
  viewUpdateUser,
} = require("../controllers/homeController");
// Restful api
// router.get("/", getHelloWorld);
router.get("/", homePage);
router.get("/home", homePage);
router.get("/createUser", getUser);
router.get("/editUser", viewUpdateUser); // view edit user
router.post("/create-user", createUser); // create user
router.post("/edit-user", editUser); // edit user
router.get("/deleteUser", deleteUser); // edit user
router.get("/getTemplateEngine", getTemplateEngine);
router.get("/login", getLogin);

module.exports = router; // export default
