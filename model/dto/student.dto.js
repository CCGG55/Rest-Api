/** packages */

const mongoose = require("mongoose");
const db = require("../db-connetion/mongodb");

/** usong schema */
const schema = require("../schemas/student.schema");
db();

schema.statics = {
    create: function (data, cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function (query, cb){
        this.find(query, cb);
    },
    getByCode: function (query, cb){
        console.log("getting student by code");
        this.find(query, cb);
    },
    getAll: function (query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query);
    }
};

const dto = mongoose.model("coll_student", schema);
module.exports = dto;