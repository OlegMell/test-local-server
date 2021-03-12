const insertPersonRoute = require('express').Router()


insertPersonRoute.post('/', (req, res) => {
    console.log('REQUEST PARAMS: ', {
        ...req.body
    })
    res.send('OK')
})


module.exports = insertPersonRoute
