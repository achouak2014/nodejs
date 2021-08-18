const Formation = require("../models/Formation");

exports.postFormation = (req, res, next) => {
    const formation = new Formation({...req.body})
    formation.save().then(()=>res.status(201).json({message:"formations enregestre"})).catch(error=>res.status(400).json({error}));
};

exports.getFormation =  (req, res, next) => {
    Formation.find().then(formations=>res.status(200).json(formations))
};

exports.deleteFormation = (req, res, next)=>{
    Formation.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({ message:"Formation supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.putFormation =  (req, res, next) => {
    Formation.updateOne(
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