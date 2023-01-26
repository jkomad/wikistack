const express = require('express')
const wikiRouter = express.Router()
const addPage = require('../views/addPage')
const main = require('../views/main')
const { pages } = require("../models")

wikiRouter.get('/', (req, res, next) => {
    try {
        res.send(main())
    } catch (err) {
        console.error(err.message)
        next(err)
    }
})

wikiRouter.post('/', async (req, res, next) => {
    const title = req.body.title
    const content = req.body.content
    try {
        const page = await pages.create({
            title: title,
            content: content
        })
        res.redirect('/')
    } catch (err) {
        console.error(err.message)
        next(err)
    }
})

wikiRouter.get('/add', (req, res, next) => {
    try {
        res.send(addPage())
    } catch (err) {
        console.error(err.message)
        next(err)
    }
})

module.exports = wikiRouter