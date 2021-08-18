
const mongoose = require ("mongoose");
const hardSkillsSchema = mongoose.Schema({
    name:{type:String, require: true},
    description:{type:String, require: true},
})
module.exports = mongoose.model("HardSkills", hardSkillsSchema);



//f tjr F designer la table  description de table 
//