const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema ({
    status: {
        type: Number,
        required: [true, 'Order status needed']
    },
    food_id: {
        type: Number,
    },
    user_id: {
        type: Number,
        required: [true, 'Insert user ID!']
    },
    ordered_date: {
        type: Date
    }
})

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;