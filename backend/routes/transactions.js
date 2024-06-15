const { addIncome, getIncome, deleteIncome } = require('../controllers/income')
const { addExpense, getExpense, deleteExpense, updateExpense } = require('../controllers/expense')

const router = require('express').Router()

router.post('/add-income', addIncome)   
    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .put('/update-expense/:id', updateExpense)

module.exports = router