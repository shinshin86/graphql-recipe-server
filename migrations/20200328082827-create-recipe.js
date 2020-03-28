'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Recipes',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        ingredients: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        direction: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  },
};
