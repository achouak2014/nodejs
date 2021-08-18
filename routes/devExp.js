const express = require("express");
const router =express.Router();
const devExpController = require('../controllers/devExp');
// prendre les route qui sont dans app et conserner la formation 
router.get('/',devExpController.getDevExp);
router.post('/',devExpController.postDevExp);
router.delete("/:id",devExpController.deleteDevExp);
router.put("/:id",devExpController.putDevExp);

module.exports= router ; 

// appller et ensuite de l'afficher 
//