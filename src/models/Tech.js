const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            // para arrumar a pluralizacao da tabela pelo sequelize q seria "teches"
            tableName: 'techs' 
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'techs_id', through: 'user_techs', as: 'user' });
    }

}

module.exports = Tech;