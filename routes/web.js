const countryController = require("../app/http/controllers/countryController");
const testcontroller = require("../app/http/controllers/testcontroller");
function initroutes(app) {
  //test route
  app.get("/api/test", testcontroller().test);
  app.get("/api/country", countryController().getCountry)
}
module.exports = initroutes;
