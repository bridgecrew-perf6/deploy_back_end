const express = require('express');
const { validationResult } = require('express-validator');
const Food = require('../models/Food');

const get_foods = (req, res, next) => {
    Food.find({}, function( err, data ){
        if (err) 
        res.json({
            success: false,
            data: err,
        });
        else
        res.json({
            success: true,
            data: data,
        })
    })
}

const create_food = (req, res, next) => {
    const data = req.body;
    const errors = validationResult(req)
    if(errors.isEmpty){
        return res.status(400).json({
            success: false,
            errors: errors.errors
        })
    } else {
    Food.create(data, function (err, data) {
        if(err) res.json({
            success: false,
            data: err,
        });
        else
        res.json({
            success: true,
            data: data,
        });
    })}
};

const update = (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    Food.updateOne({_id: id}, data, function (err, data) {
        if(err) res.json({
            success: false,
            data: err,
        });
        else
        res.json({
            success: true,
            data: data,
        });
    });
};

const delete_food = (req, res, next) => {
    Food.findOneAndDelete({_id: req.params.id})
        .then((data) => res.json(data))
        .catch(err => res.json({success: false, data: err}))
};

module.exports = {
    get_foods,
    create_food,
    update,
    delete_food
}