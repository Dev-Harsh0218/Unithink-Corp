const moment = require("moment");
const s_sess = require("../../models/shortSession");
const sendMail = require("../../config/nodemailer");
function consultController() {
  return {
    async bookSessShort(req, res) {
      const check_date = moment().format("LL");
      const check_sess = await s_sess
        .findOne({ $and: [{ c_email: req.body.email }, { date: check_date }] })
        .exec();

      //check_for_session_already_present_or_not
      if (check_sess) {
        console.log(check_sess);
        return res
          .status(200)
          .json({ message: "Email is already register for a free session" });
      }

      //creating_a_new_session
      //----------taking the user information-----
      const new_Session = await s_sess({
        sess_id: "c_" + generateUniqueSessionNumber(),
        c_name: req.body.name,
        c_email: req.body.email,
        c_phone: req.body.phonenumber,
        c_course: req.body.degree,
        c_pref_country: req.body.country,
        type: req.body.type,
        date: check_date,
      })

      ///creating_actually
      try{
        await new_Session.save();
        sendMail(req.body.email,req.body.name)
        res.status(200).json({message:"New Session has been created."})
      }catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
      }
    },
  };
}

function generateUniqueSessionNumber() {
  return Math.floor(Math.random() * 900000) + 100000;
}

module.exports = consultController;
