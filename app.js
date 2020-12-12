const express = require('express');
// express app
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');


// register view engine
app.set('view engine', 'ejs');

// connecting to the database
const dbURI = 'mongodb+srv://vifi:test1234@jedlo.axzrn.mongodb.net/sushi?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log("Connected to db")
        app.listen(3000);
    })
    .catch((err) => console.log('Failed to connect to the database ' + err))

// 'views' is the default folder ejs looks into for html files. This is what you do to change that
// app.set('views', 'newfoldername')

// listen for requests
// app.listen(3000);

// middleware & static
app.use(express.static('public'))

app.use((req, res, next) =>{
    console.log("A new request has been detected");
    console.log('host:', req.hostname)
    next()
})

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title : 'new blog 2',
//         snippet: 'about my new blog 2',
//         body: 'more about my beautiful blog 2'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// })

// retrieve all blogs from mongoose
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// mongoose find ONE specific
// app.get('/single-blog', (req, res) =>{
//     Blog.findById('5f93d374c40bff7e269c8a3e')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// })


app.get('/', (req, res) =>{
    // don't have to set res.Headtype
    // res.send('<p>hello</p>');
    // res.sendFile('./views/index.html', { root: __dirname })
    res.redirect('/blogs')
})

app.get('/flying_dinosaur', (req, res) =>{
    // res.sendFile('./views/flying_dinosaur.html', { root: __dirname })
    res.render('flying_dinosaur', {title: 'Dino'});
})

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) =>{
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

// redirects

app.get('/dinosaur', (req, res) =>{
    res.redirect('flying_dinosaur', {title: 'Dino'});
})

// 404 err

app.use((req, res) =>{
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', {title: '404'});
})

