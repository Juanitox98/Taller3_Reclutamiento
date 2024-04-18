const mongoose = require("mongoose"); // importando el componente mogoose
const reclutamientoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    experiencia_Laboral: {
        type: String,
        required: true,
    },
    habilidades: {
        type: String,
        required: true,
    },
    estatus_candidatura: {
        type: Date,
        requiered: false,
    }
});
module.exports = mongoose.model("reclutamiento", reclutamientoSchema);