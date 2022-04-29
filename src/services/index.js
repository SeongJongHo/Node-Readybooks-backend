const bookService = require('./book.Service');
const userService = require('./user.Service');
const cartService = require('./cart.Service');
const orderService = require('./order.Service');
const reviewService = require('./review.Service')

module.exports = {
    bookService,
    userService,
    cartService,
    orderService, 
    reviewService,
}