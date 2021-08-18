const Hader = require("../models/Hader");
exports.putHader = (req, res, next) => {
    Hader.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: "Hader modifié" }))
        .catch((error) => res.status(400).json({ error }));
    }
exports.getHader = (req, res, next) => {
    Hader.find().then(haders=>res.status(200).json(haders)).catch(error=> console.log(error));
}
