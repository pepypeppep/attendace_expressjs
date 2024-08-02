module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nik: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: DataTypes.STRING,
        unitId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        paranoid : true //soft deletes
    });


    Employee.associate = models => {
        Employee.hasMany(models.Presence, {
            foreignKey: 'employeeId',
            as: 'presences'
        });
    };

    return Employee;
}; 