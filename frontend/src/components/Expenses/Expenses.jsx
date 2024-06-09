import React from 'react'
import { LineChart } from 'lucide-react'
import { useGlobalContext } from '../../context/global'
import Form from '../Form/ExpenseForm'
import TableData from './TableData'

const Expenses = () => {

  const {addExpense} = useGlobalContext()

  return (

    <div className='py-12 px-4 sm:px-10 w-full h-screen'>
        <h1 className='text-3xl font-extrabold text-primary'>Expenses <LineChart  className='text-yellow inline mb-2'/></h1>
        <div className='grid lg:grid-cols-3 gap-5'>
          <TableData className=''/>
          <Form addExpense={addExpense} />
        </div>
    </div>
  )
}

export default Expenses