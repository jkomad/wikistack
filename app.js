const express = require('express')
const morgan = require('morgan')
const layout = require('./views/layout')
const { db, pages, users } = require('./models')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/users')

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))

app.use('/wiki', wikiRouter)
app.get('/', (req, res) => {
    res.redirect('/wiki')
})

const init = async () => {
    try {
        db.sync()
        app.listen(port, () => {
            console.log(`listening to port ${port}`)
    })} catch (err) {
        console.error(err.message)
    }
}

init()