const port = 3000

const express = require('express')

const app = express()

const axios = require('axios')


// using express as a public level

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// setting a extension name for handlebars in hbs

const expHbs = require('express-handlebars')

app.engine('hbs', expHbs({extname:'hbs'}))
app.set('view engine', 'hbs')

app.get('/post/:postId', async (req, res) => {
    try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const comments = await axios.get('https://jsonplaceholder.typicode.com/comments')

        const newUsers = []

        for (i = 0; i < 100; i++){
            newUsers.push(posts.data[i])
            newUsers[i].comments = []

            start = 5 * i
            end = start + 5

            for (start; start < end; start++){
                newUsers[i].comments.push(comments.data[start])
            }
        }

        let postId = req.params

        postId = Number(postId)

        if (postId != NaN && 100 >= postId && postId >=1){
            const userobject = {title: newUsers[postId - 1].title, content: newUsers[postId - 1].body,
                                comments: newUsers[postId - 1].comments}

            res.render('post', userobject)
        }
        else{
            res.render('incorrect input')
        }

    }catch (error){
        res.render('internet issues')
    }
    
})


app.listen('port', () => {
    console.log('Blog Server Is Started')
})