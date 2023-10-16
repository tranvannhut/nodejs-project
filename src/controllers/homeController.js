const getHelloWorld = (req, res) => {
  res.send("Hello word!!");
};
const getTemplateEngine = (req, res) => {
  res.render("sample.ejs");
};
const getLogin = (req, res) => {
  res.send("Login success !!");
};
module.exports = {
  getHelloWorld,
  getTemplateEngine,
  getLogin,
};
