const Country = require("../../models/countries");
const SpecCountry = require("../../models/specCountry");

function countryController() {
  return {
    async getCountry(req, res) {
      try {
        const results = await Country.find().select("c_id c_name c_about c_worldrank num_uni img_link").exec();
        return res.send(results);
      } catch (error) {
        console.error("Error fetching country data:", error);
        return res.status(500).send({ error: "Error fetching country data" });
      }
    },

    async getSpecCountry(req,res){
      try{
        const results= await SpecCountry.find({c_id:req.body.c_id}).select("top_image c_name c_worldrank num_uni about top_reasons uni_list average_fee num_stud_international avg_cost_living avg_hostel_price visa_type visa_processing_time english_tests min_english_score").exec();
        return res.status(200).send(results);
      }
      catch(error){
        console.log("Error fetching country data",error);
        return res.status(500).send({error:"Error fetching country data"})
      }
    } 
  }
}

module.exports = countryController;