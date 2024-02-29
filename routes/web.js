const countryController = require("../app/http/controllers/countryController");
const homeController = require("../app/http/controllers/homeController");
const testcontroller = require("../app/http/controllers/testcontroller");
function initroutes(app) {
  //api home route
  app.get("/", homeController().home);
  //api test route
  app.get("/api/countr", testcontroller().test);
  //get country route
  app.get("/api/country", countryController().getCountry);
}
module.exports = initroutes;
