const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faqSchema = new Schema({
    faq_id:{type:String, required:true},
    faq_ques:{type:String, required:true},
    faq_ans:{type:String, required:true},
});

module.exports = mongoose.model("faq",faqSchema);