const express = require("express");
const router = express.Router();
const {
  getHelloWorld,
  getTemplateEngine,
  getLogin,
} = require("../controllers/homeController");
// Restful api
router.get("/", getHelloWorld);

router.get("/getTemplateEngine", getTemplateEngine);
router.get("/login", getLogin);
module.exports = router; // export default
