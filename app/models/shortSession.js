const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortSessSchema = new Schema(
  {
    sess_id: { type: String, required:true },
    c_name: { type: String, required:true },
    c_email: { type: String, required:true },
    c_country: { type: String, required:true },
    c_phone: { type: String, required:true },
    c_: { type: String, required:true },
    study_plan:{type:String, required:true},
    fund_source:{type:String, required:true},
    study_level:{type:String, required:true},
    date:{type:String, required:true},
    type:{type:String, default:"Short"},
  }
);

module.exports = mongoose.model("session", shortSessSchema);
