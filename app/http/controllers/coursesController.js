const topCourses = require("../../models/topCourses");
function coursesController() {
    return {
        async topCourses(req, res) {
            try {
                const results = await topCourses.find();
                return res.send(results);
            } catch (error) {
                console.error("Error fetching country data:", error);
                return res.status(500).send({ error: "Error fetching country data" });
            }
        },
    };
}

module.exports = coursesController;