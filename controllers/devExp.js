const DevExp = require("../models/DevExp");

exports.postDevExp = (req, res, next) => {
    const devExp = new DevExp({...req.body})
    devExp.save().then(()=>res.status(201).json({message:"formations enregestre"})).catch(error=>res.status(400).json({error}));
};

exports.getDevExp =  (req, res, next) => {
    DevExp.find().then(devExp=>res.status(200).json(devExp))
};

exports.deleteDevExp = (req, res, next)=>{
    DevExp.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({ message:"Formation supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.putDevExp =  (req, res, next) => {
    DevExp.updateOne(
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