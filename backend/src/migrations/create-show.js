"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shows", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      timeStart: {
        type: Sequelize.DATE,
      },
      timeEnd: {
        type: Sequelize.DATE,
      },
      idMovie: {
        type: Sequelize.STRING,
      },
      idCinemaHall: {
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
    await queryInterface.dropTable("Shows");
  },
};
