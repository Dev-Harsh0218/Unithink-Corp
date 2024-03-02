const faq = require("../../models/faq");

function faqController() {
    return {
        async getfaq(req, res) {
            try {
                const results = await faq.find().exec();
                console.log(results)
                res.send(results);
            } catch (error) {
                console.error("Error fetching country data:", error);
                res.status(500).send({ error: "Error fetching country data" });
            }
        }
    }
}


module.exports = faqController;