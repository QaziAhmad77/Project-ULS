const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("books", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edition: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: true,
            }
        },
        department_book: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        available_books: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
            }
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
    Book.beforeCreate(async (book) => {
        book.createdAt = moment().unix();     // moment().unix();
        book.updatedAt = moment().unix();     // moment().unix();
    })
    Book.beforeUpdate(async (book) => {
        book.updatedAt = moment().unix();
    });
    return Book;
}