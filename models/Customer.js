module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        // Giving the Customer model a name of type STRING
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlpha: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlpha: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        cellPhone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isNumeric: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlpha: true
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isAlpha: true,
            }
        },
        zip: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true
            }
        },
        fbLink: {
            type: DataTypes.STRING,
            validate: {
                isURL: true
            }
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,

            }
        },
        anniversary: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                
            }
        },
        accessorypref: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        stylepref: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        versatility: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mixedmetals: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rosegold: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trendy: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flattering: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpw: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Customer;
};