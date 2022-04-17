const Sequelize = require('sequelize');

module.exports = class Book extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                autoIncrement: true,
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL(10,2),
                allowNull: false
            },
            preview_file: {
                type: Sequelize.STRING(1000),
                allowNull: false
            },
            file: {
                type: Sequelize.STRING(1000),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(2000),
                allowNull: false
            },
            thumbnail: {
                type: Sequelize.STRING(1000),
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
        this.hasMany(db.Cart, { foreignKey: 'book_id', onDelete: 'cascade', sourceKey: 'id'});
        this.hasMany(db.Book, { foreignKey: 'book_id', onDelete: 'cascade', sourceKey: 'id'});
    }
}