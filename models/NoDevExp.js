
const mongoose = require ("mongoose");
const nodevExpSchema = mongoose.Schema({
    date:{type:String, require: true},
    theme:{type:String, require: true},
    job:{type:String, require: true},
    description:{type:String, require: true},
    realization:{type:String, require: true},
})
module.exports = mongoose.model("NoDevExp", nodevExpSchema);



//f tjr F designer la table  description de table 
