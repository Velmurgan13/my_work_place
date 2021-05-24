const fileUpload = require('express-fileupload');

const expHbs = require('express-handlebars');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.use(fileUpload());

app.use(express.urlencoded({ extended:true }));

const fs = require('fs');

const users = require('./database/users.json');

const cookiePraser = require('cookie-parser');

app.use(cookiePraser());

app.engine('hbs', expHbs({extname:'hbs'}));

app.set('view engine', 'hbs');

app.get('/signUp', (req, res) =>{
    res.cookie('login', false);
    res.cookie('signup', true);
    res.render('signup');

})

app.get('/profile', (req, res) => {
    if(req.headers.cookie && req.headers.cookie.includes('userIdentified') == true) {
        let user = req.cookies.userIdentified
        user = Number(user)

        if (user != NaN && user < users.length && user >= 0) {
            let newuser = {name:users[user].name, email:users[user].email, image:users[user].image}
            res.render('profile', newuser);

        }
        return
    }
    else{
        res.redirect('./login')
        return

    }
})

app.get('/login', (req, res) => {
    res.cookie('login', true);
    res.cookie('signup', false);
    res.render('login')

})

app.post("/login", (req, res) => {
    let {password,email, name} = req.body
    if (req.cookies.login == "true") {
        let flag = true

        users.forEach((item, index) => {
            if (item.email == email && item.password == password) {
                res.cookie("userIdentified", index)
                res.redirect("/profile")
                flag = false
                return false
            }
        } )
        if (flag) {
            res.redirect("/login")
            return
        }
    }
    else {
        let flag = true
        users.forEach((item) => {
            if (item.email == email) {
                flag = false
                return false
            }
        })
        if (flag) {
            try {
                let userimage = req.files.avatar
                userimage.mv(`./public/uploads/${userimage.name}`, (err) => {
                    if (err) {
                        flag = false
                        res.json({uploaded:false})
                        return
                    }
                })
            } catch (error) {
                flag = false
                res.json({uploaded:false})
            }

        }

        if (flag) {
            let userimage = req.files.avatar
            let user = {email:email, name:name,password:password ,image:userimage.name}
            users.push(user)
            fs.writeFileSync('./database/users.json', JSON.stringify(users, null, 2))
            res.cookie("userIdentified", users.length - 1)
            res.redirect("/profile")
            return
        } else {
            return
        }       

    }

})


app.listen(3000, () => console.log('server is started'))

