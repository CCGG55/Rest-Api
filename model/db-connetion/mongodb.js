/** packages */
const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-conetions.mongodb");

//user: acad_rest_api_user
//pass: 90EpcPOm9u3Cw6dg

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () => {
        console.log("mongodb server conected!");
    });

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconected!");
    });

    mongoose.connection.on("error", () => {
        console.log("mongodb server conection Error!");
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
        console.log("mongodb server shutting down!");
        });
    });
};
