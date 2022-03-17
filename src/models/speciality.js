'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Speciality extends Model {
            static associate(models) {
        }
    }
    Speciality.init({
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        name: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Speciality',
    });
    return Speciality;
};