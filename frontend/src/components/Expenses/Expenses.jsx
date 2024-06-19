import React from 'react'
import { LineChart } from 'lucide-react'
import { useGlobalContext } from '../../context/global'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Form from '../Form/ExpenseForm'
import TableData from './TableData'
import { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import UpdateForm from '../Form/updateExpense';
import { useState } from 'react';

const Expenses = () => {

  const { addExpense, fetchExpenses } = useGlobalContext()

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUpdate, setOpenUpdate] = React.useState(false);

  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleOpenUpdate = (expense) => {
    setSelectedExpense(expense);
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
    setSelectedExpense(null);
  };

  return (

    <div className='py-12 px-4 sm:px-10 w-full h-screen'>
      <h1 className='text-3xl font-extrabold text-primary'>Expenses <LineChart className='text-yellow inline mb-2' /></h1>
      <div className='flex justify-end'>
        <Button className=''
          color='success'
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleOpen}>
          Add Expenses
        </Button>
      </div>
      <div className=''>
        <TableData className=''
          setOpenUpdate={handleOpenUpdate}
        />
        <Form
          addExpense={addExpense}
          open={open}
          handleClose={handleClose}
        />
        <UpdateForm
          openUpdate={openUpdate}
          handleCloseUpdate={handleCloseUpdate}
          expense={selectedExpense}
        />
      </div>
    </div>
  )
}

export default Expenses