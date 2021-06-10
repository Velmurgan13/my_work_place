const fs = require("fs")
const users  = require("./database/users.json")
const express = require('express')
const session = require('express-session')
const fileUpload = require('express-fileupload')
const expHbs = require('express-handlebars')
const app = express()

app.use(express.static('public'))
app.use(session({
    secret:"Apple",
    resave:false,
    saveUninitialized:false
}))
app.use(fileUpload())
app.use(express.urlencoded({extended:true}))

app.engine('hbs', expHbs({ extname:'hbs'}))
app.set("view engine", 'hbs')

app.get('/signUp', (req, res) => {
    req.session.login = false
    res.render('signup')
})

app.get('/profile', (req, res) => {
    if (req.session.isloggin == true) {
        res.render("profile", req.session.user)
        return
    }
    res.redirect("/login") 
})
app.get("/logout", (req, res) => {
    req.session.isloggin = false
    res.redirect("/login")
})


app.get('/login', (req, res) => {
    req.session.login = true
    res.render("login")
})

app.post("/login", (req, res) => {
    let {password,email, name} = req.body
    let flag1 = false
    let flag2 = true
    let user
    users.forEach((item) => {
        if (item.email == email) {
            if (item.password == password) {
                flag1 = true
                user = item
            }
            flag2 = false
            return false
        }
    })

    switch (req.session.login) {
        case true:
            switch (flag1) {
                case true:
                    req.session.isloggin = true
                    req.session.user = user
                    res.redirect("/profile")
                    return
                default:
                    res.redirect("/login")
                    return
            }
        
        default:
            switch (flag2) {
                case true:
                    try {
                        let userimage = req.files.avatar
                        userimage.mv(`./public/uploads/${userimage.md5}-${userimage.name}`, (err) => {
                            if (err) {
                                flag2 = false
                                res.json({uploaded:false})
                                return
                            }
                        })
                    } catch (error) {
                        flag2 = false
                        res.json({uploaded:false})
                    }
                    if (flag2) {
                        let userimage = req.files.avatar
                        let user = {email:email, name:name,password:password ,image:`${userimage.md5}-${userimage.name}`}
                        users.push(user)
                        fs.writeFileSync('./database/users.json', JSON.stringify(users, null, 2))
                        req.session.isloggin = true
                        req.session.user = user
                        res.redirect("/profile")
                        return
                    }
                    else {
                        return
                    }
                default:
                    res.json({uploaded:false})
                    return
            }
    }
})
app.listen(5000)