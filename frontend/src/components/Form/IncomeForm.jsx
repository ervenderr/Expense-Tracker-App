import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/global';

function Form() {

  const {addsIncome} = useGlobalContext()
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
      
      let isValid = true
      const errors = {}
  
      if(!title) {
        errors.title = "Title is required"
        isValid = false
      }
  
      if(!amount) {
        errors.amount = "Amount is required"
        isValid = false
      }
  
      if(!category) {
        errors.category = "Category is required"
        isValid = false
      }
  
      if(!description) {
        errors.description = "Description is required"
        isValid = false
      }
  
      if(!date) {
        errors.date = "Date is required"
        isValid = false
      }
  
      setErrors(errors)
      return isValid
    }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!validateForm()) {
      setErrors({
        title: !title ? "Title is required" : "",
        amount: !amount ? "Amount is required" : "",
        category: !category ? "Category is required" : "",
        description: !description ? "Description is required" : "",
        date: !date ? "Date is required" : ""
      })
      return console.log(validateForm())
    }
    // addsIncome(inputState)
    console.log("inputState", inputState)
  }
  

  return (
    <div className='w-full py-8 px-4 sm:px-10 border flex flex-col justify-center items-center my-5 mt-14 rounded-md' onSubmit={handleSubmit}>
      <h1 className='text-3xl font-extrabold mb-5'>Add Income</h1>
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
        Add Income
      </button>
    </div>
  )
}

export default Form