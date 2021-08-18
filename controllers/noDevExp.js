const NoDevExp = require("../models/NoDevExp");

exports.postNoDevExp = (req, res, next) => {
    const nodevExp = new NoDevExp({...req.body})
    nodevExp.save().then(()=>res.status(201).json({message:"formations enregestre"})).catch(error=>res.status(400).json({error}));
};

exports.getNoDevExp =  (req, res, next) => {
    NoDevExp.find().then(nodevExp=>res.status(200).json(nodevExp))
};

exports.deleteNoDevExp = (req, res, next)=>{
    NoDevExp.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({ message:"Formation supprimée"}))
    .catch((error)=>res.status(400).json({error}));
};

exports.putNoDevExp =  (req, res, next) => {
    NoDevExp.updateOne(
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