const router = require('express').Router()
// const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions')
// const { protect } = require('../middleware/auth')


router.get('/', (req, res) => {
    res.send('Hello Transaction')
})

module.exports = router