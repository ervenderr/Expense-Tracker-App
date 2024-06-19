import React, { useEffect } from 'react'
import { Box, Checkbox } from '@mui/material'
import DataTable from 'react-data-table-component'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useGlobalContext } from '../../context/global';

const sortIcon = <ArrowDownwardIcon />;
const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

const customStyles = {
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#f1c40f',
      backgroundColor: '#2c2b30',

    },
  },
  headRows: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000',
      backgroundColor: '#2c2b30',
    },
  },
  cells: {
    style: {
      fontSize: '16px',
      color: '#000',
    },
  },
}

function TableData({setOpenUpdate}) {

  const { expenses, deleteExpenses } = useGlobalContext();

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Amount',
      selector: row => row.amount,
    },
    {
      name: 'Category',
      selector: row => row.category,
    },
    {
      name: 'Description',
      selector: row => row.description,
    },
    {
      name: 'Date',
      selector: row => new Date(row.date).toLocaleDateString()
    },
    {
      name: 'Action',
      cell: row => (
        <div>
          <button 
            onClick={() => setOpenUpdate(row)}
            className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700 active:bg-blue-500 mr-2'
          >
            Update
          </button>
          <button 
            onClick={() => deleteExpenses(row._id)}
            className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 active:bg-red-500'
          >
            Delete
          </button>
        </div>
      )
    },
  ];
  
  return (
    <div className='lg:col-span-2 col-span-2 w-full py-5'>
        {/* <p className='text-2xl text-center mb-1 font-semibold text-primary'>TRANSACTION</p> */}
        <Box
            sx={{
                display: 'flex flex-col',
                justifyContent: 'start',
                alignItems: 'start',
                width: '100%',
                height: 550,
                borderStyle: 'solid',
                borderColor: 'primary',
                borderWidth: 1,
                borderRadius: 2,

            }}>
            <DataTable
              columns={columns}
              data={expenses}
              fontSize='16px'
              pagination
              selectableRowsComponent={Checkbox}
              selectableRowsComponentProps={selectProps}
              sortIcon={sortIcon}
              fixedHeader={true}
              customStyles={customStyles}
            />
        </Box>
    </div>
  )
}

export default TableData