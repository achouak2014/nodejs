
const mongoose = require ("mongoose");
const softSkillsSchema = mongoose.Schema({
    name:{type:String, require: true},
    description:{type:String, require: true},
})
module.exports = mongoose.model("SoftSkills", softSkillsSchema);



//f tjr F designer la table  description de table 
//