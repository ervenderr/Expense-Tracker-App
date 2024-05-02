const { addIncome, getIncome, deleteIncome } = require('../controllers/income')

const router = require('express').Router()
// const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions')
// const { protect } = require('../middleware/auth')


router.post('/add-income', addIncome)
    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)

module.exports = router