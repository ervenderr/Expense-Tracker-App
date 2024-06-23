import React from 'react'
import { AreaChart } from 'lucide-react'
import { useGlobalContext } from '../../context/global'
import Form from '../Form/IncomeForm'
import TableData from './TableData'
import { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import UpdateForm from '../Form/updateIncome';
import { useState } from 'react';

const Income = () => {

  const { addIncome, fetchIncome } = useGlobalContext()

  useEffect(() => {
    fetchIncome();
  }, [fetchIncome]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUpdate, setOpenUpdate] = React.useState(false);

  const [selectedIncome, setSelectedIncome] = useState(null);

  const handleOpenUpdate = (Incom) => {
    setSelectedIncom(Incom);
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
    setSelectedIncom(null);
  };


  return (

    <div className='py-12 px-4 sm:px-10 w-full h-screen'>
      <h1 className='text-3xl font-extrabold text-primary'>Income <AreaChart className='text-yellow inline mb-2' /></h1>
      <div className='flex justify-between items-center mt-10'>
        <p className='text-xl font-semibold text-center'>Transactions</p>
        <Button className=''
          color='success'
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleOpen}>
          Add Income
        </Button>
      </div>
      <div className=''>
        <TableData className=''
          setOpenUpdate={handleOpenUpdate}
        />
        <Form
          addIncome={addIncome}
          open={open}
          handleClose={handleClose}
        />
        {/* <UpdateForm
          openUpdate={openUpdate}
          handleCloseUpdate={handleCloseUpdate}
          Income={selectedIncome}
        /> */}
      </div>
    </div>
  )
}

export default Income