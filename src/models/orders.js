const Sequelize = require('sequelize');

module.exports = class Order extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                autoIncrement: true,
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            order_number: {
                type: Sequelize.STRING(1500),
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
        this.belongsTo(db.User, { foreignKey: 'user_id', onDelete: 'cascade', targetKey: 'id'});
        this.hasMany(db.OrderItem, { foreignKey: 'order_id', onDelete: 'cascade', sourceKey: 'id'});
    }
}