const Sequelize = require('sequelize') 
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
})

//this js file is where we will 'define' our ORM models/SQL tables

const pages = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'title'
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'URL'
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'content'
    },
    status: Sequelize.ENUM('open', 'closed')
})

const users = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'John Doe'
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        defaultValue: 'John_Doe@gmail.com'

    } 
})

function slugify(title) {

}

module.exports = {
    db, 
    pages,
    users
}