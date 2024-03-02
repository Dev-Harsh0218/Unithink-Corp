const Country = require("../../models/country");

function countryController() {
  return {
    async getCountry(req, res) {
      try {
        const results = await Country.find().select("c_id c_name c_about c_worldrank num_uni img_link").exec();
        res.send(results);
      } catch (error) {
        console.error("Error fetching country data:", error);
        res.status(500).send({ error: "Error fetching country data" });
      }
    },
  };
}

module.exports = countryController;