const express = require("express");
const router = express.Router(); //manejador de rutas de express
const reclutamientoSchema = require("../models/reclutamiento");


router.post("/reclutamientos", (req, res) => {
    const reclutamiento = reclutamientoSchema(req.body);
    reclutamiento
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

router.get("/reclutamientos",  (req, res) => {
    reclutamientoSchema
    .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/reclutamientos/:id", (req, res) => {
    const { id } = req.params;
    reclutamientoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.put("/reclutamientos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, telefono, experiencia_Laboral, habilidades, estatus_candidatura } = req.body;
    reclutamientoSchema
        .updateOne({ _id: id }, {
            $set: { nombre, correo, telefono, experiencia_Laboral, habilidades, estatus_candidatura  }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.delete("/reclutamientos/:id", (req, res) => {
    const { id } = req.params;
    reclutamientoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

