import React from 'react'
import { AreaChart } from 'lucide-react'
import { useGlobalContext } from '../../context/global'
import Form from '../Form/IncomeForm'
import TableData from './TableData'

const Income = () => {

  const {addIncome} = useGlobalContext()

  return (

    <div className='py-12 px-4 sm:px-10 w-full h-screen'>
        <h1 className='text-3xl font-extrabold'>Income <AreaChart  className='text-yellow inline mb-2'/></h1>
        <div className='grid lg:grid-cols-3 gap-5'>
          <TableData className=''/>
          <Form addIncome={addIncome} />
        </div>
    </div>
  )
}

export default Income