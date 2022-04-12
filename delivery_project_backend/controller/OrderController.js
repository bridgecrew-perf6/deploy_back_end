const express = require('express');
const { validationResult } = require('express-validator');
const Order = require('../models/Order');

const create_order = (req, res, next) => {
  const data = req.body;
  const errors = validationResult(req)
  if (errors.isEmpty) {
    return res.status(400).json({
      success: false,
      errors: errors.errors
    })
  } else {
    Order.create(data, function (err, data) {
      if (err) res.json({
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
};

const get_user_order_by_userId = (req, res, next) => {
  const userId = req.params.userId
  Order.findOne({ userId: userId }, function (err, data) {
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

const get_order_by_id = (req, res, next) => {
  const id = req.params.id
  Order.findOne({ _id: id }, function (err, data) {
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

const get_orders = (req, res, next) => {
  Order.find({}, function (err, data) {
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

const update_order = (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  Order.updateOne({ _id: id }, data, function (err, data) {
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

const delete_order = (req, res, next) => {
  Food.findOneAndDelete({_id: req.params.id})
      .then((data) => res.json(data))
      .catch(err => res.json({success: false, data: err}))
};

module.exports = {
  create_order,
  get_user_order_by_userId,
  get_order_by_id,
  get_orders,
  update_order,
  delete_order,
}