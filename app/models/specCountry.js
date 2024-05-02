const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const sp_country = new  Schema({
    c_id: { type: String, required: true },
    top_image:{type:String,required:true},
    c_name: { type: String, required: true },
    c_worldrank: { type: Number, required: true },
    num_uni: { type: Number, required: true },
    about:{ type: String, required: true },
    top_reasons: [{type:String, required:true}],
    uni_list:[{type:String, required:true}],
    average_fee:{type:String, required:true},
    num_stud_international:{type:String, required:true},
    avg_cost_living:{type:String, required:true},
    avg_hostel_price:{type:String, required:true},
    visa_type:{type:String, required:true},
    visa_processing_time:{type:String, required:true},
    english_tests:{type:String,required:true},
    min_english_score:{type:Object,required:true}
})

module.exports=mongoose.model("Spec_country",sp_country);