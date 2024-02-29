const Country = require("../../models/country");

function countryController() {
  return {
    async getCountry(req, res) {
      try {
        const results = await Country.find().exec();
        console.log(results)
        res.send(results);
      } catch (error) {
        console.error("Error fetching country data:", error);
        res.status(500).send({ error: "Error fetching country data" });
      }
    },
  };
}

module.exports = countryController;