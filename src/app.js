const indexRouter = require("./api");
const express = require('express');
const app = express()


app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);

app.get('/', (req, res) => {
    res.send('Server is work!')
})

app.listen(process.env.PORT || 3000,
    () => console.log("server has been started on http://localhost:3000"))
