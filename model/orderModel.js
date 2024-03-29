const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema({
    orderItems: [{
        type: ObjectId,
        required: true,
        ref: 'OrderItem'
    }],
    shippingAddress1: {
        type: String,
    },
    shippingAddress2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'pending',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'Auth',
        required: true
    },
    dateOrdered: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Order', orderSchema)