
const mongoose = require ("mongoose");
const haderSchema = mongoose.Schema({
    name:{type:String, require: true},
    job:{type:String, require: true},
    phone:{type:String, require: true},
    mail:{type:String, require: true},
    portfilo:{type:String, require: true},
})
module.exports = mongoose.model("Hader", haderSchema);