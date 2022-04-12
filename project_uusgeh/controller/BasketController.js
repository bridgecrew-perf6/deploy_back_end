const express = require('express');
const Basket = require('../models/Basket');

const add_to_basket = (req, res, next) => {
    const data = req.body;
    Basket.create(data, function (err, data) {
        if(err) res.json({
            success: false,
            data: err,
        });
        else
        res.json({
            success: true,
            data: data,
        });
    })
}

module.exports = {
    add_to_basket
}