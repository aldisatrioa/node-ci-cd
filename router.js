const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json([])
})

router.get('/task', (req, res) => {
    res.status(200).json([])
})

module.exports = router