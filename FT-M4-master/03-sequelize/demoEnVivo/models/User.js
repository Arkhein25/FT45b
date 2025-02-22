const { DataTypes, UUIDV4 } = require("sequelize");
const users = (sequelize) =>
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      name: {
        type: DataTypes.STRING(25),
        allowNull: false,
        validate: {
          is: /^[a-zA-Z]/,
        },
      },
      email: {
        type: DataTypes.STRING(25),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 20,
        validate: {
          isInt: {
            msg: "Debe ser un numero entero",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );

module.exports = users;
