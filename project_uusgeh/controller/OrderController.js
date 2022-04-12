const express = require('express');
const { validationResult } = require('express-validator');
const Order = require('../models/Order');

const create_order = (req, res, next) => {
    const data = req.body;
    const errors = validationResult(req)
    if(errors.isEmpty){
        return res.status(400).json({
            success: false,
            errors: errors.errors
        })
    } else {
    Order.create(data, function (err, data) {
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

const get_user_order_by_userId = (req, res, next) => {
    Order.findOne({}, function (err, data) {

    })
}

module.exports = {
    create_order,
    get_user_order_by_userId,
    get_order_by_id,
    get_orders,
    update_order,
    delete_order,
}