const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faqSchema = new Schema({
    faq_id: { type: String, required: true },
    questions: { type: String, required: true },
    answers: { type: [String], required: true },
});

module.exports = mongoose.model("faq",faqSchema);