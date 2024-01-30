require('dotenv').config()
const express = require('express')
const app = express()

app.set('views', __dirname + '/views') // probably missed this, added on part 4 step 2?
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/places', require('./controllers/places'))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.get('/places/new', (req,res) => {
    res.render('new')
})

app.listen(process.env.PORT)
