const express = require("express");
const router =express.Router();
const nodevExpController = require('../controllers/nodevExp');
// prendre les route qui sont dans app et conserner la formation 
router.get('/',nodevExpController.getNoDevExp);
router.post('/',nodevExpController.postNoDevExp);
router.delete("/:id",nodevExpController.deleteNoDevExp);
router.put("/:id",nodevExpController.putNoDevExp);

module.exports= router ; 

// appller et ensuite de l'afficher 
//