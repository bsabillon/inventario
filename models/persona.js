const Sequelize = require ('sequelize');
const database = require ('../configuration/database');


const Persona = database.define('persona', {
    nombre : {
        type: Sequelize.STRING,
    },
    apellido : { 
        type: Sequelize.STRING,
    },
    fechaNacimiento : {
        type: Sequelize.DATEONLY,
    }
},
{
    freezeTableName: true,
}
)

module.exports = Persona;