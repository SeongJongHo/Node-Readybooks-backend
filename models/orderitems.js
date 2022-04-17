const Sequelize = require('sequelize');

module.exports = class OrderItem extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                autoIncrement: true,
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            order_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            book_id: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            }
        },{
            sequelize,
            tableName: 'users',
            underscored: true,
            timestamps: false,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        })
    }
    static associate(db){
        this.belongsTo(db.Order, { foreignKey: 'order_id', onDelete: 'cascade', targetKey: 'id'});
        this.belongsTo(db.Book, { foreignKey: 'book_id', onDelete: 'cascade', targetKey: 'id'});
    }
}