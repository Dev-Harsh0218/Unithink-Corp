const consultController = require("../app/http/controllers/consultController");
const countryController = require("../app/http/controllers/countryController");
const faqController = require("../app/http/controllers/faqController");
const homeController = require("../app/http/controllers/homeController");
const testcontroller = require("../app/http/controllers/testcontroller");
function initroutes(app) {
  //api home route
  app.get("/", homeController().home);
  //api test route
  app.get("/api/test", testcontroller().test);
  //get country route
  app.get("/api/country", countryController().getCountry);
  //faq route
  app.get("/api/faq",faqController().getfaq);
  //book_short_session
  app.post("/api/shortSess",consultController().bookShortSess)
}
module.exports = initroutes;
