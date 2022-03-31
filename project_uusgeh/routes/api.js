const express = require("express");
const router = express.Router();
const FoodController = require('../controller/FoodController');
const FoodValidator = require('../middleware/create_update')


// Requests

router.get('/foods', FoodController.get_foods);
// router.get('/food', FoodController.get_food);
// router.get('/user/:userId', FoodController.find_user);


router.post('/createfood', FoodValidator.createfood(), FoodController.create_food);

router.post('/updateFood/:id', FoodController.update);

router.post('/deleteFood/:id', FoodController.delete_food)
// router.post('/createFood',FoodValidator.createfood(), FoodController.create_food)
// router.post('/addUser', FoodController.add_user);
// router.post('/deleteOrder/:orderId', FoodController.delete_order)
// router.post('/addOrder', FoodController.add_order);
// router.post('/deleteUser/:userId', FoodController.delete_user)

module.exports = router;