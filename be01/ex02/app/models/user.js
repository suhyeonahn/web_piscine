'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      isCadet: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
      },
      carrerYears: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      }
    });
  return User;
};
