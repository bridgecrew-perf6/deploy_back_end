const express = require('express');
const Order = require('../models/Order');

const get_orders = async (req, res, next) => {
    Order.find({}).populate('deliverman_id',[ "name", "email"]).populate('order_detail.food_id', ["name", "category.name"]).exec(function (err, data) {
      if (err) res.json({
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