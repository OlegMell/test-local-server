const getPeopleRoute = require("./get-people");
const insertPersonRoute = require("./insert-person");
const peopleRouter = require('express').Router()

peopleRouter.use('/people', getPeopleRoute);
peopleRouter.use('/people', insertPersonRoute);

module.exports  = peopleRouter
