const express = require("express");
const cors = require("cors");
const mongoose = require ("mongoose");
const Hader = require("./models/Hader");
const Formation = require("./models/Formation");
require("dotenv").config();
const app = express();
mongoose
.connect(
    `mongodb+srv://${process.env.NODE_LOGIN_MONGOOSE}:${process.env.NODE_PASSWORD_MONGOOSE}@cluster0.bay0e.mongodb.net/formationIT?retryWrites=true&w=majority`, 
{ useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=> console.log('connextion à MongoDB réussie!'))
.catch(() => console.log('connexion ç MongoDB échouée !'));

app.use(cors());
app.use(express.json());
app.get('/api/header', (req, res, next) => {
    Hader.find().then(headers=>res.status(200).json(headers))
});

app.get('/api/formation', (req, res, next) => {
    Formation.find().then(formations=>res.status(200).json(formations))
});
app.post('/api/formation', (req, res, next) => {
    const formation = new Formation({...req.body})
    formation.save().then(()=>res.status(201).json({message:"formations enregestre"})).catch(error=>res.status(400).json({error}))
});
    
module.exports = app;
