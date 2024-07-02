const consultController = require("../app/http/controllers/consultController");
const countryController = require("../app/http/controllers/countryController");
const faqController = require("../app/http/controllers/faqController");
const homeController = require("../app/http/controllers/homeController");
const testcontroller = require("../app/http/controllers/testcontroller");
const coursesController = require("../app/http/controllers/coursesController");
function initroutes(app) {
  //api home route
  app.get("/", homeController().home);
  //api test route
  app.get("/api/test", testcontroller().test);
  //get country routes
  app.get("/api/country", countryController().getCountry);
  app.get("/api/specCountry/:c_id", countryController().getSpecCountry);
  //faq route
  app.get("/api/faq",faqController().getfaq);
  //book_short_session
  app.post("/api/SessShort",consultController().bookSessShort)
  //topCourses
  app.get("/api/topCourses",coursesController().topCourses);
}
module.exports = initroutes;
