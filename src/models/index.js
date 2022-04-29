const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {
    Book: require('./books'),
    User: require('./users'),
    Review: require('./reviews'),
    Reply: require('./replys'),
    Order: require('./orders'),
    OrderItem: require('./orderitems'),
    Cart: require('./carts'),
    Author: require('./authors'),
    AuthorBook: require('./authorbooks'),
    sequelize : sequelize,
    Sequelize : Sequelize
};

db.Book.init(sequelize)
db.Review.init(sequelize)   
db.Reply.init(sequelize) 
db.Author.init(sequelize)  
db.AuthorBook.init(sequelize)         
db.User.init(sequelize)     
db.Order.init(sequelize)   
db.OrderItem.init(sequelize)      
db.Cart.init(sequelize)

db.User.associate(db)
db.Cart.associate(db)           
db.AuthorBook.associate(db)       
db.Author.associate(db)          
db.Reply.associate(db)           
db.OrderItem.associate(db)    
db.Review.associate(db)
db.Book.associate(db)    
db.Order.associate(db)          

module.exports = db;
