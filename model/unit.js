module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Units', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      radius: DataTypes.INTEGER, //in meters
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
  }, {
      paranoid : true //soft deletes
  });

  Unit.associate = models => {
    Unit.hasMany(models.Employee, {
        foreignKey: 'unitId',
        as: 'employee'
    });
};

  return Unit;
};