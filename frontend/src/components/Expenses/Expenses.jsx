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

const Expenses = () => {

  const { addExpense, fetchExpenses } = useGlobalContext()

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUpdate, setOpenUpdate] = React.useState(false);
 
  const handleCloseUpdate = () => setOpenUpdate(false);

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
          setOpenUpdate={setOpenUpdate}
        />
        <Form
          addExpense={addExpense}
          open={open}
          handleClose={handleClose}
        />
        <UpdateForm
          addExpense={addExpense}
          openUpdate={openUpdate}
          handleCloseUpdate={handleCloseUpdate}
          />
      </div>
    </div>
  )
}

export default Expenses