const express = require('express')

const app = express();

const homeRouter = require('./routes/home')









app.use('/', homeRouter)

app.listen(5000, () => {
    console.log('server started')
})