"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      idCategory: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      trailer: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      old: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      introducer: {
        type: Sequelize.STRING,
      },
      poster: {
        type: Sequelize.STRING,
      },
      backDrop: {
        type: Sequelize.STRING,
      },

      rating: {
        type: Sequelize.STRING,
      },
      releaseYear: {
        type: Sequelize.DATE,
      },
      time: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Movies");
  },
};
