const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopCourseSchema = new Schema({
    course_name: { type: String, required: true },
    countries: [{
    name: { type: String, required: true },
    details: [{ type: String }],
    }],
    country_conclusion: { type: String, required: true },
    career_opportunities: [{ type: String, required: true }],
    career_conclusion: { type: String, required: true },
});

module.exports = mongoose.model("TopCourses", TopCourseSchema);
