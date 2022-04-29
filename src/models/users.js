const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                autoIncrement: true,
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            kakao_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                unique: "kakao_id"
            },
            nickname: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            profile_img: {
                type: Sequelize.STRING(2000),
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
        this.hasMany(db.Cart, { foreignKey: 'user_id', onDelete: 'cascade', sourceKey: 'id'});
        this.hasMany(db.Review, { foreignKey: 'user_id', onDelete: 'cascade', sourceKey: 'id'});
        this.hasMany(db.Reply, { foreignKey: 'user_id', onDelete: 'cascade', sourceKey: 'id'});
        this.hasMany(db.Order, { foreignKey: 'user_id', onDelete: 'cascade', sourceKey: 'id'});
    }
}