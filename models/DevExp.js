
const mongoose = require ("mongoose");
const devExpSchema = mongoose.Schema({
    name:{type:String, require: true},
    type:{type:String, require: true},
    description:{type:String, require: true},
    date:{type:String, require: true},
    stack:{type:String, require: true},
})
module.exports = mongoose.model("DevExp", devExpSchema);



//f tjr F designer la table  description de table 
//