const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  c_id: { type: String, required: true },
  c_name: { type: String, required: true },
  c_worldrank: { type: Number, required: true },
  num_uni: { type: Number, required: true },
  images:{ type: String},
  c_about: { type: String, required: true },
  top_reasons: {
    1: { type: String, required: true },
    2: { type: String, required: true },
    3: { type: String, required: true }
  }
});

module.exports = mongoose.model("countries", countrySchema);
