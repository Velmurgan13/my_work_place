// https://hoverboard-tictactoe.herokuapp.com/
const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/links/links.html')
})

app.get("/hoverboard", (req, res) => {
    res.sendFile(__dirname + '/project/hoverboard.html')
})

app.get("/tictactoe", (req, res) => {
    res.sendFile(__dirname + "/game/game.html")
})

app.listen(process.env.PORT || 3000)