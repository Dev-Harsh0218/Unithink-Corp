const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortSessSchema = new Schema(
  {
    sess_id: { type: String, required:true },
    c_name: { type: String, required:true },
    c_email: { type: String, required:true },
    c_phone:{type:String, required:true},
    service_type:{type:String,reuired:true},
    date:{type:String, required:true},
    type:{type:String, default:"Short"},
  }
);

module.exports = mongoose.model("session", shortSessSchema);
