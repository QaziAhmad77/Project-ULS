'use strict';
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("students", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        registrationNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                len: [2, 4],
            }
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    Student.beforeCreate(async (student) => {
        student.createdAt = moment().unix();     // moment().unix();
        student.updatedAt = moment().unix();     // moment().unix();
    })
    Student.beforeUpdate(async (student) => {
        student.updatedAt = moment().unix();
    });
    return Student;
}