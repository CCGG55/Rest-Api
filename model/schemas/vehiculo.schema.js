/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** schema creation */
const studentSchema = new mongoose.Schema({
    color:{
        type: "String",
        required: true,
        unique: true
    },
    modelo:{
        type: "String",
        required: true
    },
    sere_chasis:{
        type: "String",
        required: true
    },
    serie_marca:{
        type: "String",
        required: true,
        unique: true
    },
    presio:{
        type: "Number",
        required: true
    },
    descuento:{
        type: "Number",
        required: true
    },
    estado:{
        type: "Boolean",
        required: true,
        default: true,
    }
});

/** achema exportation */
studentSchema.plugin(validator);
module.exports = studentSchema;