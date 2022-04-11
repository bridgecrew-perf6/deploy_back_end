const express = require("express");
const router = express.Router();
const FoodController = require('../controller/FoodController');
const OrderController = require('../controller/OrderController');
const FoodValidator = require('../middleware/create_update')


// Requests

router.get('/food/:id', FoodController.get_food);
router.get('/foods', FoodController.get_foods);
router.post('/new/food', FoodValidator.createfood(), FoodController.create_food);
router.post('/update/food/:id', FoodController.update_food);
router.post('/delete/food/:id', FoodController.delete_food)
router.post('/search', FoodController.search_food)

router.post('/new/order', OrderController.create_order)
router.get('/get/user/order/:userId', OrderController.get_user_order_by_userId)
router.get('/get/order/:id', OrderController.get_order_by_id)
router.post('/orders', OrderController.get_orders)
router.post('/update/order', OrderController.update_order)
router.post('/delete/order', OrderController.delete_order)



module.exports = router;