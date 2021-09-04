/** packages */

const mongoose = require("mongoose");

/** schema creation */
const courseSchema = new mongoose.Schema({
    code:{
        type: "Strring",
        required: true
    },
    name:{
        type: "String",
        required: true
    }
});

/** achema exportation */
module.exports = courseSchema;