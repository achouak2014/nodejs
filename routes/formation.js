const express = require("express");
const router =express.Router();
const formationController = require('../controllers/formation');
// prendre les route qui sont dans app et conserner la formation 
router.get('/',formationController.getFormation);
router.post('/',formationController.postFormation);
router.delete("/:id",formationController.deleteFormation);
router.put("/:id",formationController.putFormation);

module.exports= router ; 

// appller et ensuite de l'afficher 
//