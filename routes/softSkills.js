const express = require("express");
const router =express.Router();
const softSkillsController = require('../controllers/softSkills');
// prendre les route qui sont dans app et conserner la formation 
router.get('/',softSkillsController.getSoftSkills);
router.post('/',softSkillsController.postSoftSkills);
router.delete("/:id",softSkillsController.deleteSoftSkills);
router.put("/:id",softSkillsController.putSoftSkills);

module.exports= router ; 

// appller et ensuite de l'afficher 
