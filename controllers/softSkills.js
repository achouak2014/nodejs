const SoftSkills = require("../models/SoftSkills");

exports.postSoftSkills = (req, res, next) => {
    const softSkills = new SoftSkills({...req.body})
    softSkills.save().then(()=>res.status(201).json({message:"formations enregestre"})).catch(error=>res.status(400).json({error}));
};

exports.getSoftSkills =  (req, res, next) => {
    SoftSkills.find().then(softSkills=>res.status(200).json(softSkills))
};

exports.deleteSoftSkills = (req, res, next)=>{
    SoftSkills.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({ message:"Formation supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.putSoftSkills =  (req, res, next) => {
    SoftSkills.updateOne(
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