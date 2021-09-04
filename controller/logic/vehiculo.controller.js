/** Dto */
const vehiculoDto = require("../../model/dto/vehiculo.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createVehiculo = (req, res, next) => {
    let vehiculo = {
        color: req.body.color,
        modelo: req.body.modelo,
        sere_chasis: req.body.sere_chasis,
        serie_marca: req.body.serie_marca,
        presio: req.body.presio,
        descuento: req.body.descuento,
        estado: req.body.estado
    };
    vehiculoDto.create(vehiculo, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.updateVehiculo = (req, res, next) => {
    let vehiculo = {
        color: req.body.color,
        modelo: req.body.modelo,
        sere_chasis: req.body.sere_chasis,
        serie_marca: req.body.serie_marca,
        presio: req.body.presio,
        descuento: req.body.descuento,
        estado: req.body.estado
    };
    vehiculoDto.update({ _id: req.body.id }, vehiculo, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.getAll = (req, res, next) => {

    vehiculoDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.getByCode = (req, res, next) => {

    vehiculoDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteVehiculo = () => {
    vehiculoDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}