const express = require('express')

const app = express()

const axios = require('axios')

const expHbs = require('express-handlebars')

let port = 6000


app.listen('port', () => {
    console.log('Blog Server Is Started')
})