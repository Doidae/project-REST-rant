const router = require('express').Router()

// More code here in a moment
router.get('/', (req, res) => {
    res.send('GET /pplaces')
})

module.exports = router
