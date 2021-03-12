const getPeopleRoute = require('express').Router()


getPeopleRoute.get('/', (req, res) => {
    res.send(JSON.stringify({
        id: 1,
        name: 'Vasya',
        lasName: 'Pupkin',
        phone: '0999999999'
    }))
})


module.exports = getPeopleRoute
