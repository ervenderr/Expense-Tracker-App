import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/global';

function Form() {

  const {addExpenses} = useGlobalContext()
  const [inputState, setInputState] = React.useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    date: ""
  })

    const {title, amount, category, description, date} = inputState

    const handleInput = (name) => (e) => {
      setInputState({...inputState, [name]: e.target.value})
    }

    const [errors, setErrors] = React.useState({})
  
    const validateForm = () => {
      if(!title || !amount || !category || !description || !date) {
        return false
      }
      if(amount <= 0 || !amount === 'number') {
        return false
      }
      return true
    }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!validateForm()) {
      setErrors({
        title: "Please enter a title",
        amount: "Please enter an amount",
        category: "Please select a category",
        description: "Please enter a description",
        date: "Please enter a date"
      })
      return console.log(validateForm())
    }
    // addExpenses(inputState)
    console.log("inputState", inputState)
  }
  

  return (
    <div className='w-2/5 py-8 px-4 sm:px-10 border flex flex-col justify-center items-center my-5' onSubmit={handleSubmit}>
      <h1 className='text-3xl font-extrabold mb-5'>Add Expenses</h1>
      <div className='w-full mb-4'>
        <input
          type="text"
          value={title}
          name='title'
          placeholder='Title'
          className='w-full py-2 px-3 border border-gray-300 rounded-md'
          onChange={handleInput('title')}
        />
        {errors.title && <p className='text-red-500'>{errors.title}</p>}
      </div>
      <div className='w-full mb-4'>
        <input
          type="text"
          value={amount}
          name='amount'
          placeholder='Amount'
          className='w-full py-2 px-3 border border-gray-300 rounded-md'
          onChange={handleInput('amount')}
        />
        {errors.amount && <p className='text-red-500'>{errors.amount}</p>}
      </div>
      <div className='w-full mb-4'>
        <select
          required
          name='category'
          id='category'
          value={category}
          className='w-full py-2 px-3 border border-gray-300 rounded-md'
          onChange={handleInput('category')}
        >
          <option value='' disabled>Select Category</option>
          <option value='salary'>Salary</option>
          <option value='freelance'>Freelance</option>
          <option value='investment'>Investment</option>
          <option value='other'>Other</option>
        </select>
        {errors.category && <p className='text-red-500'>{errors.category}</p>}
      </div>
      <div className='w-full mb-4'>
        <textarea
          type=""
          value={description}
          name='description'
          placeholder='Description'
          className='w-full py-2 px-3 border border-gray-300 rounded-md'
          cols="30"
          rows="4"
          onChange={handleInput('description')}
        />
        {errors.description && <p className='text-red-500'>{errors.description}</p>}
      </div>
      <div className='w-full mb-4'>
        <DatePicker
          id='date'
          placeholderText='Enter Date'
          selected={date}
          className='w-full py-2 px-3 border border-gray-300 rounded-md'
          dateFormat={"dd/MM/yyyy"}
          onChange={(date) => setInputState({ ...inputState, date })}
        />
        {errors.date && <p className='text-red-500'>{errors.date}</p>}
      </div>
      <button
        className='w-full text-yellow bg-primary rounded-md p-3 hover:bg-yellow hover:text-primary active:bg-primary active:text-yellow'
        onClick={handleSubmit}
      >
        Add Expense
      </button>
    </div>
  )
}

export default Form