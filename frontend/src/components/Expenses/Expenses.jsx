import React from 'react'
import { LineChart } from 'lucide-react'
import { useGlobalContext } from '../../context/global'
import Form from '../Form/ExpenseForm'
import TableData from './TableData'
import { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Expenses = () => {

  const { addExpense, fetchExpenses } = useGlobalContext()

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div className='py-12 px-4 sm:px-10 w-full h-screen'>
      <h1 className='text-3xl font-extrabold text-primary'>Expenses <LineChart className='text-yellow inline mb-2' /></h1>
      <div className='grid lg:grid-cols-3 gap-5'>
        <TableData className='' />
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='flex justify-center items-center w-full'
        >
          <Box className='flex justify-center items-center'>
              <Form addExpense={addExpense} />
          </Box>
        </Modal>
        {/* <Form addExpense={addExpense} /> */}
      </div>
    </div>
  )
}

export default Expenses