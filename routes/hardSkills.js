const express = require("express");
const router =express.Router();
const hardSkillsController = require('../controllers/hardSkills');
// prendre les route qui sont dans app et conserner la formation 
router.get('/',hardSkillsController.getHardSkills);
router.post('/',hardSkillsController.postHardSkills);
router.delete("/:id",hardSkillsController.deleteHardSkills);
router.put("/:id",hardSkillsController.putHardSkills);

module.exports= router ; 

// appller et ensuite de l'afficher 
