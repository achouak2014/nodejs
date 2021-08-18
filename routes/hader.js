const express = require("express");
const router =express.Router();
const haderController = require('../controllers/hader');
// prendre les route qui sont dans app et conserner la formation 
router.put("/:id",haderController.putHader);
router.get('/',haderController.getHader);

module.exports= router ; 