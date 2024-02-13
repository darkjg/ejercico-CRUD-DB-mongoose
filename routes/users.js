
const express = require("express");
const router = express.Router();
const Tarea = require("../models/Tareas.js"); 


router.post("/create", async(req, res) => {
    try {
        console.log(req.body)
        const TareaObtenida = await Tarea.create(req.body);
        res.status(201).send(TareaObtenida);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Existe un problema al crear la tarea" });
    }
});


router.get("/", async(req, res) => {
    try {
        const Tareas = await Tarea.find();
        res.status(201).send(Tareas);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Existe un problema al obtener la tarea" });
    }
});

router.get("/id/:_id", async(req, res) => {
    try {
        const Tareas = await Tarea.findById(req.params);
        res.status(201).send(Tareas);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Existe un problema al obtener la tarea" });
    }
});


router.put("/markAsCompleted/:_id", async(req, res) => {
    try {
     const update= {completed:true}
        const Tareas = await Tarea.findByIdAndUpdate(req.params,update);
       
        res.status(201).send(Tareas);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Existe un problema al obtener la tarea" });
    }
});

router.put("/id/:_id", async(req, res) => {
    try {     
        const update= {nombre:req.body.nombre}
        const Tareas = await Tarea.findByIdAndUpdate(req.params,update);        
       
        res.status(201).send(Tareas);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Existe un problema al obtener la tarea" });
    }
});


router.delete("/id/:_id", async(req, res) => {
    try {     
        const Tareas = await  Tarea.findByIdAndDelete(req.params);     
        console.log(Tareas)
       
        res.status(201).send(Tareas);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Existe un problema al obtener la tarea" });
    }
});



module.exports = router;