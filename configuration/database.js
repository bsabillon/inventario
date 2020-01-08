const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://zmatqjqglrzrie:23685dd91ab929200fab0b2241a63f24208ce9cffba3a90f6cacaacd45e22f35@ec2-23-21-148-109.compute-1.amazonaws.com:5432/d5b8vtd3js2flv?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',{
    host:'ec2-23-21-148-109.compute-1.amazonaws.com',
    dialect: 'postgres',
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});


// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

  module.exports  = sequelize;