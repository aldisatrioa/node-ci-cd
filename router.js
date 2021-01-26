const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send([])
})

router.get('/task', (req, res) => {
    res.status(200).send([])
})

module.exports = router