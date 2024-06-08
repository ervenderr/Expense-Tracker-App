import React, { useEffect } from 'react'
import { Box, Checkbox } from '@mui/material'
import DataTable from 'react-data-table-component'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from 'axios';

const sortIcon = <ArrowDownwardIcon />;
const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

const customStyles = {
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#f1c40f',
      backgroundColor: '#000',
    },
  },
  headRows: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000',
      backgroundColor: '#f1c40f',
    },
  },
  cells: {
    style: {
      fontSize: '16px',
      color: '#000',
    },
  },
}

function TableData() {

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
      selector: row => row.date,
    },
  ];
  
  const [data, setData] = React.useState([])


  useEffect(() => {
    const fetchIncome = async () => {
      axios.get('http://localhost:5000/api/v1/get-income')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
    }
    fetchIncome()
  }, [])


  return (
    <div className='lg:col-span-2 col-span-2 w-full py-5'>
        <p className='text-2xl text-center mb-1 font-semibold'>TRANSACTION</p>
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
              data={data}
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