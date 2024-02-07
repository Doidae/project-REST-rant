const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

// Get /places
router.get('/', (req, res) => {
    db.Place.find()
    .then( (places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})


router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then( () => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}.`
                message += `${err.errors[field].message}`
            }
            console.log('Validation error message', message)

            // TODO: Generate error message(s)
            res.render('places/new', { message })
        }
        else {
            res.render('error404')
        }
    })
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place } )
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')           //Added these on part 8?
})

router.delete('/:id/rant/:rantID', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')      //Added these on part 8 ?
})

module.exports = router
