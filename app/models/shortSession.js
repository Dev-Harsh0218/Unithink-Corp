const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortSessSchema = new Schema(
  {
    sess_id: { type: String, required: true },
    c_name: { type: String, required: true },
    c_email: { type: String, required: true },
    c_phone: { type: String, required: true },
    c_course: { type: String, required: true },
    c_pref_country: { type: String, required: true },
    type:{type:String, default:"short"},
    date:{type:String, required:true},
  }
);

module.exports = mongoose.model("session", shortSessSchema);
