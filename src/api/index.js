const peopleRouter = require("./people");
const indexRouter = require('express').Router();

indexRouter.use('/api', peopleRouter)

module.exports = indexRouter;
