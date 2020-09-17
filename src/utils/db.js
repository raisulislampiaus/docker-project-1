const Sequelize = require('sequelize')

const CONNECTION_STRING = process.env.DATABASE || "postgres://postgres:piaus123@localhost:5432/piaus12345";
const db = new Sequelize(CONNECTION_STRING);

const User = db.define('users',{
    name:Sequelize.TEXT,
    email:{
        type:Sequelize.TEXT,
        unique:true
    },
    password:Sequelize.TEXT
});

const Direction = db.define('direction',{
    destination:Sequelize.TEXT,
    hash:Sequelize.TEXT
});

db.sync()
    .then(e=>{
        console.log(`Database Synced`)
    }).catch(e=>console.log(e.message));

module.exports = {
    db,User,Direction
}