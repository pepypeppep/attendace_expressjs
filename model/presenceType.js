module.exports = (sequelize, DataTypes) => {
    return sequelize.define('PresenceType', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
  }, {
      paranoid : true //soft deletes
  });
};