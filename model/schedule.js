module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Schedules', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      day: DataTypes.STRING,
      clockIn: DataTypes.STRING,
      clockOut: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
  }, {
      paranoid : true //soft deletes
  });
};