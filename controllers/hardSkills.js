const HardSkills = require("../models/HardSkills");

exports.postHardSkills = (req, res, next) => {
    const hardSkills = new HardSkills({...req.body})
    hardSkills.save().then(()=>res.status(201).json({message:"formations enregestre"})).catch(error=>res.status(400).json({error}));
};

exports.getHardSkills =  (req, res, next) => {
    HardSkills.find().then(hardSkills=>res.status(200).json(hardSkills))
};

exports.deleteHardSkills = (req, res, next)=>{
    HardSkills.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({ message:"Formation supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.putHardSkills =  (req, res, next) => {
    HardSkills.updateOne(
      { _id: req.params.id },
      { ...req.body, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Formation modifiée" }))
      .catch((error) => res.status(400).json({ error }));
  };

//pour faire le 
//fiche hrade rout ficher route get put  



  //la ou il ya les fonction 
  //require on haut tjrs
  //contro
  //route 
  //models => 