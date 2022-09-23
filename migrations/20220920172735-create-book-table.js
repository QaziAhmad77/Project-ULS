'use strict';
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
