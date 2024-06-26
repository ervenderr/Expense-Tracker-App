const IncomeSchema = require("../models/incomeModel")


exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = IncomeSchema ({
        title,
        amount,
        category,
        description,
        date
    })
    
    try {
        if(!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if(amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: "Amount must be greater than 0" })
        }
        await income.save()
        res.status(200).json({ message: "Income added successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    console.log(income)
}

exports.getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params)
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: "Income deleted successfully" })
        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        })
    }


exports.updateIncome = async (req, res) => {
    const { id } = req.params
    const { title, amount, category, description, date } = req.body
    try {
        const income = await IncomeSchema.findById(id)
        income.title = title
        income.amount = amount
        income.category = category
        income.description = description
        income.date = date
        await income.save()
        res.status(200).json({ message: "Income updated successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}