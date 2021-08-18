const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const formationRoutes = require("./routes/formation")
const haderRoutes = require("./routes/hader")
const devExpRoutes= require("./routes/devExp")
const nodevExpRoutes = require("./routes/noDevExp");
const hardSkillsRoutes = require("./routes/hardSkills");
const softSkillsRoutes = require("./routes/softSkills");

require("dotenv").config();

mongoose
    .connect(
        `mongodb+srv://${process.env.NODE_LOGIN_MONGOOSE}:${process.env.NODE_PASSWORD_MONGOOSE}@cluster0.bay0e.mongodb.net/${process.env.NODE_BDNAME_MONGOOSE}?retryWrites=true&w=majority`,
        {useNewUrlParser:true, useUnifiedTopology: true})
        
    .then(() => console.log("Connexion reussie"))
    .catch(() => console.log("connexion ratée"));

app.use(cors());
app.use(express.json());
app.use("/api/formation", formationRoutes);
app.use("/api/header", haderRoutes);
app.use("/api/experience/devexp", devExpRoutes);
app.use("/api/experience/nodevexp", nodevExpRoutes);
app.use("/api/competences/soft", softSkillsRoutes)
app.use("/api/competences/hard", hardSkillsRoutes);
;
  

module.exports = app;
